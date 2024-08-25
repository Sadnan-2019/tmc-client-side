import React, { useEffect, useState } from "react";
import quoite from "../../assets/images/quote.png";
import people1 from "../../assets/images/review1.jpg";
import people2 from "../../assets/images/review2.jpg";
import people3 from "../../assets/images/review3.jpg";
import Review from "./Review";

const Tstimoniel = () => {

  const [allReviews, setReviews] = useState([]);
  const reviews = [
    { _id: 1, name: "Shafiul Hasan Shihab", review: "Diagnostic & consultations available with nice neat & clean environment", img: people1 },
    { _id: 2, name: "Md Abdul Gofur", review: "The behavior of the staff is very nice   ", img: people2 },
    { _id: 3, name: "Fakhruzzaman Palash", review: "Environment is nice & professional staff", img: people3 },
  ];

  useEffect(() => {
    fetch(`http://localhost:5000/all-review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="px-12 my-12 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl mt-8 text-white">Testimonial</h1>
          <h1 className="text-2xl text-white">What our patients sayes</h1>
        </div>
        <div>
          <img className="text-white sm:w-28 lg:w-32" src={quoite} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 gap-12 lg:grid-cols-3 px-6">

        {

allReviews.map(review =>
            <Review review={review} key={review._id}></Review>)
        }
      </div>
    </div>
  );
};

export default Tstimoniel;
