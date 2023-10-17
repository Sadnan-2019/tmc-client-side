import React from 'react';
import Infocard from '../Infocard/Infocard';
import clock from "../../assets/icons/clock.svg"
const Info = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 px-4  '>
               <Infocard  img={clock}></Infocard>
               <Infocard img={clock}></Infocard>
               <Infocard img={clock}></Infocard>
          </div>
     );
};
     
export default Info;