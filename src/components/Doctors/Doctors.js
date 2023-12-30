// import React from 'react';
import React, { useEffect, useRef } from "react";
import locomotiveScroll from "locomotive-scroll";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Doctors.css";
gsap.registerPlugin(ScrollTrigger);


const Doctors = () => {
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
  useEffect(() => {
    // Define a function for the ScrollTrigger animation
    const animateSection = (section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // Adjust as needed
          end: 'bottom 20%', // Adjust as needed
          toggleActions: 'play none none reverse',
        },
      });
    };

    // Get all section elements
    const sections = document.querySelectorAll('.scroll-section');

    // Apply ScrollTrigger animation to each section
    sections.forEach((section) => {
      animateSection(section);
    });
  }, []);
  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]"
    >
      {/* Add your sections or divs here */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center mx-5">
        <section className="" data-scroll-section>
          {/* <h2>Section 1</h2> */}
          <div class="team    max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16    text-white">
            <div class="  h-32 w-96 overflow-hidden"></div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div class="text-center mt-2">
              <h2 class="font-semibold">Sarah Smith</h2>
              <p class="text-white">Senior Manager</p>
            </div>
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li class="flex flex-col items-center justify-between">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
              <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>

          {/* Add content for Section 1 */}
        </section>
        <section className="" data-scroll-section>
          {/* <h2>Section 1</h2> */}
          <div class="team    max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16    text-white">
            <div class="  h-32 w-96 overflow-hidden"></div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div class="text-center mt-2">
              <h2 class="font-semibold">Sarah Smith</h2>
              <p class="text-white">Senior Manager</p>
            </div>
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li class="flex flex-col items-center justify-between">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
              <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>

          {/* Add content for Section 1 */}
        </section>
        <section className="" data-scroll-section>
          {/* <h2>Section 1</h2> */}
          <div class="team    max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16    text-white">
            <div class="  h-32 w-96 overflow-hidden"></div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div class="text-center mt-2">
              <h2 class="font-semibold">Sarah Smith</h2>
              <p class="text-white">Senior Manager</p>
            </div>
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li class="flex flex-col items-center justify-between">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
              <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>

          {/* Add content for Section 1 */}
        </section>
      </div>
      {/* Add more sections as needed */}
      {/* <h1
        class="text-red-600 text-2xl"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="3"
    
      >
        Beautiful Holiday Destinations
      </h1>
      <h1
        class="text-red-600 text-2xl"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-3"
        data-scroll-class="appear"
    
      >
        Beautiful Holiday Destinations
      </h1> */}

      <div
      ref={scrollRef}
      data-scroll-container
      className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]"
    >
      {/* Add your sections or divs here */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center mx-5">
        <section className="" data-scroll-section>
          {/* <h2>Section 1</h2> */}
          <div class="team    max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16    text-white">
            <div class="  h-32 w-96 overflow-hidden"></div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div class="text-center mt-2">
              <h2 class="font-semibold">Sarah Smith</h2>
              <p class="text-white">Senior Manager</p>
            </div>
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li class="flex flex-col items-center justify-between">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
              <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>

          {/* Add content for Section 1 */}
        </section>
        <section className="" data-scroll-section>
          {/* <h2>Section 1</h2> */}
          <div class="team    max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16    text-white">
            <div class="  h-32 w-96 overflow-hidden"></div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div class="text-center mt-2">
              <h2 class="font-semibold">Sarah Smith</h2>
              <p class="text-white">Senior Manager</p>
            </div>
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li class="flex flex-col items-center justify-between">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
              <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>

          {/* Add content for Section 1 */}
        </section>
        <section className="" data-scroll-section>
          {/* <h2>Section 1</h2> */}
          <div class="team    max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16    text-white">
            <div class="  h-32 w-96 overflow-hidden"></div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                class="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div class="text-center mt-2">
              <h2 class="font-semibold">Sarah Smith</h2>
              <p class="text-white">Senior Manager</p>
            </div>
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li class="flex flex-col items-center justify-between">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li class="flex flex-col items-center justify-around">
                <svg
                  class="w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
              <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>

          {/* Add content for Section 1 */}
        </section>
      </div>
      {/* Add more sections as needed */}
      {/* <h1
        class="text-red-600 text-2xl"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="3"
    
      >
        Beautiful Holiday Destinations
      </h1>
      <h1
        class="text-red-600 text-2xl"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-3"
        data-scroll-class="appear"
        
      >
        Beautiful Holiday Destinations
      </h1> */}
    </div>
    <div>
      <section className="scroll-section text-center py-10">
        {/* Content of the first section */}
        <p className="text-red-700">Me Looser </p>
      </section>
      <section className="scroll-section text-center py-10">
      <p className="text-red-900">Me Looser boy for you </p>
      </section>
      <section className="scroll-section text-center py-10">
      <p className="text-green-900">Me Looser boy for your life </p>
      </section>
      {/* Add more sections as needed */}
    </div>

    </div>
  );
};

export default Doctors;
