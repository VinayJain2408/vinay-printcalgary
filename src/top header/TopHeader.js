import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TopHeader() {
  return (
    <Box >
      <AppBar position="static" sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <PhoneCallbackIcon /><span>(403) 235-1616</span>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MailOutlineIcon /><span>orders@printcalgary.com</span>
          </IconButton>

        </Toolbar>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <PersonIcon /><span>My Account</span>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FavoriteIcon /><span>Wishlist</span>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}