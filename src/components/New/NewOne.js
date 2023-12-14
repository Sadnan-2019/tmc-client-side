import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const NewOne = () => {
  const sentences = [
    "Artificial intelligence (AI) is the intelligence of machines",
    "or software, as opposed to the intelligence of human beings or animals.",

    // Add more sentences as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 6000); // Change the duration as needed

    return () => clearInterval(interval);
  }, [sentences.length]);
  return (
    <div>
      <div className="animated-text-container    ">
        <section className="    blog         ">
          <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-1  gap-5 justify-center items-center">
            <div className=" sm:max-w-xs lg:max-w-xl text-left md:ml-8  order-2   lg:mt-0">
              <div className="text-container">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 9, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 2 }}
                    style={{ lineHeight: "120%" }}
                    className="animated-text md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#e4e3e7] to-[#f1f8f6f9]"
                  >
                    {sentences[currentIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
              {/* <h1
              className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
              style={{ lineHeight: "120%", color: "white" }}
            >
              Work Together For Success{" "}
            </h1> */}

              <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-green-400 to-blue-500  ">
                Get Started
              </button>
            </div>

            <div class="  sm:max-w-xs lg:max-w-sm text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
              {/* <img
              src={carrer}
              alt=""
              className=" rounded-full  h-5/6 w-5/6 "
              data-aos="fade-left"
            /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewOne;
