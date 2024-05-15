import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddNewPos() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Profession: '',
    YearsOfExp: '',
    NumberOfDaysNeeded: '',
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
  

    setFormData({
      Profession: '',
      YearsOfExp: '',
      NumberOfDaysNeeded: '',
    });
    navigate("/Organization/OrganizationDashboard"); // Redirect to the donor page after submission
  };

  const handleReset = () => {
    setFormData({
      Profession: '',
      YearsOfExp: '',
      NumberOfDaysNeeded: '',
    });
  };

  return (
    <Container fluid>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col lg='9' className='my-5'>
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add a new available position!</p>
          <Card>
            <Card.Body className='px-4'>
              <Form onSubmit={handleSubmit}>
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Profession</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Select size='lg' name='Profession' value={formData.Profession} onChange={handleInputChange}>
                      <option value="">Select Category</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Teacher">Teacher</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Years Of Experience</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Control type='number' placeholder='0' name='YearsOfExp' value={formData.YearsOfExp} onChange={handleInputChange} size='lg' />
                  </Col>
                </Row>
                <Row className='align-items-center pt-4 pb-3'>
                  <Col md='3' className='ps-5'>
                    <h5 className="mb-0">Description</h5>
                  </Col>
                  <Col md='9' className='pe-5'>
                    <Form.Control as='textarea' placeholder='Description' name='NumberOfDaysNeeded' value={formData.NumberOfDaysNeeded} onChange={handleInputChange} rows={3} />
                  </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                  <Col md='6' className='text-center'>
                    <Button variant="main-inverse" className='my-4 mx-2' size='lg' type='submit'>Submit</Button>
                    <Button variant="main" className='my-4 mx-2 border-dark' size='lg' onClick={handleReset}>Reset</Button>
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

export default AddNewPos;
