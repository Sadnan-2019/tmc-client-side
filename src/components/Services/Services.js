import React from "react";
 import floride from "../../assets/images/fluoride.png"
 import cavity from "../../assets/images/cavity.png"
 import whitening from "../../assets/images/whitening.png"
import Service from "./Service";

const Services = () => {

     const services =[
          {
               _id:1,
               name:"floride",
               description:"",
               img:floride
          
          },         
          {
               _id:2,
               name:"cavity",
               description:"",
               img:cavity
          
          },          
          {
               _id:3,
               name:"whitening",
               description:"",
               img:whitening
          
          }          
     ]
  return (
 <div className="py-12">
        <div>
      <h2 className="text-center text-3xl font-bold text-blue-800 mt-[35px]">Our Services</h2>
      <h2 className="text-center text-3xl font-bold text-blue-800 mt-2">Service We Provide</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-12">
{

     services.map(service=>
     <Service service={service} key={service._id}></Service>
     
     
     )
}
      </div>
    </div>
 </div>
  );
};

export default Services;
