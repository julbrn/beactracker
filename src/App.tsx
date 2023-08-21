import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function App() {
  return (
    <BrowserRouter>
      <Paper sx={{ borderRadius: 0 }}>
        <Box className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Box>
      </Paper>
    </BrowserRouter>
  );
}

export default App;
