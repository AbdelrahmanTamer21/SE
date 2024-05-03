import React from 'react';
import { Container, Row, Col, Card, CardBody} from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../Components/UserContext';

const ProfileCard = () => {
        const { username } = useContext(UserContext);// rest of the code...
    
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col lg="6" mb="4" mb-lg="0">
            <Card className="mb-3" style={{ borderRadius: '.5rem' }}>
              <Row className="g-0">
                <Col md="4" className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src="https://i.pinimg.com/564x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg" alt="Avatar" className="img-fluid my-5" style={{ width: '80px',borderRadius: '50%' }} />
                  <h5 style ={{color: 'black'}}> {username}  </h5>
                  <p style ={{color: 'black'}} style ={{color: 'black'}}>Web Designer</p>
                  <i className="far fa-edit mb-5" />
                </Col>
                <Col md="8">
                  <CardBody className="p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col xs="6" mb="3">
                        <h6>Email</h6>
                        <p className="text-muted">info@example.com</p>
                      </Col>
                      <Col xs="6" mb="3">
                        <h6>Phone</h6>
                        <p className="text-muted">123 456 789</p>
                      </Col>
                    </Row>
                    <h6>Projects</h6>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col xs="6" mb="3">
                        <h6>Recent</h6>
                        <p className="text-muted">Lorem ipsum</p>
                      </Col>
                      <Col xs="6" mb="3">
                        <h6>Most Viewed</h6>
                        <p className="text-muted">Dolor sit amet</p>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                      <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                      <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfileCard;