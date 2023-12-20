import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
  const { _id, dept_name, doctor_name, slots } = treatment;

  const [user, loading, error] = useAuthState(auth);

  const formattedDate = format(date, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    // console.log(_id, dept_name, doctor_name, slot);
    const appoinment = {
      treatmentId: _id,
      department: dept_name,
      name: doctor_name,
      date: formattedDate,
      patients_name: user.displayName,
      patients_email: user.email,
      phone: event.target.phone.value,
      slot,
    };

    fetch(`http://localhost:5000/appoinment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(appoinment),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          // console.log("sadannnnwni",appoinment)

        if(data.success){
          toast(`Appoinment is set,${formattedDate} at ${slot}`)
        

        }else{
          toast.error(`You Have an Appoinment is set,${formattedDate} at ${slot}`)

        }
        refetch()
        setTreatment(null)
      } );
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle     ">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className=" text-red-800 font-bold  modal-button">
            <h3 className="font-bold text-lg text-center py-2">
              Booking For:{dept_name}
            </h3>
            <h3 className="font-bold text-lg text-center py-2">
              Booking For:{doctor_name}
            </h3>
          </div>
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
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              disabled
              value={user?.displayName || ""}
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              disabled
              value={user?.email || ""}
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
