// ScrollSmoother.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ScrollSmoother = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Create ScrollTrigger for smooth scrolling
    ScrollTrigger.create({
      onUpdate: (self) => {
        controls.start({ y: -self.scroll(), ease: "none" });
      },
    });
  }, [controls]);

  return (
    <div>
      <motion.div
        style={{
          height: "100vh", // Adjust the height according to your content
          background: "linear-gradient(to bottom, #f0f0f0, #cccccc)",
        }}
        animate={controls}
      >
        {/* Your content goes here */}
        <div style={{ paddingTop: "50vh", textAlign: "center" }}>
          <h1>Framer Motion Scroll Smoothing</h1>
          <p>Scroll down to see the smooth scrolling effect</p>
        </div>
      </motion.div>{" "}
    </div>
  );
};

export default ScrollSmoother;
