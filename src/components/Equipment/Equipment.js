import React from 'react';
import machine1 from "../../assets/images/machine2.jpeg"
import machine2 from "../../assets/images/machine3.jpeg"
import machine3 from "../../assets/images/machine4.jpeg"
import machine4 from "../../assets/images/machine5.jpeg"
import machine5 from "../../assets/images/machine6.jpeg"
import machine6 from "../../assets/images/machine7.jpeg"
import machine7 from "../../assets/images/machine8.jpeg"
import machine8 from "../../assets/images/machine9.jpeg"
import machine9 from "../../assets/images/machine10.jpeg"
import machine10 from "../../assets/images/machine11.jpeg"
// import "./Equipment.css"
const Equipment = () => {
    return (
        <div className='bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]'>
              <h2
        class="font-bold text-3xl leading-[1.1] sm:text-3xl py-2 md:text-6xl text-center text-white"
         
      >
        Our Technology
      </h2>
            <div className="grid lg:grid-cols-4 gallery-item py-10 px-5">
         
         <img src={machine1} class=" w-full h-96  " alt="" />
         <img src={machine2} class=" w-full h-96   " alt="" />
       
         <img src={machine3} class=" w-full h-96  " alt="" />
         <img src={machine4} class=" w-full h-96  " alt="" />
        
         <img src={machine5} class=" w-full h-96 " alt="" />
         <img src={machine6} class=" w-full h-96 " alt="" />
         <img src={machine7} class=" w-full h-96  " alt="" />
        
         <img src={machine8} class=" w-full h-96  " alt="" />
         <img src={machine9} class=" w-full h-96  " alt="" />
         <img src={machine10} class=" w-full h-96  " alt="" />
     </div>
        </div>
    );
};

export default Equipment;