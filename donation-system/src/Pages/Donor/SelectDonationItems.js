import React, { useState, useEffect } from 'react';
// Import Bootstrap components
import { Container, Form, Image, InputGroup, FormControl } from 'react-bootstrap';

function SelectDonationItems() {
  const [donationItems, setDonationItems] = useState([]); // Stores list of donation items
  const [selectedItems, setSelectedItems] = useState([]); // Stores selected items with quantities

  // Example donation items (replace with your API call)
  const exampleItems = [
    { id: 1, name: 'Canned Food (variety pack)', image: 'https://tse2.mm.bing.net/th?id=OIP._7I1fjIZEIovaY7F9TI_nwAAAA&pid=Api&P=0&h=220' }, // Placeholder image
    { id: 2, name: 'Bottled Water', image: 'https://tse4.mm.bing.net/th?id=OIP.7k6CHo3Qw1Gz7FraE9xATwHaHa&pid=Api&P=0&h=220' }, // Placeholder image
    { id: 3, name: 'Clothing (adult sizes)', image: 'https://tse3.mm.bing.net/th?id=OIP.iLqBpTu_FyMkmJPYa3OTMQHaHa&pid=Api&P=0&h=220' }, // Placeholder image
    { id: 4, name: 'Toys (gently used)', image: 'https://tse4.mm.bing.net/th?id=OIP.Bnl4wrWYgrAkg9Rgfbu6xQHaHO&pid=Api&P=0&h=220' }, // Placeholder image
  ];

  // Fetch donation items (replace with actual API call)
  useEffect(() => {
    // Simulate API call with example data
    setDonationItems(exampleItems);
  }, []);

  const handleItemSelection = (event, itemId) => {
    const isChecked = event.target.checked;
    const updatedSelection = [...selectedItems]; // Copy existing selection
    if (isChecked) {
      updatedSelection.push({ id: itemId, quantity: 1 }); // Add item with default quantity 1
    } else {
      const itemIndex = updatedSelection.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        updatedSelection.splice(itemIndex, 1); // Remove item from selection
      }
    }
    setSelectedItems(updatedSelection);
  };

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value, 10); // Parse to integer
    setSelectedItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  return (
    <Container fluid className="donation-items">
      <h2>Select Donation Items</h2>
      {donationItems.length > 0 ? (
        <ul className="donation-item-list d-flex flex-wrap justify-content-start">
          {donationItems.map((item) => (
            <li
              key={item.id}
              className="donation-item mb-4 p-3 border rounded-3"
              style={{ width: '300px', margin: '15px' }} // Increased margin for spacing
            >
              <div className="d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  label={item.name}
                  checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                  onChange={(event) => handleItemSelection(event, item.id)}
                  className="me-3"
                />
                {item.image && <Image src={item.image} alt={item.name} width={75} height={75} className="me-3" />}
                <InputGroup style={{ width: '100px', marginLeft: 'auto' }}>
                  <InputGroup.Text style={{ marginLeft: '0px' }}>Quantity</InputGroup.Text>
                  <FormControl
                    type="number"
                    min="1"
                    defaultValue="1"
                    onChange={(event) => handleQuantityChange(event, item.id)}
                  />
                </InputGroup>
                </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No donation items available</p>
      )}
    </Container>
  );
}



export default SelectDonationItems;
