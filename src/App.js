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
import { ToastContainer } from "react-toastify";
import TopNav from "./components/Shared/TopNav/TopNav";
import Nav from "./components/Shared/TopNav/Nav";
import { useEffect, useRef } from "react";

import locomotiveScroll from "locomotive-scroll";
import Dashboard from "./components/Dashboard/Dashboard";
import MyAppoinment from "./components/Dashboard/MyAppoinment";
import MyReview from "./components/Dashboard/MyReview";
 
import ManageDoctor from "./components/Dashboard/ManageDoctor";
import AddDepartment from "./components/Dashboard/AddDepartment";
import ManageDepartment from "./components/Dashboard/ManageDepartment";
 
import AllDoctor from "./components/AllDoctor/AllDoctor";
import Footer from "./components/Shared/Footer/Footer";
import HealthCheckup from "./components/HealthCheckup/HealthCheckup";
import About from "./components/About/About";
import AddPackage from "./components/Dashboard/AddPackage";
import ManagePackage from "./components/Dashboard/ManagePackage";
import AddFacility from "./components/Dashboard/AddFacility";
 
 
function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothWheel: true,
      smoothTouch: false,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} data-scroll-container className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/our-doctors" element={<AllDoctor/>}></Route> */}
        <Route path="/alldoctorlist" element={<AllDoctor/>}></Route>
        <Route path="/health-checkup" element={<HealthCheckup/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route
          path="/appoinment"
          element={
            <PrivateRoute>
              <Appoinment />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="add-doctor" element={<MyReview></MyReview>}></Route>
          <Route path="manage-doctor" element={<ManageDoctor></ManageDoctor>}></Route>
          <Route path="add-department" element={<AddDepartment></AddDepartment>}></Route>
          <Route path="manage-department" element={<ManageDepartment></ManageDepartment>}></Route>
          <Route path="add-package" element={<AddPackage></AddPackage>}></Route>
          <Route path="manage-package" element={<ManagePackage/>}></Route>
          <Route path="add-facility" element={<AddFacility/>}></Route>
        </Route>
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
