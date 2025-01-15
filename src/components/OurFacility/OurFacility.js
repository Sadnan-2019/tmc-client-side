import React, { useEffect, useRef, useState } from "react";
import onehundred from "../../assets/images/100tk.jpg";
import diabetices from "../../assets/images/freediametices.jpg";
import medical from "../../assets/images/freemedicalcamp.jpeg";
const OurFacility = (props) => {
  const { _id,  facility_name,facility_description, imageUrl } = props.facilitie;


  
  return (
    <div className="  text-white ">
    

      <div class="w-full dark:bg-gray-800">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
          {/* <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From The Blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Dive into the latest in technology with our insightful blog posts.
        </p>
    </div> */}
          <div class="">
            {/* <!-- First blog post --> */}
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl  px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={imageUrl}
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1">
                  {/* <span class="absolute inset-0"></span>100 TAKA */}
                </a>
              </h3>
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
               
        <span class="absolute inset-0"></span>{facility_name}        
               
              </h3>
            </article>
            {/* <!-- Second blog post --> */}
           
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default OurFacility;
