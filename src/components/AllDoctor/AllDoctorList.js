import React from 'react';
import whatsapp from "../../assets/images/whatsapp.png";
const AllDoctorList = ({ doctor }) => {
    const { name, speciality, imageUrl } = doctor;
    return (
        <div>
               <section className="relative">
  <div className="team h-96 flex flex-col justify-between">
    {/* Image Section */}
    <div className="mx-auto w-32 h-32 border-4 border-white rounded-full overflow-hidden">
      <img
        className="object-cover object-center w-full h-full"
        src={imageUrl}
        alt="Woman looking front"
      />
    </div>

    {/* Text Section */}
    <div className="text-center mt-2 flex-grow">
      <h2 className="font-semibold text-white">{name}</h2>
      <p className="text-white">{speciality}</p>
    </div>

    {/* Button Section */}
    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 py-1">
      <div className="flex justify-center items-center">
        <a
          href="https://wa.me/+8801774966666"
          title="WHATSAPP CHAT"
          className="rounded-full hover:shadow-lg font-semibold text-white px-6 py-2"
        >
          Book Appointment
        </a>
        <img alt="" src={whatsapp} className="w-5 ml-2" />
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default AllDoctorList;