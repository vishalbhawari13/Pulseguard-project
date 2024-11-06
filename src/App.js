import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import HeartPulseData from './components/HeartPulseData';
import SleepCycle from './components/SleepCycle';
import SpO2Data from './components/SpO2Data';
import StepsCount from './components/StepsCount';
import EditProfile from './components/EditProfile'; // Import EditProfile component
import './App.css';

function App() {
  // State to store the profile data
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    height: "175 cm",
    weight: "70 kg",
    age: 29,
    profilePic: "https://via.placeholder.com/150" // Default profile picture
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Header />} /> {/* Home route */}
              <Route path="/profile" element={<Profile profileData={profileData} />} />
              <Route path="/heart-pulse-data" element={<HeartPulseData />} />
              <Route path="/sleep-cycle" element={<SleepCycle />} />
              <Route path="/spo2-data" element={<SpO2Data />} />
              <Route path="/steps-count" element={<StepsCount />} />
              {/* Add Edit Profile route */}
              <Route
                path="/edit-profile"
                element={<EditProfile profileData={profileData} setProfileData={setProfileData} />}
              />
              {/* Add more routes here if needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
