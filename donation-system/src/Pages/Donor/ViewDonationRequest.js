import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Card, Button, ButtonGroup } from 'react-bootstrap';
import styles from './ViewDonationRequest.css';

function ViewDonationRequests() {
  const [donationRequests, setDonationRequests] = useState([]); // Stores list of donation requests
  const [filterCategory, setFilterCategory] = useState(''); // Stores selected filter category

  // Fetch donation requests (replace with your API call)
  useEffect(() => {
    const fetchDonationRequests = async () => {
      let url = '/api/donations/requests';
      if (filterCategory) {
        url += `?category=${filterCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setDonationRequests(data);
    };
    fetchDonationRequests();
  }, [filterCategory]); // Re-fetch requests on filter change

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleCategorySelection = (category) => {
    setFilterCategory(category);
  };

  return (
    <Container fluid className="donation-requests">
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Donation Requests</h2> {/* Heading */}
          <Form className="mt-3 d-flex justify-content-center"> {/* Centered filter bar */}
            <InputGroup size="sm" className="border border-success rounded"> {/* Green border */}
              <FormControl
                placeholder="Filter by Category"
                value={filterCategory}
                onChange={handleFilterChange}
              />
            </InputGroup>
          </Form>
          <div className="category-buttons mt-3"> {/* Category selection buttons */}
            <ButtonGroup>
              <Button variant="primary" onClick={() => handleCategorySelection('clothes')}>Clothes</Button>
              <Button variant="primary" onClick={() => handleCategorySelection('toys')}>Toys</Button>
              <Button variant="primary" onClick={() => handleCategorySelection('food')}>Food</Button>
              <Button variant="primary" onClick={() => handleCategorySelection('blood donations')}>Blood Donations</Button>
              <Button variant="primary" onClick={() => handleCategorySelection('medical supplies')}>Medical Supplies</Button>
              <Button variant="primary" onClick={() => handleCategorySelection('school supplies')}>School Supplies</Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        {donationRequests.map((request) => (
          <Col key={request.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{request.title}</Card.Title>
                <Card.Text>{request.description}</Card.Text>
                <Button variant="dark">Donate</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ViewDonationRequests;
