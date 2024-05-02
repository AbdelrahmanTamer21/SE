import React, { useState, useEffect } from 'react';
// Import Bootstrap components
import { Container, Row, Col, Card, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
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

  return (
    <Container fluid className="donation-requests">
      <Row>
        <Col xs={12}>
          <h2>Donation Requests</h2> {/* Heading */}
          <Form className="mt-3 d-flex justify-content-center"> {/* Centered filter bar */}
            <InputGroup size="sm" className="border border-success rounded"> {/* Green border */}
              <FormControl
                placeholder="Filter by Category"
                value={filterCategory}
                onChange={handleFilterChange}
              />
            </InputGroup>
          </Form>
        </Col>
      </Row>
      {/* Rest of the code displaying requests remains the same */}
    </Container>
  );
}

export default ViewDonationRequests;
