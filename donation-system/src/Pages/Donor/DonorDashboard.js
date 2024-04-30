import React, { useState, useEffect } from 'react';
// Import Bootstrap components
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function DonorDashboard() {
  const [donorData, setDonorData] = useState({
    name: 'Hassan Khaled',
    email: 'hassankhaledxx@gmail.com',
    phone: '+201205022226',
    address: 'Tagamoa 1, Banafseg 3, Villa 175', // Example address
  }); // Stores donor information with example data

  // Replace with your actual API call to fetch donor data
  // useEffect(() => {
  //   const fetchDonorData = async () => {
  //     const response = await fetch('/api/donors/me'); // Replace with your API endpoint
  //     const data = await response.json();
  //     setDonorData(data);
  //   };
  //   fetchDonorData();
  // }, []);

  return (
    <Container fluid className="donor-dashboard">
      <Row>
        <Col>
          <Card className="text-black" style={{ borderRadius: '25px' }}>
            <Card.Header className="d-flex justify-content-center align-items-center">
              <h2 className="m-0">Donor Dashboard</h2>
            </Card.Header>
            <Card.Body className="donor-details">
              <p>
                <span className="fw-bold">Name:</span> {donorData.name}
              </p>
              <p>
                <span className="fw-bold">Email:</span> {donorData.email}
              </p>
              <p>
                <span className="fw-bold">Phone Number:</span> {donorData.phone}
              </p>
              <p>
                <span className="fw-bold">Address:</span> {donorData.address}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Example of customizing font size and spacing (optional): */}
      <style jsx>{`
        .custom-title {
          font-size: 1.5rem; /* Adjust font size as desired */
        }
        .donor-details p {
          margin-bottom: 10px; /* Add spacing between details */
        }
      `}</style>
    </Container>
  );
}

export default DonorDashboard;
