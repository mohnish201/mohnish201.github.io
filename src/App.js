import logo from "./logo.svg";
import React, { useCallback } from 'react';
import "./App.css";
import HomePage from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Main_Routes from "./Components/Main_Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Statistics from "./Pages/Statistics";




function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  return (
    <div className="App"  >
     
     <Particles options={particlesOptions} init={particlesInit}/>
      <Navbar />


      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Statistics/>
      <Contact/>
    </div>
  );
}

export default App;
