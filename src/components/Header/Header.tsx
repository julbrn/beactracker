import React from "react";
import "./header.css";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import Link from '@mui/material/Link';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isProfile = pathname === '/profile';
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/")
  };

  const handleLogin = () => {
    navigate("/login")
  };

  const handleRegister = () => {
    navigate("/register")
  };

  return (
    <>
      <header className="header">
        <AppBar position="fixed" sx={{ paddingTop: { xs: "1rem", sm: 0 } }}>
          <Toolbar sx={{ flexDirection: { xs: "column", sm: "row" } }}>
            <div className="header__logo-wrapper">
              <Link href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}><BeenhereIcon />
                <Typography variant="h6">BeAcTracker</Typography></Link>
              <Switch></Switch>
            </div>
            {isProfile ? <div className="header__details" >
              <Typography variant="h6">Jessica</Typography>
              <Avatar src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=835" variant="rounded" alt="Фото профиля" />
              <Button variant="contained" onClick={handleClickOpen} ><ExitToAppIcon sx={{ paddingRight: "3px" }} /> Выйти</Button>
            </div> :
              <div className="header__details">
                <Button variant="contained" onClick={handleLogin}>Вход</Button>
                <Button variant="contained" onClick={handleRegister}>Регистрация</Button></div>}
          </Toolbar>
        </AppBar>
      </header>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Хотите выйти из аккаунта?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel}>Ой, нет!</Button>
          <Button onClick={handleClose} autoFocus>
            Ага!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
