import React, { useEffect, useState } from 'react';

const ManageDepartment = ( ) => {
    const [doctors, setDoctors] = useState([]);
    let i = 1;
    useEffect(() => {
      fetch(`http://localhost:5000/all-department`)
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, []);

    const handleDoctorDelete = (_id) => {
      const proceed = window.confirm("Are you sure want to delete");
      if (proceed) {
        console.log("deleteing user id ", _id);
        const url = `http://localhost:5000/department/${_id}`;
  
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
  
            if(data.deletedCount>0){
              const remaining = doctors.filter(doctor=> doctor._id !==_id);
              setDoctors(remaining)
  
  
            }
            console.log(data);
          });
      }
    };
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
      <h1 className="text-4xl text-white text-center py-5"> Department Details</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-white">
            <tr className="text-xl">
              <th>Sl No</th>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Photo</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody className=" ">
            {/* row 1 */}
            {doctors.map((doctor)  => (
              <tr>
                <th>{i++}</th>
                <td>{doctor.dept_name}</td>
                <td>{doctor.description}</td>
                {/* <td>{doctor._id}</td> */}

                <td>
                  <img
                    class="object-cover object-center h-12 rounded-full w-12"
                    src={doctor.imageUrl}
                    alt="Woman looking front"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDoctorDelete(doctor._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* row 2 */}

            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default ManageDepartment;