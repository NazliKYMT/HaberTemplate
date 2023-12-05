import PropTypes from 'prop-types';
import { Box, Grid, Paper, Typography,Button } from "@mui/material";
import CardComponents2 from '../component/card2';
import "../css/home.css"

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
      <Box className="box1" sx={{
            backgroundImage:`url(${data.image})`,
            }}>
          <Box className='typ4'>
         <Typography  variant='h4'
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "end",
            color:"white",
            height:"500px",
            marginLeft:"20px"
          }}
         >
      {data.dBaslik}
         </Typography>   
          <CardComponents2 key={data.key} data={data}/>      
              </Box>
        
      </Box>
      <Box sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"space-between",
      width:"100%"
      }}
  >     
      <Grid   item xs={12} sm={12} md={6} sx={{padding:"5px" }}>
          <Box sx={{
            borderRadius: "5px",
            backgroundImage:`url(${data.image})`,
            backgroundSize:"cover",
            width:"100%",
            height:"420px",
            }}>
            <Box className="typ4">
              <Typography  variant='h4'
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
              {data.dBaslik} aa
          
            </Typography>
            <CardComponents2 key={data.key} data={data}/>  </Box>    
          </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} sx={{padding:"5px" }}>
          <Box sx={{
              borderRadius: "5px",
              backgroundImage:`url(${data.image})`,
              backgroundSize:"cover",
              width:"100%",
              height:"420px",
            }}>
            <Box className="typ4">
          <Typography variant='h4'
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
              {data.dBaslik}
          
            </Typography>
            <CardComponents2 key={data.key} data={data}/>  </Box>  
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
               backgroundImage:`url(${data.image})`,
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
                 <Box className="typ4">
                 <Typography variant='h4'
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
             >
                 {data.dBaslik}</Typography> 
                 <CardComponents2 key={data.key} data={data}/>    
                 </Box></Box>
                 <Box sx={{
               width:"100%",
               backgroundImage:`url(${data.image})`,
               backgroundSize:"cover",
               height:"50%",                
               borderRadius: "5px",
               display: "flex",
               flexDirection:"column",
               justifyContent:"flex-end",
               alignItems:"flex-start",
               color:"white",  marginBottom:"20px", }}
               > <Box className="typ4">
                    <Typography variant='h4'
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
             >{data.dBaslik}</Typography>
              <CardComponents2 key={data.key} data={data}/>    
                 </Box> </Box>
       </Box>
     </Grid>
     </Grid>
     );
};
cardComponents.prototype={
    data:PropTypes.array
};