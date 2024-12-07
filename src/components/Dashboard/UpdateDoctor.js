import React, { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLoaderData, useParams } from "react-router-dom";
const UpdateDoctor = () => {
  const { doctorId } = useParams();
  // const [doctor, setDoctor] = useState({ name: '', speciality: '' });
  const [doctors, setDoctor] = useState([]);

  // const doctor = useLoaderData()
  // const {_id,name,speciality} =doctor;
  useEffect(() => {
    fetch(`http://localhost:5000/all-doctors`)
      .then((response) => response.json())
      .then((data) => setDoctor(data))
      .catch((error) => console.error("Error fetching coffee:", error));
  }, []);
  const detailsDoctors = doctors.find((s) => s._id === doctorId);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [previewImage, setPreviewImage] = useState(detailsDoctors?.imageUrl);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl); // Set preview image
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      

      if (data.name) {
        formData.append("name", data.name);
      }
      if (data.speciality) {
        formData.append("speciality", data.speciality);
      }
      // formData.append('file', data.file[0]);

      if (data.file?.[0]) {
        formData.append("file", data.file[0]);
        console.log(formData, "NEW COLNLE");
      }
      const response = await axios.put(
        `http://localhost:5000/update-doctors/${doctorId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type to application/json
          },
        }
      );
      
      console.log("Facility updated:", response.data);
      alert("Facility updated successfully!");

      // const responseData = await response.json();
      // console.log(responseData, formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {/* <h2>Update Doctor Information for ID: {doctorId}</h2>
            <h2>Update Doctor Information for ID: {detailsDoctors?.name}</h2> */}
      <div>
        <h1 className="text-2xl text-white text-center mt-5">Update Doctor</h1>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    message: "name is requried",
                  },
                })}
                defaultValue={detailsDoctors?.name}
                // {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black"
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
                <span className="label-text text-white">Speciality</span>
              </label>
              <textarea
                {...register("speciality", {
                  required: {
                    message: "Speciality is requried",
                  },
                })}
                type="text"
                defaultValue={detailsDoctors?.speciality}
                //   devalue={}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black "
              ></textarea>
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
              <img
                class="object-cover object-center h-52 rounded-full w-52"
                // src={detailsDoctors?.imageUrl}
                src={previewImage || detailsDoctors?.imageUrl}
                alt="Woman looking front"
              />
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Image Upload</span>
              </label>
              <input
                // {...register("file", {
                //   required: {
                //     value: true,
                //     message: "Image is requried",
                //   },
                // })}
                {...register("file", {
                  validate: (value) =>
                    value.length > 0 || detailsDoctors?.imageUrl
                      ? true
                      : "Image is required",
                })}
                type="file"
                onChange={handleImageChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black"
              />

              <label className="label">
                {errors.file?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.file.message}
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

export default UpdateDoctor;
