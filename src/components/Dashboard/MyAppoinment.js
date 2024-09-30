import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Pagination from "react-js-pagination";
const MyAppoinment = () => {
  const [appoinmnts, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  let i = 1;

  useEffect(() => {
    if (user) {
      fetch(
        `http://localhost:5000/booking-appoinment?patients_email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setAppoinments(data));
        // .then((data) => setAppoinments(console.log(data)));
        // console.log(appoinmnts)
    }
  }, [user]);


  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;

  // Get the current items for the active page
  const indexOfLastItem = activePage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const currentItems = appoinmnts.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
    <div>
      <h1 className="text-2xl text-white text-center py-3">MyAppoinment: {appoinmnts.length}</h1>

      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className= " bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
      <tr>
        <th>SL No</th>
        <th>Name</th>
        <th>Department</th>
        <th>Doctor Name</th>
        <th>Date</th>
        <th>Time</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {

currentItems.map(appoinmnt=> <tr>
               <th>{i++}</th>
               <td>{appoinmnt.patients_name}</td>
               <td>{appoinmnt.department}</td>
               <td>{appoinmnt.name}</td>
               <td>{appoinmnt.date}</td>
               <td>{appoinmnt.slot}</td>
             
             </tr>)
       }
      {/* row 2 */}
     
      {/* row 3 */}
      
    </tbody>
  </table>
  <div className="pagination-container">
          <Pagination
            className="pagination"
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={appoinmnts.length}
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

export default MyAppoinment;
