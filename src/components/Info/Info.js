import React from 'react';
import Infocard from '../Infocard/Infocard';
import clock from "../../assets/icons/clock.svg"
import location from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"
const Info = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 px-4  '>
               <Infocard cardTitle="Opening Hours" img={clock}></Infocard>
               <Infocard cardTitle="Our Locations" img={location}></Infocard>
               <Infocard cardTitle="Contact Us" img={phone}></Infocard>
          </div>
     );
};

export default Info;