import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gradient-to-r from-[#157A90] via-[#0c0618] to-[#157A90]    text-lg text-white ">
        {/* Page content here */}
        {/* <h1 className='text-red-900 text-5xl'> Dasboard</h1> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side      ">
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
          <li>
            <Link to="/dashboard/my-review">Add Doctor</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-doctor">Manage Doctor</Link>
          </li>
          <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              onClick={toggleMenu}
            >
              Options
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6zm0 2H4v10h6V5zm5 2a1 1 0 00-1.447-.895l-3 1a1 1 0 000 1.79l3 1A1 1 0 0015 10V9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 3
                </a>
              </div>
            </div>
          )}
        </div>
        </ul>
        
      </div>
    </div>
  );
};

export default Dashboard;
