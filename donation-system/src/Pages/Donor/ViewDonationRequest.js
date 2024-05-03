import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import donationData from '../donationData'; 

function ViewDonationRequests() {
  console.log(donationData);
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center'>
        <Col lg='9' className='my-5'>
          <h1 className="text-white mb-4 text-center">View Donation Requests</h1>
          <Row xs={1} md={2} lg={3} className="g-4">
            {donationData.map((post) => (
              <Col key={post.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{post.itemName}</Card.Title>
                    <Card.Text>
                      <strong>Category:</strong> {post.category}<br />
                      <strong>Condition:</strong> {post.condition}<br />
                      <strong>Description:</strong> {post.description}<br />
                    </Card.Text>
                    <Button variant="primary">Acknowledge</Button>
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

export default ViewDonationRequests;
