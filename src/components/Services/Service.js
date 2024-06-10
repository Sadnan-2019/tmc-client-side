import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  return (
    <div>
      <div 
      data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    // data-aos-anchor-placement="top-center"
      class="relative overflow-hidden rounded-lg border   select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          {/* <svg viewBox="0 0 24 24" class=""> */}
          <img
            src={service.img}
            alt="Shoes"
            className="rounded-xl h-14 w-14 fill-current text-white"
          />
          {/* </svg> */}
          <div class="space-y-2">
            <h3 class="font-bold text-white text-lg">{service.name}</h3>
            {/* <p class="text-sm text-muted-foreground text-white">
              App dir, Routing, Layouts, Loading UI and API routes.
            </p> */}
          </div>
        </div>

        {/* <header className="header">
            <h2 className="title">GSAP ScrollSmoother in React</h2>
            <button className="button" onClick={scrollTo}>
              Jump to C
            </button>
          </header> */}
      </div>
    </div>
  );
};

export default Service;
