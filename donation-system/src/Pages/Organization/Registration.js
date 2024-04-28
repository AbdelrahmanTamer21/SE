// ./Pages/Organization/Registration.js
import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [documents, setDocuments] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setDocuments(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Uploaded documents:', documents);
  };

  return (
    <div>
      <h2>Organization Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />

        <label>Upload Documents:</label>
        <input type="file" multiple onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
