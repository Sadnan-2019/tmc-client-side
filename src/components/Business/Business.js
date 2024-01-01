// import React from 'react';

import React, { useEffect, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
// import { , animated } from '@react-spring/web'
// import React, { useState, useEffect } from 'react';

// Import your CSS file
import "./Business.css";

const Business = () => {
  const [stage, setStage] = useState(0);
  const [index, setIndex] = useState(0);
  const messages = [
    "Hello!",
    "Welcome to the transition example.",
    "This is the third message.",
    "And this is the final one.",
  ];
  const transitions = useTransition(stage, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      // transform: "perspective(600px) rotateX(1600deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { delay: 2000 }, // Adjust this value based on the desired duration in milliseconds
      { opacity: 0 },
    ],
    reset: true,
    onRest: () => setStage((prev) => (prev === 3 ? 1 : prev + 1)),
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev === 3 ? 1 : prev + 1)); // Change to the number of texts you have
    }, 2000); // Adjust this value based on the total duration of each text on the screen

    return () => clearInterval(interval);
  }, []);












  const props = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
    },
    onRest: () => {
      // Transition to the next message when the animation is complete
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    },
  });

  return (
    <div className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]">

      
      {/* <div>
      <animated.div style={{ color }}>{text}</animated.div>
    </div> */}
      <animated.div style={props}>
        <h1 className="    text-2xl text-red-800">{messages[index]}</h1>
      </animated.div>
      <animated.div style={transitions}>
        {stage === 1 && (
          <h1 className="transitionsItem text-2xl  ">
            This is the third message
          </h1>
        )}
        {stage === 2 && (
          <h1 className="transitionsItem text-4xl  ">
            Welcome to the transition example
          </h1>
        )}
        {stage === 3 && (
          <h1 className=" animateText text-2xl text-white">
            Your Text Goes Here Now On{" "}
          </h1>
        )}
      </animated.div>
      <h1 className="text-white">Your Text Goes Here</h1>
      <h1 className="text-white">Your Text Goes Here</h1>
      <h1 className="text-white">Your Text Goes Here</h1>
      <h1 className="text-white">Your Text Goes Here</h1>
      <h1 className="text-white">Your Text Goes Here</h1>
      <h1 className="text-white">Your Text Goes Here</h1>
      <h1 className="text-white">Your Text Goes Here</h1>
    </div>
  );
};

export default Business;
