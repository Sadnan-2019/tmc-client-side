import React, { useEffect, useState } from 'react';

const ManagePackage = () => {
    const [allpackages, setpackage] = useState([]);
    let i = 1;
    useEffect(() => {
      fetch(`http://localhost:5000/all-health-package`)
        .then((res) => res.json())
        .then((data) => setpackage(data));
    }, []);
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
        <h1 className="text-4xl text-white text-center py-5">
          {" "}
          Package Details
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-white">
              <tr className="text-xl">
                <th>Sl No</th>
                <th>Package Name</th>
                <th>Package Rate</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody className=" ">
              {/* row 1 */}
              {allpackages.map((packages) => (
                <tr>
                  <th>{i++}</th>
                  <td>{packages.package_name}</td>
                  <td>{packages.package_rate}</td>
                  {/* <td>{doctor._id}</td> */}

                  <td>
                    <img
                      class="object-cover object-center h-12 rounded-full w-12"
                      src={packages.imageUrl}
                      alt="Woman looking front"
                    />
                  </td>
                  <td>
                    <button
                    //   onClick={() => handleDoctorDelete(doctor._id)}
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                    //   onClick={() => handleDoctorDelete(doctor._id)}
                      className="btn btn-xs"
                    >
                      Edit
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

export default ManagePackage;