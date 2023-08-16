import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function App() {
  return (
    <BrowserRouter>
      <Paper>
        <Box className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          <Footer />
        </Box>
      </Paper>
    </BrowserRouter>
  );
}

export default App;
