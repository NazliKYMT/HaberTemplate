import * as React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardComponents from '../component/card';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function HomeScreen()
{ 
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });

  }, []);

     return(     
      <Box  sx={{ flexGrow: 1,background:"#e9e9e9",m:4,p:5}}>
            <Grid container spacing={2}>  
            {data.map((item,index) => (    
              
            <CardComponents  key={index} data={item}/>
        ))}
        
        </Grid>
      </Box>

  );
}
  
