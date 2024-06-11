import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gradient-to-r from-[#157A90] via-[#0c0618] to-[#157A90]    text-lg text-white ">
        {/* Page content here */}
        {/* <h1 className='text-red-900 text-5xl'> Dasboard</h1> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side border-4    rounded-xl  ">
        <label
          htmlFor="dashboard-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full bg-gradient-to-r from-[#157A90] via-[#02363a] to-[#157A90]    text-lg text-white  ">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard">My Appoinment</Link>
          </li>
          

          {/* <!-- Agrega más enlaces para la navegación lateral --> */}

          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">DOCTOR</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-doctor">Add Doctor</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-doctor">Manage Doctor</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Department</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-department">Add Department</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-department">Manage Department</Link>
                </li>
              </div>
            </details>
          </li>
          {/* <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold">Nested Dropdown 2</span>
              </summary>
              <div class="  p-4">
                <p class="text-white">Content for Nested Dropdown 2</p>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class="  p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Nested Dropdown 3</span>
              </summary>
              <div class="  p-4">
                <p class="text-white">Content for Nested Dropdown 3</p>
              </div>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
