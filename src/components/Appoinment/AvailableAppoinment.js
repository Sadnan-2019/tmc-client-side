import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinment = ({date}) => {

     const [services, setServices] = useState([])

     useEffect(()=>{

          fetch(`services.json`)
          .then(res => res.json())
          .then(data=> setServices(data))
     },[])
     return (
          <div>
               <p className='text-center py-8 text-4xl font-bold text-teal-400'>You have date : {format(date,'PP')}</p>
          </div>
     );
};

export default AvailableAppoinment;