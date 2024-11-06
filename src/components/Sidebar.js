import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-hide sidebar after 7 seconds of inactivity
  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setTimeout(() => {
        setIsSidebarOpen(false); // Collapse sidebar partially after 7 seconds
      }, 7000);
    } else {
      setIsSidebarOpen(true); // Expand sidebar when hovered
    }

    return () => clearTimeout(timer); // Clear timeout on hover
  }, [isHovered]);

  return (
    <motion.nav
      className={`sidebar ${isSidebarOpen ? 'expanded' : 'partially-hidden'}`}
      initial={{ x: 0 }}
      animate={{ x: isSidebarOpen ? 0 : '-80%' }} // Move partially out when inactive
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onMouseEnter={() => setIsHovered(true)} // Expand on hover
      onMouseLeave={() => setIsHovered(false)} // Collapse after mouse leaves
    >
      
      <ul className="sidebar-links">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/profile">Profile</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/heart-pulse-data">Heart Pulse Data</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/sleep-cycle">Sleep Cycle</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/spo2-data">SpO2 Data</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/steps-count">Steps Count</Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Sidebar;
