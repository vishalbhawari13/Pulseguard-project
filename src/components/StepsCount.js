import React from 'react';
import { motion } from 'framer-motion'; // For animations
import './StepsCount.css'; // For styling

const StepsCount = () => {
  // Sample steps data
  const stepsData = {
    stepsToday: 5400, // Steps taken today
    avgSteps: 6500,   // Average daily steps
    totalSteps: 123456, // Total steps taken till now
    lastMeasurement: {
      date: "2024-11-05",
      time: "06:00 PM",
    }
  };

  return (
    <motion.div 
      className="steps-card" 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth fade-in and scaling effect
    >
      <motion.div 
        className="steps-info"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>Steps Count</h2>
        <p><strong>Steps Today:</strong> {stepsData.stepsToday}</p>
        <p><strong>Date:</strong> {stepsData.lastMeasurement.date}</p>
        <p><strong>Time:</strong> {stepsData.lastMeasurement.time}</p>
      </motion.div>

      <motion.div 
        className="steps-stats"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>Steps Statistics</h3>
        <p><strong>Average Daily Steps:</strong> {stepsData.avgSteps}</p>
        <p><strong>Total Steps:</strong> {stepsData.totalSteps}</p>
      </motion.div>

      <motion.div 
        className="steps-graph"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="graph-placeholder">
          <p>Graph of Steps Count (To be implemented)</p>
          {/* Add your actual graph component here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StepsCount;
