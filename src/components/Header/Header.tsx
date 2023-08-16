import React from "react";
import "./header.css";
import Logo from "../../assets/logo2.png";
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

export default function Header() {
  const { pathname } = useLocation();
  const isProfile = pathname === '/profile';

  return (
    <header className="header">
      <AppBar position="fixed">
        <Toolbar>
          <Box className="header__logo-wrapper">
            <img className="header__logo" src={Logo} alt="logo" />
            <Typography variant="h6">BeAcTracker</Typography>
            <Switch></Switch>
          </Box>
          {isProfile ? <Box className="header__details">
            <Typography variant="h6">Jessica</Typography>
            <Avatar src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=835" variant="rounded" alt="Фото профиля" />
            <Button variant="contained">Выйти</Button>
          </Box> : null}
        </Toolbar>
      </AppBar>
    </header>
  );
}
