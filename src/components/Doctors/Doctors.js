// import React from 'react';
import React, { useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
 
import "./Doctors.css"

 
const Doctors = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add any other Locomotive Scroll options here
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  
    
    

 

    return (
      <div ref={scrollRef} data-scroll-container>
      {/* Add your sections or divs here */}
      <section data-scroll-section>
        <h2>Section 1</h2>
        {/* Add content for Section 1 */}
      </section>
      <section data-scroll-section>
        <h2>Section 2</h2>
        {/* Add content for Section 2 */}
      </section>
      {/* Add more sections as needed */}
    </div>
    );
};

export default Doctors;