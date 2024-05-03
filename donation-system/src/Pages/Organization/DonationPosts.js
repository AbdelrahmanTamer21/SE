import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import donationData from './Pages/donationData'; // Import the donationData array

function DonationForm() {
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    condition: '',
    conditionOther: '', // Added state for condition "Other"
    description: ''
  });

  const generateUniqueId = () => {
    // Generate a random ID using a combination of current timestamp and Math.random()
    return Date.now() + Math.random().toString(36).substr(2, 9);
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
          <h1 className="text-white mb-4 text-center"></h1>
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add a new donation post!</p>
          <Card>
            <Card.Body className='px-4'>
              <Form onSubmit={handleSubmit}>
                {/* Form fields... */}
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
