// import logo from './logo.svg';
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>

      <Routes>
      <Route path="/" element={<Home />}></Route>
        {/* <Route path="/home" element={<Home />}></Route> */}


     
      </Routes>
    </div>
  );
}

export default App;
