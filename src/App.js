// import logo from './logo.svg';
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";
import Appoinment from "./components/Appoinment/Appoinment";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/appoinment" element={<Appoinment />}></Route>
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>


     
      </Routes>
    </div>
  );
}

export default App;
