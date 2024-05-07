import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Doctor from './Doctor.png';
import donorImage from './donorr.jpg';
import Teacher from '../Teacher.png'

function VolunteerRoleSelection() {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate('/Doctor');
  };

  const handleTeacherClick = () => {
    navigate('/Teacher');
  };

  return (
    <Container>
      <h1 className="text-center my-5">Role Selection</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <Card className='rounded-4' style={{ width: '20rem', border: '2px solid #000' }}>
            <Card.Img variant="top" src={Doctor} style={{height: '20rem'}}/>
            <Card.Body>
              <Card.Title>Register as Doctor</Card.Title>
              <Card.Text>
                Register as an organization to post donation requests.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleDoctorClick} >Select</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <Card className='rounded-4' style={{ width: '20rem', border: '2px solid #000' }}>
            <Card.Img variant="top" className='rounded-4 ' src={Teacher} />
            <Card.Body>
              <Card.Title>Register as Teacher</Card.Title>
              <Card.Text>
                Register as a donor to donate items to organizations.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" onClick={handleTeacherClick} >Select</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <Card className='rounded-4' style={{ width: '20rem', border: '2px solid #000' }}>
            <Card.Img variant="top" className='rounded-4' src={donorImage} style={{height: '20rem'}} />
            <Card.Body>
              <Card.Title>Just a Donor</Card.Title>
              <Card.Text>
                Register as a donor to donate items to organizations.
              </Card.Text>
              <div className="text-center">
                <Button variant="success" >Select</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default VolunteerRoleSelection;