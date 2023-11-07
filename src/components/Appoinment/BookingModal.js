import React from "react";

const BookingModal = ({treatment}) => {
     const {name,slots} = treatment
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
      <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        {/* <button className="btn" onClick={()=>document.getElementById('booking-modal').showModal()}>open modal</button> */}

        <h3 className="font-bold text-lg">Booking For:{name}</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <label for="booking-modal" className="btn">
            Close
          </label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BookingModal;
