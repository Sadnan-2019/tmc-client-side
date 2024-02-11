import React, { useEffect, useState } from 'react';

const ManageDoctor = () => {
    const [doctors, setServices] = useState([]);
let i = 1;
  useEffect(() => {
    fetch(`http://localhost:5000/all-doctors`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
            <h1 className='text-4xl text-black'>Manage Doctor</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className= " bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
      <tr>
        <th>Serial Number</th>
        <th>Doctor Name</th>
        <th>Department</th>
        <th>Photo</th>
      
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {

doctors.map(doctor=> <tr>
               <th>{i++}</th>
               <td>{doctor.name}</td>
               <td>{doctor.speciality}</td>
           
               <td><img
              class="object-cover object-center h-32"
              src={doctor.image}
              alt="Woman looking front"
            /></td>
             
             
             </tr>)
       }
      {/* row 2 */}
     
      {/* row 3 */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctor;