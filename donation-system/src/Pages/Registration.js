import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    contactNumber: '',
    password: '',
    address: '',
    area: '',
    governorate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (replace with more robust validation)
    if (!formData.firstName || !formData.email || !formData.password) {
      alert('Please fill in all required fields (First Name, Email, Password).');
      return;
    }

    console.log('Registration data:', formData); // For demonstration only

    // Simulate successful registration (replace with actual logic)
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">-- Select Gender --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-Binary</option>
        {/* Add more options as needed */}
      </select>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="contactNumber">Contact Number:</label>
      <input
        type="tel" // Use "tel" for phone number input
        id="contactNumber"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Basic phone number pattern (optional)
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <textarea id="address" name="address" value={formData.address} onChange={handleChange} />

      <label htmlFor="area">Area:</label>
      <input
        type="text"
        id="area"
        name="area"
        value={formData.area}
        onChange={handleChange}
      />

      <label htmlFor="governorate">Governorate:</label>
      <input
        type="text"
        id="governorate"
        name="governorate"
        value={formData.useState} // Typo fix: should be formData.governorate
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
