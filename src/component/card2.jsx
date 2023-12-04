import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Divider, Chip, Grid, Paper, Typography,Button } from "@mui/material";


const item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function cardComponents2({ data }){

console.log(data.name +" card2")
    return(   
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%",height:"50px",margin:"20px"}}>
              
              <Typography variant='h6'
                 sx={{
                   height:"50px",
                   color:"white"               
                 }}
               >
                   {data.phone}</Typography> 
                   <Typography variant='h6'
                 sx={{
                   height:"50px",
                   color:"white",  
                   marginRight:"30px"               
                 }}
               >
                {data.website}</Typography> 
                  
         </Box> 
     );
};
cardComponents2.prototype={
    data:PropTypes.array
};