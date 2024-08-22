import React, { useEffect, useState } from 'react';

const ManagePackage = () => {
    const [allpackages, setPackage] = useState([]);
    let i = 1;
    useEffect(() => {
      fetch(`http://localhost:5000/all-health-package`)
        .then((res) => res.json())
        .then((data) => setPackage(data));
    }, []);

    const handlePackageDelete = (_id) => {
      const proceed = window.confirm("Are you sure want to delete");
      if (proceed) {
        console.log("deleteing user id ", _id);
        const url = `http://localhost:5000/package/${_id}`;
  
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = allpackages.filter((packages) => packages._id !== _id);
              setPackage(remaining);
            }
            console.log(data);
          });
      }
    };











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
                <th>Action</th>
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
                    //   onClick={() => handlePackageDelete(doctor._id)}
                      className="btn btn-xs"
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handlePackageDelete(packages._id)}
                      className="btn btn-xs"
                    >
                    DELETE
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