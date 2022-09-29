import React from 'react';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Home,CurrencyBitcoin,Feed } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Stack
        direction="column"
        sx={{
            width: '17%',
        }}
    >
        <ul className='sidebar'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    <Home /> Homepage
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/cryptocurrencies'>
                    <CurrencyBitcoin /> Cryptocurrencies
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/news'>
                    <Feed/> News
                </NavLink>
            </li>
        </ul>
  </Stack>
  );
};

export default Sidebar;