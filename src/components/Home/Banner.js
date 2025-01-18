import React, { useState } from "react";

import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurrentSlideTwo(index);
    },
    // afternewChange: (index) => {
    //   setCurrentSlideTwo(index);
    // },
    autoplay: "true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="full-width-slider">
        {/* <h2> Responsive </h2> */}
        <Slider {...settings} className="">
          <div className=" ">
            <section className="landingone  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 0 ? "animated" : ""
                        }`}
                      >
                        A premier diagnostic & hospital
                        <br class=" lg:block" />
                        in Trishal,Mymensingh
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* second ////  */}
          <div className=" ">
            <section className="landingtwo  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 1 ? "animated" : ""
                        }`}
                      >
                        This institution boasts the best and most qualified
                        professionals
                        <br class=" lg:block" />
                        with the most updated and modern infrastructure &
                        technology
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* /// thried  */}

          <div className=" ">
            <section className="landingthree  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 2 ? "animated" : ""
                        }`}
                      >
                        All surgery, diagnostic tests, medicines & blood banks
                        are
                        <br class=" lg:block" />
                        under one umbrella.{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
