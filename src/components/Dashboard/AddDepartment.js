import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDepartment = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("dept_name", data.dept_name);
      formData.append("description", data.description);
      formData.append("file", data.file[0]); // Assuming "file" is the name of the file input

      const response = await fetch("http://localhost:5000/department", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        reset();
        toast("SAVE SUCCESSFULLY");
      }

      const responseData = await response.json();
      console.log(responseData, formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl text-white text-center mt-5">Add Department</h1>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Department Name</span>
              </label>
              <input
                {...register("dept_name", {
                  required: {
                    value: true,
                    message: "Department Name is requried",
                  },
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black"
              />
              <label className="label">
                {errors.dept_name?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.dept_name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <input
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is requried",
                  },
                })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black "
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">Image Url</span>
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

export default AddDepartment;
