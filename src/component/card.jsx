import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Divider, Chip, Grid, Paper, Typography,Card,CardContent,CardActions,Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function cardComponents({ data }){
  var mdx;
  if(data.id==1){
    mdx=7;
  }
  else if(data.id==2){
  mdx=5;}
  else{
  mdx=4;
}
console.log(mdx)
    return(     
      <Grid item md={mdx} xs={mdx}>
      <Item style={{height:"400px",backgroundImage: `url(https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-131.jpg?w=1060&t=st=1701632662~exp=1701633262~hmac=a1006e57b01f921a804632c447634e73f7c445d7909d99996b442f103acc5c6b)`,backgroundSize:"cover"}}> 
               <Card sx={{background:'none',color:"white"}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {data.name  }{ data.username}
                  </Typography>
                
                   <Typography variant="body2">
                     {data.name}
                      </Typography>
                </CardContent>
                <CardActions style={{marginBottom:0}}>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
      </Item>
   </Grid> 
     
     );
    }
cardComponents.prototype={
    data:PropTypes.array
};