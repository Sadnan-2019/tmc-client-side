import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

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

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/update-facility/${facilityId}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json', // Set Content-Type to application/json
          },
        }
      );

      console.log('Form Data:', data);
      console.log('Facility updated:', response.data);
      alert('Facility updated successfully!');

      // Reset the form fields (optional)
      reset();
    } catch (error) {
      console.error('Error updating facility:', error);
      alert('Failed to update the facility');
    }
  };

  return (
    <div>
      <div className="p-4">
        <h2 className='text-red-600'>Update Facility Information for ID: {facilityId}</h2>
        <h2>Update Facility Information for: {detailsFacility?.facility_name}</h2>
        <h2 className="text-2xl mb-4">Update Facility</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <input
            type="text"
            placeholder="Facility Name"
            {...register('facility_name')}
            className="block border p-2 mb-2 text-black"
            defaultValue={detailsFacility?.facility_name}
          />
          <input
            type="text"
            placeholder="Facility Description"
            {...register('facility_description')}
            className="block border p-2 mb-2 text-black"
            defaultValue={detailsFacility?.facility_description}
          />
          <input
            value="Save"
            className="btn w-full max-w-xs text-black btn-sm justify-center"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateFacility;
