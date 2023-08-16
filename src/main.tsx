import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
    background: {
      paper: "#302f37"
    }
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: blueGrey,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
