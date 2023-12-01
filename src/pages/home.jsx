import * as React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



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
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=2bee3f0bec534ddab1da487955bef840")
      .then((res) => res.json())
      .then((res) => {
        setData(res.articles);
        console.log(res.articles);
      });

  }, []);

     return(     
      <Box  sx={{ flexGrow: 1,width:"1700px",background:"#e9e9e9",m:4,p:5}}>
            {data.map((item) => (
        <Grid container spacing={1}>  
          <Grid item md={6}>
             <Item style={{height:"400px",backgroundImage: `url(${item.urlToImage})`,backgroundSize:"cover"}}> 
                      <Card sx={{ maxWidth: 345 ,background:'none',color:"white"}}>
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                         </Typography>
                       
                          <Typography variant="body2">
                            {item.title}
                             </Typography>
                       </CardContent>
                       <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                       </CardActions>
                     </Card>
                     <Card sx={{ maxWidth: 345 ,background:'none',color:"white"}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                  </Typography>
                  <Typography variant="body2">
                 dsd
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
             </Item>
             
            
          </Grid> 
        </Grid>
        ))}
      </Box>

  );
}
  
