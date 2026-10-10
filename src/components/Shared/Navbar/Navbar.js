import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  // 1. DYNAMIC ACTIVE LINK STYLING (FIXED BLACK TEXT TO RED)
  const getLinkClass = ({ isActive }) => {
    // Base classes (resets DaisyUI focus background/text)
    const baseClasses =
      "relative px-3 py-2 transition-colors block bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent";

    // Non-active state
    const inactiveClasses = "text-white hover:text-red-400";

    // Active state: turns text RED and adds RED underline
    const activeClasses = `
      !text-green-500 
      focus:!text-green-500 
      font-bold 
      after:content-[''] 
      after:absolute 
      after:left-1/2 
      after:-translate-x-1/2 
      after:bottom-1 
      after:w-[80%] 
      after:h-[3px] 
      after:bg-[#E93035]
    `;

    return isActive
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  };

  const menuitems = (
    <>
      <li>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
      </li>

      {/* Department Dropdown */}
      <li tabIndex={0}>
        <details>
          <summary className="cursor-pointer px-3 py-2 text-white hover:text-red-400 bg-transparent focus:bg-transparent">
            Department
          </summary>
          <ul className="p-2 bg-[#160a2c] text-white rounded-box shadow-lg z-50 w-48">
            <li>
              <NavLink to="/our-department" className={getLinkClass}>
                Our Department
              </NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink to="/alldoctorlist" className={getLinkClass}>
          Our Doctors
        </NavLink>
      </li>
      <li>
        <NavLink to="/health-checkup" className={getLinkClass}>
          Health Check-Up Packages
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className={getLinkClass}>
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button
            className="btn btn-sm btn-ghost text-white hover:bg-red-600/80 px-3 py-2"
            onClick={logout}
          >
            Log Out
          </button>
        ) : (
          <NavLink to="/login" className={getLinkClass}>
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 mx-5 shadow bg-[#160a2c] text-white rounded-box w-52"
            >
              {menuitems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-1">
            {menuitems}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <label
            htmlFor="dashboard-sidebar"
            tabIndex={1}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
