import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import "./New.css"
const New = () => {
     const images = [
          "https://i.ibb.co/RH2hZGX/IMG-8342-scaled.jpg",
          "https://i.ibb.co/LrWMJBb/product-8.jpg",
          "https://i.ibb.co/Xjh995p/Scope-of-practice.jpg",
          // Add more image URLs as needed
        ];
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) =>
           prevIndex === images.length - 1 ? 0 : prevIndex + 1
         );
       }, 6000); // Change image every 3 seconds
   
       return () => clearInterval(interval);
     }, [images]);
     return (
          <div>
               <div className="image-shuffle-container">
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="image"
          src={images[currentImageIndex]}
          alt="Shuffling Image"
        />
      </AnimatePresence>
    </div> 
          </div>
     );
};

export default New;