import React, { useState } from 'react';

function DonationForm() {
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, like sending the data to a server
    console.log('Submitted Data:', formData);
    // Reset form after submission
    setFormData({
      category: '',
      itemName: '',
      description: ''
    });
  };

  return (
    <div>
      <h2>Submission of Donation Posts</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Blood">Food</option>
            <option value="Food">Toys</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label>Item Name:</label>
          <input type="text" name="itemName" value={formData.itemName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DonationForm;
