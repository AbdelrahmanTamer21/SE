import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function DonorDashboard() {
  const [donorData, setDonorData] = useState({}); // Stores donor information with example data

  useEffect(() => {
    setDonorData(
      {
        name: 'Hassan Khaled',
        email: 'hassankhaledxx@gmail.com',
        phone: '+201205022226',
        address: 'Tagamoa 1, Banafseg 3, Villa 175', // Example address
      }
    );
  }, []);


  return (
    <><Container fluid className="donor-dashboard d-flex justify-content-center align-down-20px min-vh-100">
      <Row className="justify-content-center"> {/* Center the Row within the container */}
        <Col xs={0} md={60} lg={120}> {/* Adjust column size for responsiveness */}
          <Card className="text-black donor-card"> {/* Added custom class */}
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
    </Container>
      <Outlet></Outlet>
    </>
  );
}

export default DonorDashboard;
