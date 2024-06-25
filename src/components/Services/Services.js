import React, { useEffect, useRef, useState } from "react";
import floride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import Orthopedics from "../../assets/images/orthopedics.png";
import Cardiology from "../../assets/images/Cardiology.png";
import Gynaecology from "../../assets/images/Gynaecology.png";
import GeneralSurgeon from "../../assets/images/surgeon.png";
import Medicine from "../../assets/images/medicine.png";
import Chest from "../../assets/images/chest.png";
import Nephrology from "../../assets/images/Nephrology.png";
import Skin from "../../assets/images/skin-care.png";
import Neurology from "../../assets/images/neurology.png";
import Pediatrics from "../../assets/images/pediatrics.png";
import Oral from "../../assets/images/oral& mouth.png";
import ENT from "../../assets/images/ENT.png";
import Gastroenterology from "../../assets/images/Gastroenterology.png";
import Rehabilitation from "../../assets/images/rehabilitation.png";
import Service from "./Service";
import gsap from "gsap";

import "./Services.css";
const Services = () => {


  const [doctors, setDoctors] = useState([]);
    let i = 1;
    useEffect(() => {
      fetch(`http://localhost:5000/all-department`)
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, []);
  const services = [
    {
      _id: 1,
      name: "Orthopedics",
      description: "",
      img: Orthopedics,
    },
    {
      _id: 2,
      name: "Cardiology",
      description: "",
      img: Cardiology,
    },
    {
      _id: 3,
      name: "Gynaecology & Obstetircs",
      description: "",
      img: Gynaecology,
    },
    {
      _id: 4,
      name: "General Surgeon",
      description: "",
      img: GeneralSurgeon,
    },
    {
      _id: 5,
      name: "Medicine",
      description: "",
      img: Medicine,
    },
    {
      _id: 6,
      name: "Asthma, Chest & Cardiology",
      description: "",
      img: Chest,
    },
    {
      _id: 7,
      name: "Nephrology",
      description: "",
      img: Nephrology,
    },
    {
      _id: 8,
      name: "Skin VD",
      description: "",
      img: Skin,
    },
    {
      _id: 9,
      name: "Neurology",
      description: "",
      img: Neurology,
    },
    {
      _id: 10,
      name: "Padiatrics",
      description: "",
      img: Pediatrics,
    },
    {
      _id: 11,
      name: "Oral & Dental",
      description: "",
      img: Oral,
    },
    {
      _id: 12,
      name: "ENT",
      description: "",
      img: ENT,
    },
    {
      _id: 13,
      name: "IMO",
      description: "",
      img: cavity,
    },
    {
      _id: 14,
      name: "Gastroenterology",
      description: "",
      img: Gastroenterology,
    },
    {
      _id: 15,
      name: "Rehabilitation and Sports Medicine",
      description: "",
      img: Rehabilitation,
    },
  ];
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
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              Our Department
            </h2>
          </div>

          <div id="smooth-wrapper">
            <div
              id="smooth-content "
              class="scroll-container  mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
            >
              {doctors.map((doctor) => (
                <Service doctor={doctor} key={doctor._id}></Service>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
