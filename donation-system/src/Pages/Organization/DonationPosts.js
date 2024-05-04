import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import donationData from '../donationData'; // Import the donationData array
import { useNavigate } from 'react-router-dom';

function DonationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    condition: '',
    conditionOther: '', // Added state for condition "Other"
    description: ''
  });

  const generateUniqueId = () => {
    // Generate a random ID using a combination of current timestamp and Math.random()
    return Date.now() + Math.random().toString(36).substring(2, 9);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDonationPost = {
      id: generateUniqueId(), // Generate a unique ID for the new post
      ...formData
    };
    // Add the new donation post to the donationData array
    donationData.push(newDonationPost);
    console.log('Submitted Data:', formData);
    setFormData({
      category: '',
      itemName: '',
      condition: '',
      conditionOther: '',
      description: ''
    });
    navigate("/Donor/DonationRequests"); // Redirect to the donor page after submission
  };

  const handleReset = () => {
    setFormData({
      category: '',
      itemName: '',
      condition: '',
      conditionOther: '',
      description: ''
    });
  };

  return (
    <Container fluid>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col lg='9' className='my-5'>
          {/* <h1 className="text-white mb-4 text-center"></h1> */}
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add a new donation post!</p>
          <Card>
            <Card.Body className='px-4'>
              <Form onSubmit={handleSubmit}>
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Category</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Select size='lg' name='category' value={formData.category} onChange={handleInputChange}>
                      <option value="">Select Category</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Food">Food</option>
                      <option value="Toys">Toys</option>
                      <option value="Other">Other</option> {/* Added "Other" option */}
                    </Form.Select>
                  </Col>
                </Row>
                {/* Other form fields... */}
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Item Name</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Control type='text' placeholder='Item Name' name='itemName' value={formData.itemName} onChange={handleInputChange} size='lg' />
                  </Col>
                </Row>
                <hr className="mx-n3" />
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Condition</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Select size='lg' name='condition' value={formData.condition} onChange={handleInputChange}>
                      <option value="">Select Condition</option>
                      <option value="New">New</option>
                      <option value="Other">Used</option> {/* Added "Other" option */}
                    </Form.Select>
                    {/* Conditional rendering for "Other" option */}
                    {formData.condition === 'Other' && (
                      <Form.Control type='text' placeholder='Other Condition' name='conditionOther' value={formData.conditionOther} onChange={handleInputChange} size='lg' />
                    )}
                  </Col>
                </Row>
                <hr className="mx-n3" />
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Description</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Control as='textarea' placeholder='Description' name='description' value={formData.description} onChange={handleInputChange} rows={3} />
                  </Col>
                </Row>
                <hr className="mx-n3" />
                <Row className='justify-content-center align-items-center'>
                  <Col md='6' className='text-center'>
                    <Button className='my-4 mx-2' size='lg' type='submit'>Submit</Button>
                    <Button className='my-4 mx-2' size='lg' variant='secondary' onClick={handleReset}>Reset</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DonationForm;
