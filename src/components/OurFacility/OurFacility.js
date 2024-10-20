import React from "react";
import onehundred from "../../assets/images/100tk.jpg";
import diabetices from "../../assets/images/freediametices.jpg";
import medical from "../../assets/images/freemedicalcamp.jpeg";
const OurFacility = () => {
  return (
    <div className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white ">
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

      <div class="w-full dark:bg-gray-800">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
          {/* <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From The Blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Dive into the latest in technology with our insightful blog posts.
        </p>
    </div> */}
          <div class="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {/* <!-- First blog post --> */}
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={onehundred}
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1">
                  <span class="absolute inset-0"></span>100 TAKA
                </a>
              </h3>
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1">
        <span class="absolute inset-0"></span>100 lorem50 TAKA 100        
                </a>
              </h3>
            </article>
            {/* <!-- Second blog post --> */}
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={diabetices}
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
             
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post2">
                  <span class="absolute inset-0"></span>FREE DIABETICES CHECK-UP
                </a>
              </h3>
            </article>
            {/* <!-- Third blog post --> */}
            <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src={medical}
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post3">
                  <span class="absolute inset-0"></span>How Quantum Computing
                  Will Revolutionize Data Security
                </a>
              </h3>
            </article>
            {/* <!-- More blog posts can be added similarly --> */}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default OurFacility;
