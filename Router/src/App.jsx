import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter as Router, Routes, Route}from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
    <>
      <Router>
        <NavBar/>

        <Routes>
        {/*Works like a switch case with * as the default */}

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
