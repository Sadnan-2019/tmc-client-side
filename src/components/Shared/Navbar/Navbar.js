import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
// import chair from "../../assets/images/chair.png";
const Navbar = () => {
const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate("/login")
  };

  const menuitems = (
    <>
      <li className="">
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/appoinment">Appoinment</Link>
      </li>
      <li>
        {" "}
        <Link to="/review">Review</Link>
      </li>
      <li>
        {" "}
        <Link to="/">About</Link>
      </li>
      <li>
         {user ? <button className="btn btn-sm btn-ghost" onClick={logout}> Sign Out</button> :  <Link to="/login">Login</Link>}
        
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 mx-5 shadow bg-base-100 rounded-box w-52"
            >
              {menuitems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menuitems}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
