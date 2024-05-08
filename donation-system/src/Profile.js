import React, { useContext } from 'react';
import { Container, Row, Col, Card, CardBody} from 'react-bootstrap';
import { UserContext } from './Components/UserContext';
import LoginData from './Pages/LoginData';

const ProfileCard = () => {
  const { username } = useContext(UserContext);
  const user = LoginData.find((user) => user.username === username);
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col lg="6" mb="4" mb-lg="0">
            <Card className="mb-3 rounded-3">
              <Row className="g-0">
                <Col md="4" className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src={user.image === undefined?"https://i.pinimg.com/564x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg":URL.createObjectURL(user.image)} alt="Avatar" className="img-fluid my-5 rounded-circle" style={{ width: '80px'}} />
                  <h5 style ={{color: 'black'}}> {user.first_name + " " + user.last_name} </h5>
                  <p style ={{color: 'black'}}>{user.type}</p>
                  <i className="far fa-edit mb-5" />
                </Col>
                <Col md="8">
                  <CardBody className="p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col xs="6" mb="3">
                        <h6>Email</h6>
                        <p className="text-muted">{user.email}</p>
                      </Col>
                      <Col xs="6" mb="3">
                        <h6>Phone</h6>
                        <p className="text-muted">{user.phone}</p>
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