import React, { useState } from "react";
import landingone from "../../assets/images/operation image.jpg";
import landingthree from "../../assets/images/landing3.jpg";
import landingfour from "../../assets/images/landing4.jpg";
import landingfive from "../../assets/images/operation 2.jpg";
import machineone from "../../assets/images/machine1.jpeg";
import machinetwo from "../../assets/images/machine3.jpeg";
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
            <section className="   blog   hero min-h-screen      bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white">
              <div className=" md:py-20 py-10 lg:py-24 hero-content flex-col lg:flex-row-reverse       ">
                <div className="slide-content sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 ">
                  <span
                    style={{ lineHeight: "120%" }}
                    className={`slide-text text-[25px] lg:text-[32px] font-bold   text-left   text-transparent  text-white  ${
                      currentSlide === 0 ? "animated" : ""
                    }`}
                  >
                    {" "}
                    A premier diagnostic & hospital <br></br>
                    in Trishal,Mymensingh
                  </span>

                  <div className="flex  gap-4 mt-10 text-center">
                    <a
                      href="/"
                      className={`slide-text btn-sm lg:p-2 rounded-full    hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                        currentSlide === 0 ? "animated" : ""
                      }`}
                    >
                      <span className="text-sm font-medium lg:text-lg">
                        {" "}
                        BOOKED YOUR DOCTOR
                      </span>
                      <BsArrowRight className="text-lg hidden lg:ml-2" />
                    </a>
                  </div>
                </div>

                {/* <div class="sm:block lg:hidden  text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                  <img
                    src={landingone}
                    alt=""
                    className={`  max-w-sm slide-text p-1   lg:p-2   lg:text-lg font-bold  hover-button rounded-3xl     round-lg         text-white   ${
                      currentSlideTwo === 0 ? "animatedpic" : ""
                    }`}
                  />
                </div> */}

                <div class="relative   lg:flex sm:flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl   xl:max-w-6xl">
                  <div class=" w-full h-64 lg:w-1/2 lg:h-auto">
                    <img
                      class="h-full w-full object-cover rounded-3xl"
                      src={landingfive}
                      alt="Winding mountain road"
                    />
                  </div>

                  <div class="max-w-lg   md:max-w-2xl md:z-10   md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    <div class="flex flex-col p-12  ">
                      <img
                        class="h-full w-full object-cover rounded-3xl"
                        src={landingone}
                        alt="Winding mountain road"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* second ////  */}

          <div className=" ">
            <section className=" blog   hero min-h-screen      bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white">
              <div className="md:py-20 py-10 lg:py-24 hero-content flex-col lg:flex-row-reverse">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  <h2
                    style={{ lineHeight: "120%" }}
                    className={`slide-text  text-[25px] lg:text-[32px] font-bold   text-left   text-transparent  text-white     ${
                      currentSlide === 1 ? "animated" : ""
                    }`}
                  >
                    {" "}
                    This institution boasts the best and most qualified professionals
                    with the most updated and modern infrastructure & technology  
                  </h2>

                  <div className="flex  gap-4 mt-10 text-center">
                    <a
                      href="/"
                      className={`slide-text btn-sm lg:p-2 rounded-full    hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                        currentSlide === 1 ? "animated" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg hidden lg:ml-2" />
                    </a>
                  </div>
                </div>

                <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                  {/* <img src={landingtwo} alt="" className="  h-5/6 w-5/6 " /> */}
                  <div class="relative   lg:flex sm:flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl   xl:max-w-6xl">
                    <div class=" w-full h-64 lg:w-1/2 lg:h-auto">
                      <img
                        class="h-full w-full object-cover rounded-3xl"
                        src={machineone}
                        alt="Winding mountain road"
                      />
                    </div>

                    <div class="max-w-lg   md:max-w-2xl md:z-10   md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                      <div class="flex flex-col p-12  ">
                        <img
                          class="h-full w-full object-cover rounded-3xl"
                          src={machinetwo}
                          alt="Winding mountain road"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>


          {/* /// thried  */}
          <div className=" ">
            <section className="  blog   hero min-h-screen      bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]      text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                 

                  <h1
                    className="text-[25px] lg:text-[32px] font-bold   text-left   text-transparent  text-white "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    All surgery, diagnostic tests, medicines & blood banks are under one umbrella.
                  </h1>

                  <div className="flex  gap-4 mt-10 text-center">
                    <a
                      href="/"
                      className={`slide-text btn-sm lg:p-2 rounded-full    hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                        currentSlide === 2 ? "animated" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg hidden lg:ml-2" />
                    </a>
                  </div>
                </div>

                <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                  <img src={landingthree} alt="" className="  h-5/6 w-5/6 " />
                </div>
              </div>
            </section>
          </div>
          {/* <div className=" ">
            <section className=" bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]  blog h-auto       text-white">
              <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 lg:grid-cols-2  gap-5 justify-center items-center">
                <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                  <h2
                    style={{ lineHeight: "120%" }}
                    className={`slide-text  md:text-[43px] font-bold text-[20px] text-left   text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600   ${
                      currentSlide === 3 ? "animated" : ""
                    }`}
                  >
                    {" "}
                    Influence
                  </h2>

                  <h1
                    className="mb-5 text-lg  lg:text-2xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
                    style={{ lineHeight: "120%", color: "white" }}
                  >
                    The platform provides in-depth discussion and the necessary
                    of optics for everyone to understand why wide-ranging
                    topics/research
                  </h1>

                  <div className="flex  gap-4 mt-10 text-center">
                    <a
                      href="/"
                      className={`slide-text btn-sm lg:p-2 rounded-full    hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                        currentSlide === 3 ? "animated" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {" "}
                        GET STARTED WITH US
                      </span>
                      <BsArrowRight className="text-lg hidden lg:ml-2" />
                    </a>
                  </div>
                </div>

                <div class="  sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
                  <img src={landingfour} alt="" className=" h-5/6 w-5/6 " />
                </div>
              </div>

              
            </section>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
