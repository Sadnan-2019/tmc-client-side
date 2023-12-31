// import React from 'react';
 
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
// import React, { useState, useEffect } from 'react';
 
  // Import your CSS file
// import "./Business.css"
 
 
const Business = () => {
     const messages = [
          'Hello!',
          'Welcome to the transition example.',
          'This is the third message.',
          'And this is the final one.',
        ];
     //    const stages = [
     //      { text: 'First stage', color: 'red' },
     //      { text: 'Second stage', color: 'green' },
     //      { text: 'Third stage', color: 'blue' },
     //    ];
     const [stage, setStage] = useState(1);

     const transitions = useSpring({
       opacity: 1,
       from: { opacity: 0 },
       reset: true,
       onRest: () => setStage((prev) => (prev === 3 ? 1 : prev + 1)),
     });
    
        const [index, setIndex] = useState(0);
     //    const [stage, setStage] = useState(0);

     //    const { text, color } = useSpring({
     //      reset: true,
     //      from: { text: stages[stage].text, color: stages[stage].color },
     //      to: async (next) => {
     //        await next({ text: stages[stage].text, color: stages[stage].color });
     //        setStage((prevStage) => (prevStage + 2) % stages.length);
     //      },
     //    });
        const props = useSpring({
          opacity: 1,
          from: { opacity: 0 },
          onRest: () => {
            // Transition to the next message when the animation is complete
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
          },
        });
     return (
          <div    className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]">
    
    {/* <div>
      <animated.div style={{ color }}>{text}</animated.div>
    </div> */}
    <animated.div style={props}>
      <h1>{messages[index]}</h1>
    </animated.div>
    <animated.div style={transitions}>
        {stage === 1 && <h1>Stage 1 Text</h1>}
        {stage === 2 && <h1>Stage 2 Text</h1>}
        {stage === 3 && <h1>Stage 3 Text</h1>}
      </animated.div>
    <h1 className='text-white'>Your Text Goes Here</h1>
    <h1 className='text-white'>Your Text Goes Here</h1>
    <h1 className='text-white'>Your Text Goes Here</h1>
    <h1 className='text-white'>Your Text Goes Here</h1>
    <h1 className='text-white'>Your Text Goes Here</h1>
    <h1 className='text-white'>Your Text Goes Here</h1>
    <h1 className='text-white'>Your Text Goes Here</h1>


          </div>
     );
};

export default Business;