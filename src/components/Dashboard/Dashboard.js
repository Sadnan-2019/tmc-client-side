import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
     return (
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    {/* Page content here */}
    <h1 className='text-red-900 text-5xl'> Dasboard</h1>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link  to="/dashboard">Dashboard</Link></li>
      <li><Link to="/dashboard/my-review">My Review</Link></li>
    </ul>
  
  </div>
</div>
     );
};

export default Dashboard;