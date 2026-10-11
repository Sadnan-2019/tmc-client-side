import React from 'react';

const Review = ({review}) => {

  const { reviewer_name, review_details, imageUrl } = review;
     return (
          <div>
                   <div class="card   text-white mb-5 mt-12">
      <div class="card-body">
        {/* <h2 class="card-title">Card title!</h2> */}
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div class="  items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src={imageUrl} alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5 ">
            <h2>{review_details}</h2>
            <p>{reviewer_name}</p>
          </div>
        </div>
      </div>
    </div>
          </div>
     );
};

export default Review;