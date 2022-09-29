import React from 'react';
import { AppBar,Toolbar,IconButton,Typography, Box, Badge, Avatar } from '@mui/material';
import { AccountCircle, Mail, Notifications } from '@mui/icons-material';
import cryptoverse from '../images/cryptoverse.png';

const Navbar = () => {
  return (
    <div className='root'>
        <AppBar 
            sx={{ 
                justifyContent: 'center', 
                backgroundColor: '#f0f0f0',  
                height: '70px', 
                borderRadius: '50px 0 0 50px',
                position: 'sticky',
                top: 0
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"            
                >
                    <Avatar src={cryptoverse} />
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '900', color: '#010606' }}>
                    Cryptoverse
                </Typography>
                <Box sx={{ display: { md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <Mail sx={{ color: '#010606' }} />
                    </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                    <Badge badgeContent={17} color="error">
                        <Notifications sx={{ color: '#010606' }} />
                    </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                    <AccountCircle sx={{ color: '#010606' }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Navbar;