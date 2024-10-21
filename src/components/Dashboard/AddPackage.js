import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = async (data) => {
        try {
          const formData = new FormData();
          formData.append("package_name", data.package_name);
          formData.append("package_rate", data.package_rate);
          formData.append("file", data.file[0]); // Assuming "file" is the name of the file input
    
          const response = await fetch("http://localhost:5000/healthpackage", {
            method: "POST",
            headers: {
              "content-type" : "application/json",
              
  
            },
            body: formData,
          });
    
          const responseData = await response.json();
          console.log(responseData, formData);
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <div>
            <div>
        <h1 className="text-2xl text-white text-center mt-5">Add Package</h1>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Package Name</span>
              </label>
              <input
                {...register("package_name", {
                  required: {
                    value: true,
                    message: "Package Name is requried",
                  },
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black"
              />
              <label className="label">
                {errors.package_name?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.package_name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Package Rate</span>
              </label>
              <input
                {...register("package_rate", {
                  required: {
                    value: true,
                    message: "Package_rate is requried",
                  },
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black "
              />
              <label className="label">
                {errors.package_rate?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.package_rate.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Image Upload</span>
              </label>
              <input
                {...register("file", {
                  required: {
                    value: true,
                    message: "Image is requried",
                  },
                })}
                type="file"
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

export default AddPackage;