import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import fulfilledPostsImage from '../FullPost.jpg';
import donationPostsImage from '../Create.png';
import orgViewDonationRequestsImage from '../ViewPost.png';

function OrganizationDashboard() {
  const navigate = useNavigate();

  const handleFulfilledPostsClick = () => {
    navigate('/FulfilledPosts');
  };

  const handleDonationPostsClick = () => {
    navigate('/DonationPosts');
  };

  const handleOrgViewDonationRequestsClick = () => {
    navigate('/OrgViewRequests');
  };

  return (
    <Container>
      <h1 className="mt-5 mb-4 text-center">Organization Dashboard</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ width: '20rem', borderWidth: '4px', borderStyle: 'solid', borderColor: '#000', borderRadius: '10px' }}>
            <Card.Img variant="top" src={fulfilledPostsImage} />
            <Card.Body>
              <Card.Title>Fulfilled Posts</Card.Title>
              <Card.Text>
                View posts that have been fulfilled.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleFulfilledPostsClick}>View</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: '20rem', borderWidth: '4px', borderStyle: 'solid', borderColor: '#000', borderRadius: '10px' }}>
            <Card.Img variant="top" src={donationPostsImage} />
            <Card.Body>
              <Card.Title>Donation Posts</Card.Title>
              <Card.Text>
                View and manage donation posts.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleDonationPostsClick}>View</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: '20rem', borderWidth: '4px', borderStyle: 'solid', borderColor: '#000', borderRadius: '10px' }}>
            <Card.Img variant="top" src={orgViewDonationRequestsImage} />
            <Card.Body>
              <Card.Title>View Donation Requests</Card.Title>
              <Card.Text>
                View donation requests from donors.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleOrgViewDonationRequestsClick}>View</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrganizationDashboard;
