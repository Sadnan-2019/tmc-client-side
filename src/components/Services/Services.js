import React from "react";
import floride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "floride",
      description: "",
      img: floride,
    },
    {
      _id: 2,
      name: "cavity",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-black ">
      <div>
        <section
          id="features"
          class="container mx-auto px-4 space-y-6   py-8 dark:bg-transparent md:py-12 lg:py-20"
        >
          <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">
              Our Services
            </h2>
          </div>

          <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {services.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
