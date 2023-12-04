import PropTypes from 'prop-types';
import { Box, Grid, Paper, Typography,Button } from "@mui/material";
import CardComponents2 from '../component/card2';

export default function cardComponents({ data }){
  var mdx;
  var heightx;
  var widthx;
  if(data.id==1){
    mdx=12;
    heightx="500px";
    widthx="1200px"
    
  }

  else{
  mdx=6;
  heightx="300px";
  widthx="400px"
}
    return(   
      <Grid container spacing={3} sm={12}  xs={12} md={12} sx={{width:"100%"}} >    
      <Grid item xs={12} md={8} >  
      <Box sx={{
        borderRadius: "5px",
        backgroundColor: "#35356b",
        backgroundImage:`url(${"https://images.unsplash.com/photo-1585592377048-a627ec452b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDE2OTczNDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"})`,
        backgroundSize:"cover",
        height:"600px",
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems:"flex-start",marginBottom:"10px"
        }}>
         <Typography variant='h2'
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            margin:"30px",
            color:"white"
          }}
         >
      {data.name}
    </Typography>   
     <CardComponents2 key={data.key} data={data}/>      
      </Box>
      <Box sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"space-between",
      width:"100%"
      }}
  >     
      <Grid  item xs={12} sm={12} md={6} sx={{padding:"5px" }}>
          <Box sx={{
            borderRadius: "5px",
            backgroundImage:`url(${"https://images.unsplash.com/photo-1585592377048-a627ec452b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDE2OTczNDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"})`,
            backgroundSize:"cover",
            width:"100%",
            height:"420px",
            }}>
                    
              <Typography variant='h2'
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent:"flex-end",
                  alignItems:"flex-start",
                  width:"100%",  
                  height:"350px",
                  color:"white",
                  marginLeft:"20px"                
                }}
              >
                içerikkkss sol
          
            </Typography>
            <CardComponents2 key={data.key} data={data}/>    
          </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} sx={{padding:"5px" }}>
          <Box sx={{
              borderRadius: "5px",
              backgroundImage:`url(${"https://images.unsplash.com/photo-1585592377048-a627ec452b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDE2OTczNDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"})`,
              backgroundSize:"cover",
              width:"100%",
              height:"420px",
            }}>
          
          <Typography variant='h2'
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent:"flex-end",
                  alignItems:"flex-start",
                  width:"90%",  
                  height:"350px",
                  color:"white",
                  marginLeft:"20px"                
                }}
              >
                içerikkkss sağ
          
            </Typography>
            <CardComponents2 key={data.key} data={data}/>    
          </Box>
      </Grid>
      </Box>  
     </Grid>
       <Grid item xs={12}  md={4} >
       <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          width:"100%",height:"100%",
         paddingBottom:"10px"}}>
             <Box sx={{
               width:"100%",
               backgroundImage:`url(${"https://images.unsplash.com/photo-1585592377048-a627ec452b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDE2OTczNDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"})`,
               backgroundSize:"cover",
               height:"50%",                
               borderRadius: "5px",
               display: "flex",
               flexDirection:"column",
               justifyContent:"flex-end",
               alignItems:"flex-start",
               color:"white" , marginBottom:"20px"  
             }}
               >  
                 <Typography variant='h2'
               sx={{
                 display: "flex",
                 flexDirection:"column",
                 justifyContent:"flex-end",
                 alignItems:"flex-start",
                 width:"90%",  
                 height:"350px",
                 color:"white",
                 marginBottom:"20px",
                 marginLeft:"10px"                 
               }}
             >
                 fdf</Typography> 
                 <CardComponents2 key={data.key} data={data}/>    
                 </Box>
                 <Box sx={{
               width:"100%",
               backgroundImage:`url(${"https://img.freepik.com/free-photo/global-connections_53876-89039.jpg?w=1380&t=st=1701687394~exp=1701687994~hmac=68503d3719a8658b1730851f4f78c828027f415c7f02f5e1b9189e7ae1ca4962"})`,
               backgroundSize:"cover",
               height:"50%",                
               borderRadius: "5px",
               display: "flex",
               flexDirection:"column",
               justifyContent:"flex-end",
               alignItems:"flex-start",
               color:"white",  marginBottom:"20px", }}
               >
                    <Typography 
               sx={{
                 display: "flex",
                 flexDirection:"column",
                 justifyContent:"flex-end",
                 alignItems:"flex-start",
                 width:"90%",  
                 height:"400px",
                 color:"white",
                 marginBottom:"20px",
                 marginLeft:"10px"                  
               }}
             >fdf</Typography>
              <CardComponents2 key={data.key} data={data}/>    
                 </Box>
       </Box>
     </Grid>
     </Grid>
     );
};
cardComponents.prototype={
    data:PropTypes.array
};