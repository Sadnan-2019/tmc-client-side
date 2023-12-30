import React, { useRef } from "react";
import Banner from "./Banner";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Makeappoinment from "./Makeappoinment";
import Tstimoniel from "./Tstimoniel";
import Footer from "../Shared/Footer/Footer";
import Doctors from "../Doctors/Doctors";
import Business from "../Business/Business";
import ScrollSmoother from "../ScrollSmoother/ScrollSmoother";

// import New from '../New/New';

const Home = () => {
  return (
    <div>
      {/* <h2>This is home</h2>  */}

      <Banner className=""></Banner>
      {/* <Info></Info> */}
      {/* <Services></Services> */}
      <Makeappoinment></Makeappoinment>
      <Tstimoniel></Tstimoniel>
      {/* <ScrollSmoother></ScrollSmoother> */}
      <Doctors></Doctors>
      {/* <Business></Business> */}
      {/* <New></New> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
