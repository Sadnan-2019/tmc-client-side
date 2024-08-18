// import React from 'react';
import React, { useEffect, useRef, useState } from "react";

import "./Doctors.css";
import Doctor from "./Doctor";
import { useNavigate } from "react-router-dom";
const Doctors = () => {
  const [doctors, setServices] = useState([]);

  const datas = doctors.slice(0, 3);
  let navigate = useNavigate();
  const allDoctor = () => {
    const path = `/alldoctorlist`;
    navigate(path);
  };

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
      // data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      >
        Our Doctors
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 mt-5 items-center mx-5">
        {datas.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>


      <div className=" px-5  py-5 flex justify-center">

        <button
          htmlFor="my-modal-6"
          className="btn btn-md modal-button   text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
          style={{ backgroundColor: "#453364" }}
          onClick={allDoctor}
        >
          More Doctor
        </button>

      </div>
    </div>
  );
};

export default Doctors;
