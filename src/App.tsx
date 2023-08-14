import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
