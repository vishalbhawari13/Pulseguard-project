import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    height: "175 cm",
    weight: "70 kg",
    age: 29,
    profilePic: "https://via.placeholder.com/150"
  });

  return (
    <motion.div 
      className="card horizontal-card" 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="profile-details"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Height:</strong> {profileData.height}</p>
        <p><strong>Weight:</strong> {profileData.weight}</p>
        <p><strong>Age:</strong> {profileData.age}</p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/edit-profile">
            <button className="edit-button">Edit</button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className="image-container"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 5 }} // Adds hover animation to image
      >
        <img 
          src={profileData.profilePic} 
          alt="User" 
          className="profile-image" 
        />
      </motion.div>
    </motion.div>
  );
};

export default Profile;
