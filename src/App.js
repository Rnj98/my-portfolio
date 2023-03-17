import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/styles/Navbar";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import './App.css'




export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}