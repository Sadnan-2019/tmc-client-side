import axios from 'axios';
import React, { useState } from 'react';

const MyReview = () => {
     const [formData, setFormData] = useState({
          name: '',
          speciality: '',
          picture: ''
      });
  
      const handleChange = e => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  
      const handleSubmit = async e => {
          e.preventDefault();
          try {
              await axios.post('/api/doctors', formData);
              console.log('Doctor submitted successfully');
              // Optionally, you can reset the form here
          } catch (error) {
              console.error('Error submitting doctor:', error);
          }
      };
     return (
          <div>
               <h1 className='text-2xl text-red-500'>MyReview</h1> 
               <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="speciality" placeholder="Speciality" value={formData.speciality} onChange={handleChange} />
            <input type="text" name="picture" placeholder="Picture URL" value={formData.picture} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
          </div>
     );
};

export default MyReview;