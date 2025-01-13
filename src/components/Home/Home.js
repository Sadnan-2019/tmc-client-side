import React, { useRef } from "react";
import Banner from "./Banner";

import Services from "../Services/Services";
import Makeappoinment from "./Makeappoinment";
import Tstimoniel from "./Tstimoniel";
import Footer from "../Shared/Footer/Footer";
import Doctors from "../Doctors/Doctors";

import ScrollSmoother from "../ScrollSmoother/ScrollSmoother";
import OurFacility from "../OurFacility/OurFacility";
import Equipment from "../Equipment/Equipment";
import Contact from "../Contact/Contact";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import HomeFacility from "../OurFacility/HomeFacility";

// import New from '../New/New';

const Home = () => {
  return (
    <div>
      {/* <h2>This is home</h2>  */}

      <Banner className=""></Banner>
      {/* <PaginatedTable></PaginatedTable> */}
      {/* <Info></Info> */}
      <Services></Services>
      <Doctors></Doctors>
      <Equipment></Equipment>
      {/* <Makeappoinment></Makeappoinment> */}
      {/* <OurFacility></OurFacility> */}
      <HomeFacility></HomeFacility>
      <Tstimoniel></Tstimoniel>
<Contact></Contact>
      {/* <ScrollSmoother></ScrollSmoother> */}
      
      {/* <Business></Business> */}
      {/* <New></New> */}
      
    </div>
  );
};

export default Home;
