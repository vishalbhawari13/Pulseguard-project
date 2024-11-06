import React from 'react';
import { motion } from 'framer-motion'; // For animations
import './SleepCycle.css'; // For styling

const SleepCycle = () => {
  // Sample sleep data
  const sleepData = {
    latestSleep: {
      hours: 7,
      minutes: 30,
      date: "2024-11-05",
      time: "11:00 PM to 6:30 AM"
    },
    avgSleep: 7.5,  // Average sleep in hours
    dailySleep: [
      { date: "2024-11-04", hours: 8, minutes: 15 },
      { date: "2024-11-03", hours: 6, minutes: 45 },
      { date: "2024-11-02", hours: 7, minutes: 10 },
      // Add more data here...
    ]
  };

  return (
    <motion.div 
      className="sleep-cycle-card" 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth fade-in and scaling effect
    >
      <motion.div 
        className="sleep-info"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>Sleep Cycle</h2>
        <p><strong>Latest Sleep:</strong> {sleepData.latestSleep.hours} hours {sleepData.latestSleep.minutes} minutes</p>
        <p><strong>Date:</strong> {sleepData.latestSleep.date}</p>
        <p><strong>Time:</strong> {sleepData.latestSleep.time}</p>
      </motion.div>

      <motion.div 
        className="sleep-stats"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3>Sleep Statistics</h3>
        <p><strong>Average Sleep:</strong> {sleepData.avgSleep} hours</p>
        <p><strong>Daily Sleep Data:</strong></p>
        <ul>
          {sleepData.dailySleep.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.hours} hours {entry.minutes} minutes
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className="sleep-graph"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="graph-placeholder">
          <p>Graph of Sleep Data (To be implemented)</p>
          {/* Add your actual graph component here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SleepCycle;
