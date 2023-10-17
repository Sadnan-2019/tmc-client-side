import React from "react";

const Infocard = ({img,cardTitle}) => {
  return (
    <div>
      <div className="card card-side bg-gray-800 shadow-xl px-4">
        <figure>
          <img
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{cardTitle}</h2>
          <p className="text-white">Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
