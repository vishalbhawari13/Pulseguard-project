import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import './HeartPulseData.css'; // Add styles in a separate CSS file

const HeartPulseData = () => {
  // Sample heart rate data
  const heartRateData = {
    latestReading: 72,
    avgHeartRate: 68,
    maxHeartRate: 85,
    minHeartRate: 60,
    date: "2024-11-06",
    time: "10:30 AM",
    maxDate: "2024-11-06",
    maxTime: "08:15 AM",
    minDate: "2024-11-06",
    minTime: "07:45 AM"
  };

  return (
    <motion.div 
      className="card" 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth fade-in and scaling effect
    >
      <motion.div 
        className="pulse-info"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>Heart Pulse Data</h2>
        <p><strong>Latest Reading:</strong> {heartRateData.latestReading} bpm</p>
        <p><strong>Date & Time:</strong> {heartRateData.date} at {heartRateData.time}</p>
      </motion.div>

      <motion.div 
        className="pulse-stats"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>Heart Rate Statistics</h3>
        <p><strong>Average Heart Rate:</strong> {heartRateData.avgHeartRate} bpm</p>
        <p><strong>Max Heart Rate:</strong> {heartRateData.maxHeartRate} bpm 
           <span> on {heartRateData.maxDate} at {heartRateData.maxTime}</span></p>
        <p><strong>Min Heart Rate:</strong> {heartRateData.minHeartRate} bpm 
           <span> on {heartRateData.minDate} at {heartRateData.minTime}</span></p>
      </motion.div>

      <motion.div 
        className="pulse-graph"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="graph-placeholder">
          <p>Graph of Previous Data (To be implemented)</p>
          {/* Add your actual graph component here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeartPulseData;
