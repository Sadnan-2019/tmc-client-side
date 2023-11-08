import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date,setTreatment }) => {
  const { _id,name, slots } = treatment;

  const handleSubmit =(event)=>{
    event.preventDefault()
    const slot = event.target.slot.value;
    console.log(_id,name,slot)
    setTreatment(null);
  }
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

          <h3 className="font-bold text-lg text-center py-5">
            Booking For:{name}
          </h3>
          <form
            action=""
            onSubmit={handleSubmit}
            className="  grid grid-cols-1 gap-5 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot=><option value={slot}>{slot}</option>)
              }
              
            </select>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email
              "
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-success input-bordered w-full max-w-xs"
            />
          </form>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            {/* <label for="booking-modal" className="btn">
            Close
          </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;