import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinment = ({date}) => {

     const [services, setServices] = useState([])

     useEffect(()=>{

          fetch(`services.json`)
          .then(res => res.json())
          .then(data=> setServices(data))
     },[])
     return (
          <div className='bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-emerald-900 to-90% ...'>
               <p className='text-center py-8 text-4xl font-bold text-white'>Available Appoinment  date : {format(date,'PP')}</p>

               <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-10 '>
                    {

                         services.map(service=>
                         <Service 
                         service={service} key={service._id}>

                         </Service>)
                    }
               </div>
          </div>
     );
};

export default AvailableAppoinment;