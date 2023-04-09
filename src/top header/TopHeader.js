import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function TopHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <PhoneCallbackIcon /><span>(403) 235-1616</span>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MailOutlineIcon /><span>orders@printcalgary.com</span>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}