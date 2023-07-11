import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Skills from "../Pages/Skills";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

function Main_Routes() {
  return (
    <div>
      <HashRouter>
        <Route  exact path="/" Component={<HomePage />} />
        <Route path="/skills" Component={<Skills />} />
        <Route path="/about" Component={<About />} />
        <Route path="/projects" Component={<Projects />} />
        <Route path="/contact" Component={<Contact />} />
      </HashRouter>
    </div>
  );
}

export default Main_Routes;
