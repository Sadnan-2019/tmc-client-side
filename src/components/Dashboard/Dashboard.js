import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
     return (
          <div className="drawer lg:drawer-open">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    {/* Page content here */}
    {/* <h1 className='text-red-900 text-5xl'> Dasboard</h1> */}
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-48 min-h-full bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white  ">
      {/* Sidebar content here */}
      <li><Link  to="/dashboard">My Appoinment</Link></li>
      <li><Link to="/dashboard/my-review">My Review</Link></li>
    </ul>
  
  </div>
</div>
     );
};

export default Dashboard;