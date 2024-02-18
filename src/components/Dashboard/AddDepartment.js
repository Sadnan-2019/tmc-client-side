import React from 'react';
import { useForm } from 'react-hook-form';
 

const AddDepartment = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        // const url = `http://localhost:5000/department`;
        // fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // })
        //   .then((res) => res.json())
        //   .then((doctorsData) => {
        //     console.log(doctorsData);
        //   });
        console.log(data);
      };
    return (
        <div>
           <div>
      <h1 className="text-2xl text-white text-center mt-5">Add Department</h1>
      <div className=" ">
        <form onSubmit={handleSubmit(onSubmit)}>
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

              {/* <span>Bottom Left label</span> */}
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

              {/* <span>Bottom Left label</span> */}
            </label>
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-white">Image Url</span>
            </label>
            <input
              {...register("image", {
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