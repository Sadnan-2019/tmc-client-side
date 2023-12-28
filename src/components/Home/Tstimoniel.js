import React from "react";
import quoite from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Tstimoniel = () => {
  const reviews = [
     { _id: 1, name: "tusher", review: "", img: people1 },
     { _id: 2, name: "amir", review: "", img: people2 },
     { _id: 3, name: "hafiz", review: "", img: people3 },
];

  return (
    <div className="px-12 my-12 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl text-blue-400">Testimonial</h1>
          <h1 className="text-2xl text-pink-800">What our patients sayes</h1>
        </div>
        <div>
          <img className=" sm:w-28 lg:w-60" src={quoite} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 gap-12 lg:grid-cols-3 px-6">

          {

                    reviews.map(review=>
                    <Review review={review} key={review._id}></Review>)
          }
      </div>
    </div>
  );
};

export default Tstimoniel;
