import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo as a Home button with animation */}
      <motion.div
        className="logo"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          color: "#0077ff", // Change color on hover
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/">
          <h1>PulseGuard</h1>
        </Link>
      </motion.div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <motion.div 
          className="bar"
          initial={{ width: '30px' }}
          animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="bar"
          initial={{ width: '30px' }}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="bar"
          initial={{ width: '30px' }}
          animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/analytics">Analytics</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/health-tips">Health Tips</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/contact">Contact</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="sign-btn">
          <Link to="/signout">Sign Out</Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
