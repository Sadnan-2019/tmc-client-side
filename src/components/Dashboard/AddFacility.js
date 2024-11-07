import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
const AddFacility = () => {

  const { register, formState: { errors },handleSubmit, reset } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/facility', {
        facility_name: data.facility_name,
        // price: parseFloat(data.price),
        facility_description: data.facility_description,
      });
      if (response.status === 201) {
        alert("Book added successfully!");
        reset();
        console.log(response); // Reset form fields after successful submission
      }
    } catch (error) {
      console.error("There was an error adding the book!", error);
      alert("Failed to add book");
    }
  };
    return (
        <div>
              <div>
        <h1 className="text-2xl text-white text-center mt-5">Add Facility</h1>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Facility Name</span>
              </label>
              <input
                {...register("facility_name", {
                  required: {
                    value: true,
                    message: "Facility Name is Requried",
                  },
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black"
              />
              <label className="label">
                {errors.facility_name?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.facility_name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Facility Description</span>
              </label>
              <input
                {...register("facility_description", {
                  required: {
                    value: true,
                    message: "Facility Description is requried",
                  },
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black "
              />
              <label className="label">
                {errors.facility_description?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.facility_description.message}
                  </span>
                )}
              </label>
            </div>
             
            <div className="card-actions justify-center py-5 ">
              <input
                value="Save"
                className="btn w-full   max-w-xs  text-black btn-sm   justify-center"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddFacility;