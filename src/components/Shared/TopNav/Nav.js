import React from "react";
import call from "../../../assets/images/incoming-call.gif";
import logo from "../../../assets/images/tmc.png";
import working from "../../../assets/images/working.png";
import Marquee from "react-fast-marquee";
const Nav = () => {
  return (
    <div>
      <div className=" text-black ">
        <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12    items-center ">
          {/* <img  src={logo} className="w-24" alt="" /> */}
          <div className="grid grid-cols-2 justify-items-center items-center gap-12  ">
            <div
              className="flex items-center font-bold    gap-2"
              // style={{ color: "#92468E" }}
            >
              <div>
                {/* <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl    " /> */}
                <img className="w-20 rounded-full" src={logo} alt="" />
              </div>
              <div>
                {/* <p className="text-[10px] lg:text-xs   	">
                  <a href="tel:+01643-390832 " className="  	">
                    01643-390832
                  </a>
                </p>
                <p className="text-[10px] lg:text-xs  	 	">01643-390832 </p> */}
              </div>
            </div>
            <div
              className="flex items-center font-bold    gap-2"
              // style={{ color: "#92468E" }}
            >
              <div>
                {/* <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl    " /> */}
                <img className="w-10 rounded-full" src={working} alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                  <a href="tel:+01643-390832 " className="  	">
                    Working Hour
                  </a>
                </p>
                <p className="text-[10px] lg:text-xs  	 	">We are open 24/7 </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-items-center items-center gap-12  ">
            <div
              className="flex items-center font-bold    gap-2"
              // style={{ color: "#92468E" }}
            >
                <div>
                <img src={call} className="w-8 rounded-full" alt="" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs   	">
                  <a href="tel:+01643-390832 " className="  	">
                    01643-390832
                  </a>
                </p>
                <p className="text-[10px] lg:text-xs  	 	">01643-390832 </p>
              </div>
            </div>
            <div
              className="flex items-center font-bold    gap-2"
              // style={{ color: "#92468E" }}
            >
              <div>
                {/* <img src={email} className="w-7 rounded-full" alt="" /> */}
              </div>
              <div>
                
                {/* <p className="text-[10px] lg:text-xs	 	">info@mrs.mrg.com.bd</p> */}
                <a
                  href="mailto:info@mrs.mrg.com.bd"
                  className="text-[10px] lg:text-xs  	"
                >
                  Complain Submission
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
