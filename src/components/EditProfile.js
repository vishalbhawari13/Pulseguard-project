import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EditProfile.css';

const EditProfile = ({ profileData, setProfileData }) => {
  // Initialize editData with profileData
  const [editData, setEditData] = useState(profileData);
  const navigate = useNavigate();

  // Update editData whenever profileData changes
  useEffect(() => {
    setEditData(profileData);
  }, [profileData]);

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (Save button)
  const handleSave = () => {
    // Log to check if data is correct before saving
    console.log("Saving data:", editData);

    setProfileData(editData); // Save the updated data in parent component
    navigate('/profile'); // Redirect to profile page
  };

  // Handle Back button click (discard changes)
  const handleBack = () => {
    navigate('/profile'); // Redirect to profile page without saving changes
  };

  return (
    <motion.div 
      className="edit-profile-card" 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Edit Profile</h2>

      {/* Profile Form */}
      <div className="form-container">
        <label>
          <strong>Name:</strong>
          <input 
            type="text" 
            name="name" 
            value={editData.name || ''} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Email:</strong>
          <input 
            type="email" 
            name="email" 
            value={editData.email || ''} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Height:</strong>
          <input 
            type="text" 
            name="height" 
            value={editData.height || ''} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Weight:</strong>
          <input 
            type="text" 
            name="weight" 
            value={editData.weight || ''} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Age:</strong>
          <input 
            type="number" 
            name="age" 
            value={editData.age || ''} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <strong>Profile Picture URL:</strong>
          <input 
            type="text" 
            name="profilePic" 
            value={editData.profilePic || ''} 
            onChange={handleChange} 
          />
        </label>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <motion.button
          className="save-button"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
        >
          Save
        </motion.button>

        <motion.button
          className="back-button"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
        >
          Back
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EditProfile;
