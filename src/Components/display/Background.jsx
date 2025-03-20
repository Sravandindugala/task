import React, { useState, useEffect } from 'react';
import './Background.css';
import logo3 from '../assets/logos/logo3.png';
import Submitform from '../Submit/Submitform';
import { FaBars, FaTimes } from 'react-icons/fa';

const Background = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  function scrollSection (id){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  }

  return (
    <div className='display'>
      <nav className="navbar">
        <img src={logo3} alt='Logo' className='nav-logo' />
        {isMobile ? (
          <button className='menu-button' onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        ) : (
          <ul className="nav-links">
            <li><a href="#classes" onClick={() => scrollSection("popular")}>Classes</a></li>
            <li><a href="#workouts" onClick={() => scrollSection("price")}>Personal Workouts</a></li>
            <li><a href="#schedule" onClick={() => scrollSection("about")}>About us</a></li>
            <button className='nav-button-text' onClick={() => setShowPopup(true)}>Enquiry now</button>
          </ul>
        )}
      </nav>
      {isMobile && sidebarOpen && (
        <div className='sidebar'>
          <button className='menu-button-x' onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul>
            <li><a href="#classes" onClick={() => scrollSection("popular")}>Classes</a></li>
            <li><a href="#workouts" onClick={() => scrollSection("price")}>Personal Workouts</a></li>
            <li><a href="#schedule" onClick={() => scrollSection("about")}>About us</a></li>
          
            <button className='nav-button-text-s' onClick={() => setShowPopup(true)}>Enquiry now</button>
          </ul>
        </div>
      )}
      <div className="hero-content">
        <h1>Balance Your Mind, Energize Your Body, Transform Your Life!</h1>
        <p>Move with purpose, breathe with intention, live with passion.</p>
        <button className='hero-button' onClick={() => setShowPopup(true)}>Enquiry Now</button>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={() => setShowPopup(false)}>×</button>
            <Submitform />
          </div>
        </div>
      )}
    </div>
  );
};
export default Background;
