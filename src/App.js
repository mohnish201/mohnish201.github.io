import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Main_Routes from "./Components/Main_Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <HomePage />
      <Skills />
      <About />
      <Projects />
      <Contact /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
