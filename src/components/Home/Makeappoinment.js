import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";

const Makeappoinment = () => {
  return (
    <div className="py-10">
     <div className=""  
    style={{

     background: `url(${appoinment})`
    }}
    >
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <img className="mt-[-120px]" src={doctor} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl text-white font-bold">Appoinment</h2>
          <h3 className="text-4xl py-2 font-bold text-white">Make an Appoinment Today
</h3>
          <h2 className="text-1xl py-5 text-white font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi,
            sint dolores vitae saepe accusantium non iure ut ullam distinctio
            excepturi quaerat quod ipsam maxime quos in necessitatibus beatae
            labore eligendi culpa suscipit quae iste deserunt voluptas! Veniam,
            expedita. Laborum?
          </h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Makeappoinment;
