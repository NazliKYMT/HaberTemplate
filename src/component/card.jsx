import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Divider, Chip, Grid, Paper, Typography,Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

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
console.log(mdx)
    return(     
      <Grid item xs={12} md={4}>
      <Paper sx={{ borderRadius: "15px", backgroundColor: "#35356b" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10px",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="https://e7.pngegg.com/pngimages/24/817/png-clipart-playstation-4-raiders-of-the-broken-planet-playstation-network-playstation-plus-playstation-electronics-text.png"
              alt="cardimage"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <Typography variant="p">{data.name}</Typography>
          </Box>

          <Divider sx={{ width: "99%", mt: 1 }} />
          <Typography variant="p" sx={{ mt: 1 }}>
            {data.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10px",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Chip label={data.chip} color={data.chipColor} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.svgrepo.com/show/13695/star.svg"
                alt="cardimage"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <Typography variant="h6">{data.name}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Hmlxrb-nSWkZtxnUJgW9fyLgiSf_Re9tw&usqp=CAU"
                alt="cardimage"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <Typography variant="h6">{data.name}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEWGtqr8nQtm3GSnkk3QCL2CwQou1zr4FiA&usqp=CAU"
                alt="cardimage"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <Typography variant="h6">{data.name}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
     );
    }
cardComponents.prototype={
    data:PropTypes.array
};