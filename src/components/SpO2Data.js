import React from 'react';
import { motion } from 'framer-motion'; // For animations
import './SpO2Data.css'; // For styling

const SpO2Data = () => {
  // Sample SpO2 data
  const spO2Data = {
    latestSpO2: 98, // Latest SpO2 level
    avgSpO2: 97.5,  // Average SpO2 level
    minSpO2: 94,    // Minimum SpO2 level in last 24 hours
    maxSpO2: 99,    // Maximum SpO2 level in last 24 hours
    lastMeasurement: {
      date: "2024-11-05",
      time: "08:30 AM",
    }
  };

  return (
    <motion.div 
      className="spO2-card" 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth fade-in and scaling effect
    >
      <motion.div 
        className="spO2-info"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>SpO2 Data</h2>
        <p><strong>Latest SpO2 Level:</strong> {spO2Data.latestSpO2}%</p>
        <p><strong>Date:</strong> {spO2Data.lastMeasurement.date}</p>
        <p><strong>Time:</strong> {spO2Data.lastMeasurement.time}</p>
      </motion.div>

      <motion.div 
        className="spO2-stats"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>SpO2 Statistics</h3>
        <p><strong>Average SpO2 Level:</strong> {spO2Data.avgSpO2}%</p>
        <p><strong>Minimum SpO2 Level (24 hrs):</strong> {spO2Data.minSpO2}%</p>
        <p><strong>Maximum SpO2 Level (24 hrs):</strong> {spO2Data.maxSpO2}%</p>
      </motion.div>

      <motion.div 
        className="spO2-graph"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="graph-placeholder">
          <p>Graph of SpO2 Levels (To be implemented)</p>
          {/* Add your actual graph component here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpO2Data;
