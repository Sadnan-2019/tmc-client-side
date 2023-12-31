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
import Nav from "./components/Shared/TopNav/Nav";
import { useEffect, useRef } from "react";
 
import locomotiveScroll from "locomotive-scroll";
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
    <div  ref={scrollRef}
    data-scroll-container className=" ">
      <TopNav></TopNav>
      <Nav></Nav>
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
