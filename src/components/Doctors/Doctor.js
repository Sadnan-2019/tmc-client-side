import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";
const Doctor = ({ doctor }) => {
  const { name, speciality, imageUrl } = doctor;
  return (
    <div>
      <section className="   "  >
        <div class="team  h-96    ">
          {/* <div class="  h-32 w-96 overflow-hidden"></div> */}
          <div class="mx-auto w-32 h-32   border-4 border-white rounded-full overflow-hidden">
            <img
              class="object-cover object-center  h-32"
              src={imageUrl}
              alt="Woman looking front"
            />
          </div>
          <div class="text-center mt-2">
            <h2 class="font-semibold text-white ">{name}</h2>
            <p class="text-white">{speciality}</p>
          </div>

          <div class="    rounded-full  border-t  mt-10 bg-gray-900 flex justify-center items-center">
            <a
              href="https://wa.me/+8801619848555"
              title="WHATSAPP CHAT"
              class="rounded-full  hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Book Appoinment
            </a>
            <img alt="" src={whatsapp} className="w-5" />
          </div>
        </div>


      </section>

 
       


    </div>
  );
};

export default Doctor;
