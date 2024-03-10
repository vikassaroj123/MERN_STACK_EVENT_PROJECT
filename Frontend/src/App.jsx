import React from 'react'
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Component/NavBar'
import HeroSection from './Component/HeroSection'
import Services from './Component/Services'
import Contact from './Component/Contact'
import About from './Component/About'
import Footer from './Component/Footer'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router >
      <NavBar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App