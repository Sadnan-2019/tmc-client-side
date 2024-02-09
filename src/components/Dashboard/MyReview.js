import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MyReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/doctors`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((doctorsData) => {
        console.log(doctorsData);
      });
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl text-red-500">MyReview</h1>
      <div className="flex    h-screen bg-sky-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is requried",
                },
              })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500" role="alert">
                  {errors.name.message}
                </span>
              )}

              {/* <span>Bottom Left label</span> */}
            </label>
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">Speciality</span>
            </label>
            <input
              {...register("speciality", {
                required: {
                  value: true,
                  message: "Speciality is requried",
                },
              })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.speciality?.type === "required" && (
                <span className="label-text-alt text-red-500" role="alert">
                  {errors.speciality.message}
                </span>
              )}

              {/* <span>Bottom Left label</span> */}
            </label>
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">Image Url</span>
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is requried",
                },
              })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500" role="alert">
                  {errors.image.message}
                </span>
              )}

              {/* <span>Bottom Left label</span> */}
            </label>
          </div>
          <div className="card-actions justify-center py-5 ">
            <input
              value="Save"
              className="btn w-full   max-w-xs  text-white btn-sm  bg-blue-900 justify-center"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyReview;
