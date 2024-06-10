import React, { useEffect, useState } from "react";
import doctor from "../../assets/images/doctor.png";
import image from "../../assets/images/people3.png";
// import appoinment from "../../assets/images/appointment.png";
import { motion } from "framer-motion";
const Makeappoinment = () => {
  const texts = ["Make an Appoinment Today", "So Get Ready"]; // Add your desired texts here
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, texts.length]);
  return (
    <div className="py-10">
      <div className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <img className="mt-[-120px]" src={doctor} alt="" />
          </div>
          <div className="flex-1">
            <motion.h1
              className="text-4xl py-2 font-bold text-white"
              key={texts[currentIndex]}
              initial={{ opacity: 4, scale: 1 }}
              animate={{ opacity: 4, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {texts[currentIndex]}
            </motion.h1>

            <div className="card-actions">
              <button className="btn btn-primary">Get Appoinment </button>
            </div>
          </div>
        </div>


 

      </div>
    </div>
  );
};

export default Makeappoinment;
