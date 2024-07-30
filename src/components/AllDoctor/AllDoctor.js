import React from "react";
import "./AllDoctor.css"
import Doctor from "../Doctors/Doctor";
import Doctors from "../Doctors/Doctors";
const AllDoctor = () => {
  return (
    <div>
      <div
        className="relative  w-full h-screen bg-cover bg-center doctor-landind "
 
      >
        <div className="absolute inset-0   "></div>
        <div className="relative flex justify-end items-center h-full p-6">
          <div className=" p-4 rounded">
            <h1 className="text-3xl text-white font-bold">OUR DOCTORS</h1>
            {/* <p className="mt-2">Your banner description goes here.</p> */}
          </div>
        </div>
      </div>

      <Doctors></Doctors>
    </div>
  );
};

export default AllDoctor;
