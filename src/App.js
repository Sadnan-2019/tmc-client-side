// import logo from './logo.svg';
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";
import Appoinment from "./components/Appoinment/Appoinment";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import PrivateRoute from "./components/Login/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import TopNav from "./components/Shared/TopNav/TopNav";

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>
      <Navbar></Navbar>

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/appoinment" element={<PrivateRoute>
        <Appoinment />
      </PrivateRoute>  }>
        
      </Route>
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>


     
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
