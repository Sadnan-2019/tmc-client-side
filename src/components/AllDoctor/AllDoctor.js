import React, { useEffect, useState } from "react";
import "./AllDoctor.css"
 
import Doctors from "../Doctors/Doctors";
import AllDoctorList from "./AllDoctorList";
const AllDoctor = () => {
  const [doctors, setServices] = useState([]);

 
  // let navigate = useNavigate();
  // const allDoctor = () => {
  //   const path = `/allproduct`;
  //   navigate(path);
  // };

  useEffect(() => {
    fetch(`http://localhost:5000/all-doctors`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);


  return (
    <div>
      <div
        className="relative  w-full h-screen bg-cover bg-center doctor-landind "
 
      >
        <div className="absolute inset-0   "></div>
        <div className="relative flex justify-start items-center h-full p-6">
          <div className=" p-4 rounded">
            <h1 className="text-5xl text-white font-bold">OUR DOCTORS</h1>
            {/* <p className="mt-2">Your banner description goes here.</p> */}
          </div>
        </div>
      </div>

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
        {doctors.map((doctor) => (
          <AllDoctorList key={doctor.id} doctor={doctor}></AllDoctorList>
        ))}
      </div>


       
    </div>
    </div>
  );
};

export default AllDoctor;
