import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        Banner
        About
        Services
        Be A Helping Hand
        Contact        
      </div>  
      <Footer />

    </>
  )
}

export default Home
