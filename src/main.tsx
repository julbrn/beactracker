import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
});

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
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);