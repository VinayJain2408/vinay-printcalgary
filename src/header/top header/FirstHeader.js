import React from 'react'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Firstheader.css'

function FirstHeader() {
  return (
    <div className='head'>
        <div className='middle'>
            <p><PhoneCallbackIcon /><span>(403) 235-1616</span></p>
            <p><MailOutlineIcon /><span>orders@printcalgary.com</span></p>
        </div>
        <div className='middle'>
            <p><PersonIcon /><span>My Account</span></p>
            <p><FavoriteIcon /><span>Wishlist</span></p>
        </div>
    </div>
  )
}

export default FirstHeader