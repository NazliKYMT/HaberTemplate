import * as React from 'react';
import { useEffect, useState } from "react";
import { Box, Divider, Chip, Grid, Paper, Typography,Button } from "@mui/material";
import CardComponents from '../component/card';





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
      <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight:"1050px",
        marginTop:"10px"
      }}
    >
      <Grid container spacing={3} sm={12}  xs={12} md={12} sx={{width:"100%", margin:"10px"}} >     
      
        {data.map((item, index) => (
           <CardComponents key={index} data={item} />        
        ))} 
      </Grid>
    </Box>
  );
}
  
