import * as React from 'react';
import './firstheader.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';

export default function TopHeader() {
  return (
    <Box sx={{
    }}>
      <AppBar position="static" sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.5rem',
       background:"#eeeeee",
        padding:'10px 2px'
      }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <PhoneCallbackIcon 
            style={{
              fontSize:'1.2rem',
              color:'#ec407a'
            }}/>
            <span 
            style={{
              fontSize:'1.2rem',
              color:'black'
            }}>(403) 235-1616</span>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MailOutlineIcon 
            style={{
              fontSize:'1.2rem',
              color:'#ec407a'
            }}/>
            <span
            style={{
              fontSize:'1.2rem',
              color:'black'
            }}
            >orders@printcalgary.com</span>
          </IconButton>

        </Toolbar>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <PersonIcon 
              style={{
                fontSize:'1.2rem',
                color:'#ec407a'
              }}
            /><span
            style={{
              fontSize:'1.2rem',
              color:'black'
            }}
            >My Account</span>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FavoriteIcon 
              style={{
                fontSize:'1.2rem',
                color:'#ec407a'
              }}
            /><span
            style={{
              fontSize:'1.2rem',
              color:'black'
            }}
            >Wishlist</span>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}