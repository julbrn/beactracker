import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/ru";
import { ruRU } from '@mui/x-date-pickers/locales';


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#558b2f"
    },
    background: {
      paper: "#161616"
    }
  },
}, ruRU);

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#558b2f"
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);