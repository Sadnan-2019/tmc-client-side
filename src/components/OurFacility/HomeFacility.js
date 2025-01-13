import React, { useEffect, useRef, useState } from "react";
import OurFacility from "../OurFacility/OurFacility";
const HomeFacility = () => {

    const [facilities, setFacilities] = useState([]);
    // let i = 1;
    useEffect(() => {
      fetch(`http://localhost:5000/all-failities`)
        .then((res) => res.json())
        .then((data) => setFacilities(data));
    }, []);
    return (
        <div className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-black ">
      <div className="">
        <section
          id="features"
          class="container mx-auto px-4 space-y-6   py-8 dark:bg-transparent md:py-12 lg:py-20"
        >
          <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2
          class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white"
          //  data-aos="fade-up"
          //  data-aos-offset="200"
          //  data-aos-delay="50"
          //  data-aos-duration="1000"
          //  data-aos-easing="ease-in-out"
          //  data-aos-mirror="true"
          //  data-aos-once="false"
        >
          Our Facility
        </h2>
          </div>

          <div id="smooth-wrapper">
            <div
              id="smooth-content "
              class="scroll-container  mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
            >
              {facilities.map((facilitie) => (
                <OurFacility facilitie={facilitie} key={facilitie._id}></OurFacility>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    );
};

export default HomeFacility;