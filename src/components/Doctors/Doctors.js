// import React from 'react';
import React, { useEffect, useRef, useState } from "react";

import "./Doctors.css";
import Doctor from "./Doctor";
const Doctors = () => {
  const [doctors, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-doctors`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]">
      {/* Add your sections or divs here */}
      <h2
        class="font-bold text-3xl leading-[1.1] sm:text-3xl py-2 md:text-6xl text-center text-white"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        Our Doctors
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center mx-5">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
