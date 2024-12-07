import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateFacility = () => {
  const { facilityId } = useParams();
  const [facilities, setFacility] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/all-failities`)
      .then((response) => response.json())
      .then((data) => setFacility(data))
      .catch((error) => console.error("Error fetching facilities:", error));
  }, []);

  const detailsFacility = facilities.find((s) => s._id === facilityId);
  const [previewImage, setPreviewImage] = useState(detailsFacility?.imageUrl);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl); // Set preview image
    }
  };
  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const formData = new FormData();

      if (data.facility_name) {
        formData.append("facility_name", data.facility_name);
      }
      if (data.facility_description) {
        formData.append("facility_description", data.facility_description);
      }
      // formData.append('file', data.file[0]);

      if (data.file?.[0]) {
        formData.append("file", data.file[0]);
        console.log(formData, "NEW COLNLE");
      }
      // console.log(formData)

      const response = await axios.put(
        `http://localhost:5000/update-facility/${facilityId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type to application/json
          },
        }
      );

      console.log("Doctor updated:", response.data);
      alert("Doctor updated successfully!");

      // Reset the form fields (optional)
      reset();
    } catch (error) {
      console.error("Error updating facility:", error);
      alert("Failed to update the facility");
    }
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-red-600">
          Update Facility Information for ID: {facilityId}
        </h2>
        <h2>
          Update Facility Information for: {detailsFacility?.facility_name}
        </h2>
        <h2 className="text-2xl mb-4">Update Facility</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2"
          enctype="multipart/form-data"
        >
          <div className="form-control w-full mx-auto max-w-xs">
            <input
              type="text"
              placeholder="Facility Name"
              {...register("facility_name")}
              className="block border p-2 mb-2 text-black"
              defaultValue={detailsFacility?.facility_name}
            />
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <input
              type="text"
              placeholder="Facility Description"
              {...register("facility_description")}
              className="block border p-2 mb-2 text-black"
              defaultValue={detailsFacility?.facility_description}
            />
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
              <img
                class="object-cover object-center h-52 rounded-full w-52"
                // src={detailsDoctors?.imageUrl}
                src={previewImage || detailsFacility?.imageUrl}
                alt="Woman looking front"
              />
            </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-white">Image Update</span>
            </label>
            <input
              
              {...register("file", {
                validate: (value) =>
                  value.length > 0 || detailsFacility?.imageUrl
                    ? true
                    : "Image is required",
              })}
              type="file"
              onChange={handleImageChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />

            {/* <label className="label">
                {errors.file?.type === "required" && (
                  <span className="label-text-alt text-red-500" role="alert">
                    {errors.file.message}
                  </span>
                )}
              </label> */}
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
          <input
            value="Update"
            className="btn w-full max-w-xs text-black btn-sm justify-center"
            type="submit"
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFacility;
