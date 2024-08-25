import React, { useEffect, useState } from 'react';

const ManageReview = () => {

    const [reviews, setReviews] = useState([]);
    let i = 1;
  useEffect(() => {
    fetch(`http://localhost:5000/all-review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleReviewDelete = (_id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      console.log("deleteing user id ", _id);
      const url = `http://localhost:5000/delete-review/${_id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((review) => review._id !== _id);
            setReviews(remaining);
          }
          console.log(data);
        });
    }
  };



    return (
        <div>
            <div className=" bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]   text-white text-xl">
        <h1 className="text-4xl text-white text-center py-5">
          {" "}
          Review Details
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-white">
              <tr className="text-xl">
                <th>Sl No</th>
                <th>Reviewer Name</th>
                <th>Review Details</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=" ">
              {/* row 1 */}
              {reviews.map((review) => (
                <tr>
                  <th>{i++}</th>
                  <td>{review.reviewer_name}</td>
                  <td>{review.review_details}</td>
                  {/* <td>{doctor._id}</td> */}

                  <td>
                    <img
                      class="object-cover object-center h-12 rounded-full w-12"
                      src={review.imageUrl}
                      alt="Woman looking front"
                    />
                  </td>
                  <td>
                    <button
                    //   onClick={() => handleDoctorDelete(review._id)}
                      className="btn btn-xs"
                    >
                     EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleReviewDelete(review._id)}
                      className="btn btn-xs"
                    >
                     DELETE
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 2 */}

              {/* row 3 */}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default ManageReview;