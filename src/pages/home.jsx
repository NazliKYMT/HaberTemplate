import * as React from 'react';
import { useEffect, useState } from "react";
import { Box, Divider, Chip, Grid, Paper, Typography,Button } from "@mui/material";
import CardComponents from '../component/card';
import '../css/home.css';




export default function HomeScreen()
{ 
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch("https://localhost:44305/api/icerikler/tumIcerikler/1/10/2/54/T")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });

  }, []);

     return(  
      <Box className="boxa"
    >
      <Grid container spacing={3} sm={12}  xs={12} md={12} sx={{width:"100%", margin:"10px"}} >     
      
        {data.map((item, index) => (
           <CardComponents key={index} data={item} />        
        ))} 
      </Grid>
    </Box>
  );
}
  
