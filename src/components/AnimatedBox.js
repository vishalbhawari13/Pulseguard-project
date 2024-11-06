import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      className="box"
      initial={{ scale: 0.5, opacity: 0.3 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Hover and Tap me!
    </motion.div>
  );
};

export default AnimatedBox;
