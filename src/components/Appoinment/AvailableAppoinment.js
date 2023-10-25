import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({date}) => {
     return (
          <div>
               <p className='text-center py-8 text-4xl font-bold text-teal-400'>You have date : {format(date,'PP')}</p>
          </div>
     );
};

export default AvailableAppoinment;