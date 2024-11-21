import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';

const ManageFacility = () => {
    const [facilities, setFacilities] = useState([]);
  let i = 1;
  useEffect(() => {
    fetch(`http://localhost:5000/all-failities`)
      .then((res) => res.json())
      .then((data) => setFacilities(data));
      
  }, []);

  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 7;

  // Get the current items for the active page
  const indexOfLastItem = activePage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage ;
  const currentItems = facilities.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleFacilityDelete = (_id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      console.log("deleteing user id ", _id);
      const url = `http://localhost:5000/delete-facility/${_id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = facilities.filter((facility) => facility._id !== _id);
            setFacilities(remaining);
          }
          console.log(data);
        });
    }
  };
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
      <h1 className="text-4xl text-white text-center py-5"> Facility Details</h1>
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
            {currentItems.map((facilities) => (
              <tr key={facilities._id}>
                <th>{i++}</th>
                
                <td>{facilities.facility_name}</td>
                <td>{facilities.facility_description}</td>
                {/* <td>{doctor._id}</td> */}

                <td>
                  <img
                    class="object-cover object-center h-12 rounded-full w-12"
                    src={facilities.imageUrl}
                    alt="Woman looking front"
                  />
                </td>
                <td>
                  
                  <Link to={`update-facility/${facilities._id}`}>

              {/* <button>Update</button> */}
              <button
                    // onClick={() => handleDoctorUpdate(facilities._id)}
                    className="btn btn-xs"
                  > 
                    EDIT
                  </button>
            </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleFacilityDelete(facilities._id)}
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
            totalItemsCount={facilities.length}
            pageRangeDisplayed={7}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default ManageFacility;