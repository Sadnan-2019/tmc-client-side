import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateDepartment = () => {
    const { deptId } = useParams();
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all-department`)
          .then((response) => response.json())
          .then((data) => setDepartments(data))
          .catch((error) => console.error("Error fetching coffee:", error));
      }, []);
      const detailsDepartments = departments.find((d) => d._id === deptId);
      const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
      const [previewImage, setPreviewImage] = useState(detailsDepartments?.imageUrl);

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
          formData.append("name", data.name);
          formData.append("speciality", data.speciality);
        //   formData.append("file", data.file[0]); 
          // Assuming "file" is the name of the file input
    // Only append file if a new image is selected
    if (data.file && data.file[0]) {
        formData.append("file", data.file[0]);
      }
          const response = await fetch(`http://localhost:5000/update-departments/${deptId}`, {
            method: "PATCH",
            body: formData,
          });
          if (response.ok) {
            reset();
            toast("UPDATE  SUCCESSFULLY");
          }
    
          const responseData = await response.json();
          console.log(responseData, formData);
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div>
            Me doctor update
            <h2>Update Doctor Information for ID: {detailsDepartments?.dept_name}</h2>
            <div>
        <h1 className="text-2xl text-white text-center mt-5">Update Department</h1>
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
                defaultValue={detailsDepartments?.dept_name}
                // {...register("name", { required: "Name is required" })}
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
                <span className="label-text text-white">Speciality</span>
              </label>
              <textarea
                {...register("speciality", {
                  required: {
                    message: "Speciality is requried",
                  },
                })}
                type="text"
                defaultValue={detailsDepartments?.description}
                //   devalue={}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black "
              ></textarea>
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
              <img
                class="object-cover object-center h-52 rounded-full w-52"
                // src={detailsdepartments?.imageUrl}
                src={previewImage || detailsDepartments?.imageUrl}
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
                      value.length > 0 || detailsDepartments?.imageUrl
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

export default UpdateDepartment;