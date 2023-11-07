import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <div className="card-body   rounded-3xl">
          <h2 className="card-title text-2xl font-bold text-white">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span className="text-white">{slots[0]}</span>
            ) : (
              <span className="text-red-400">No Slots Available</span>
            )}
          </p>
          <p className="text-lg   text-white">
            {slots.length} {slots.length > 1 ? "Spaces Available" : "Space"}
          </p>
          <div className="card-actions justify-end">
            <label
              for="booking-modal"
              class="btn   text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 modal-button"
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
            >
              Book Now
            </label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
