import * as React from 'react';
import Box from '@mui/material/Box';
import banner from '../assets/banner.jpg'

export default function BoxSx() {
  return (
    <>
    <Box style={{
        display:'flex',
        margin:'0 , 10px'
    }}>

   
    <Box
      sx={{
        width: '50%',
        height: '80vh',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    <Box
      style={{
        width: '50%',
        height: '80vh',
        backgroundImage:`url({banner})`
        }
      }
    />

    {/* <img src={banner}
    style={{
        height:'100%',
        width:'100%'
    }}
    ></img> */}
     </Box>
  </>
  );
}