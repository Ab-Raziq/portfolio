import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
