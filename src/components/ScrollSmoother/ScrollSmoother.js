// ScrollSmoother.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
 
const ScrollSmoother = () => {
  const texts = ['Text 1', 'Text 2', 'Text 3']; // Add your desired texts here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, texts.length]);
  return (
    <div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        key={texts[currentIndex]}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {texts[currentIndex]}
      </motion.h1>
    </motion.div>
    </div>
  );
};

export default ScrollSmoother;
