import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {


    const {
        register,
        formState: { errors },
        handleSubmit, reset
    } = useForm();


    const onSubmit = async (data) => {


        try {
            const formData = new FormData();
            formData.append("reviewer_name", data.reviewer_name);
            formData.append("review_details", data.review_details);
            formData.append("file", data.file[0]); // Assuming "file" is the name of the file input

            const response = await fetch("http://localhost:5000/review", {
                method: "POST",
                body: formData,


            });
            if (response.ok) {
                reset();
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
                <h1 className="text-2xl text-white text-center mt-5">Add Review</h1>
                <div className=" ">
                    <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                        <div className="form-control w-full mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text text-white"> Reviewer Name</span>
                            </label>
                            <input
                                {...register("reviewer_name", {
                                    required: {
                                        value: true,
                                        message: "Reviewer Name is requried",
                                    },
                                })}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs text-black"
                            />
                            <label className="label">
                                {errors.reviewer_name?.type === "required" && (
                                    <span className="label-text-alt text-red-500" role="alert">
                                        {errors.reviewer_name.message}
                                    </span>
                                )}

                                {/* <span>Bottom Left label</span> */}
                            </label>
                        </div>
                        <div className="form-control w-full mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Review Details</span>
                            </label>
                            <textarea
                                {...register("review_details", {
                                    required: {
                                        value: true,
                                        message: "Review is requried",
                                    },
                                })}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs text-black "
                            ></textarea>
                            <label className="label">
                                {errors.review_details?.type === "required" && (
                                    <span className="label-text-alt text-red-500" role="alert">
                                        {errors.review_details.message}
                                    </span>
                                )}

                                {/* <span>Bottom Left label</span> */}
                            </label>
                        </div>
                        <div className="form-control w-full mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Image</span>
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

export default AddReview;