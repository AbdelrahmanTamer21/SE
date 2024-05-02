import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import organizationImage from './organization.png';
import donorImage from './donorr.jpg';

function RegistrationPage() {
  const navigate = useNavigate();

  const handleOrganizationClick = () => {
    navigate('./Pages/Organization/OrganizationRegistration');
  };

  const handleDonorClick = () => {
    navigate('./Pages/Donor/Registeraion');
  };

  return (
    <Container>
      <h1 className="text-center my-5">Register</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ width: '20rem', border: '2px solid #000', borderRadius: '10px' }}>
            <Card.Img variant="top" src={organizationImage} />
            <Card.Body>
              <Card.Title>Register as Organization</Card.Title>
              <Card.Text>
                Register as an organization to post donation requests.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleOrganizationClick}>Register</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: '20rem', border: '2px solid #000', borderRadius: '10px' }}>
            <Card.Img variant="top" src={donorImage} />
            <Card.Body>
              <Card.Title>Register as Donor</Card.Title>
              <Card.Text>
                Register as a donor to donate items to organizations.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleDonorClick}>Register</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationPage;
