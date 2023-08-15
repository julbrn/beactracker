import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
