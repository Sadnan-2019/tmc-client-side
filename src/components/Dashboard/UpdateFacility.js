import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateFacility = ( ) => {

    const { facilityId } = useParams();
    const [facilities, setFacility] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/all-failities`)
          .then((response) => response.json())
          .then((data) => setFacility(data))
          .catch((error) => console.error("Error fetching coffee:", error));
      }, []);
      const detailsFacility = facilities.find((s) => s._id === facilityId);
    // Function to handle form submission
    const onSubmit = async (data) => {
      try {
        const response = await axios.put(`http://localhost:5000/update-facility/${facilityId}`, data);
  
        console.log('Book updated:', response.data);
        alert('Book updated successfully!');
  
        // Reset the form fields
        reset();
      } catch (error) {
        console.error('Error updating book:', error);
        alert('Failed to update the book');
      }
    };
    return (
        <div>
            <div className="p-4">
                <h2 className='text-red-600'>Update Doctor Information for ID: {facilityId}</h2>
            <h2>Update Doctor Information for ID: {detailsFacility?.facility_name}</h2> 
      <h2 className="text-2xl mb-4">Update Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <input
          type="text"
          placeholder="Book Name"
          {...register('facility_name')}
          className="block border p-2 mb-2 text-black"
          defaultValue={detailsFacility?.facility_name}
        />
        <input
          type="text"
          placeholder="Book Price"
          {...register('facility_description')}
          className="block border p-2 mb-2 text-black"
          defaultValue={detailsFacility?.facility_description}
        />
        {/* <textarea
          placeholder="Book Description"
          {...register('description')}
          className="block border p-2 mb-2"
        ></textarea> */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Book
        </button>
      </form>
    </div>
        </div>
    );
};

export default UpdateFacility;