import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import donationData from '../donationData'; 


const BloodDonations = donationData.filter(item => item.category === 'Blood Donations');

function ViewListCloodDonations() {
  console.log(donationData);
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center'>
        <Col lg='9' className='my-5'>
          <h1 className="text-white mb-4 text-center">View Donation Requests</h1>
          <Row xs={1} md={2} lg={3} className="g-4">
            {BloodDonations.map((post) => (
              <Col key={post.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title>{post.itemName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.category}</Card.Subtitle>
                  <Card.Text>{post.description}</Card.Text>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Donate</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewListBloodDonations;