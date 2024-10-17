import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

const ManageDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  let i = 1;
  useEffect(() => {
    fetch(`http://localhost:5000/all-doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
      
  }, []);

  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 7;

  // Get the current items for the active page
  const indexOfLastItem = activePage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage ;
  const currentItems = doctors.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleDoctorDelete = (_id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      console.log("deleteing user id ", _id);
      const url = `http://localhost:5000/doctor/${_id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = doctors.filter((doctor) => doctor._id !== _id);
            setDoctors(remaining);
          }
          console.log(data);
        });
    }
  };
  const handleDoctorUpdate = (_id)=>{
    const url = `http://localhost:5000/update_doctor/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
    console.log("updating user id ", _id);
  }

  return (
    <div className=" bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
      <h1 className="text-4xl text-white text-center py-5"> Doctor Details</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-white">
            <tr className="text-xl">
              <th>Sl No</th>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody className=" ">
            {/* row 1 */}
            {currentItems.map((doctors) => (
              <tr key={doctors.id}>
                <th>{i++}</th>
                
                <td>{doctors.name}</td>
                <td>{doctors.speciality}</td>
                {/* <td>{doctor._id}</td> */}

                <td>
                  <img
                    class="object-cover object-center h-12 rounded-full w-12"
                    src={doctors.imageUrl}
                    alt="Woman looking front"
                  />
                </td>
                <td>
                  
                  <Link to={`/update/${doctors._id}`}>

              {/* <button>Update</button> */}
              <button
                    // onClick={() => handleDoctorUpdate(doctors._id)}
                    className="btn btn-xs"
                  > 
                    EDIT
                  </button>
            </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDoctorDelete(doctors._id)}
                    className="btn btn-xs"
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

        <div className="pagination-container">
          <Pagination
            className="pagination"
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={doctors.length}
            // pageRangeDisplayed={7}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
