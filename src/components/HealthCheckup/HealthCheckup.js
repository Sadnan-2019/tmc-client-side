import React from 'react';
import "./HealthCheckup.css"
import Pakages from './Pakages';
const HealthCheckup = () => {
    return (
        <div>
            <div
        className="relative  w-full h-64 bg-cover bg-center health-checkup "
 
      >
        <div className="absolute inset-0 bg-opacity-50 p-4 rounded  "></div>
        <div className="relative flex justify-end items-center h-full p-6">
          <div className=" p-4 rounded">
            <h1 className="text-3xl text-white font-bold">HealthCheckup</h1>
            {/* <p className="mt-2">Your banner description goes here.</p> */}
          </div>
        </div>
      </div>

      <Pakages></Pakages>
        </div>
    );
};

export default HealthCheckup;