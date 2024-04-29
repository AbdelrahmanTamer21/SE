import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { PiWarehouse } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

function App() {
  return (
    <Container fluid>
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register your Organization</p>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <PiWarehouse className="me-3" size='24'/>
                <Form.Control type='text' placeholder='Organization Name' className='w-100' />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MdOutlineMail className="me-3" size='24'/>
                <Form.Control type='email' placeholder='Organization Email' />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <RiLockPasswordLine className="me-3" size='24'/>
                <Form.Control type='password' placeholder='Password' />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <FaKey className="me-3" size='24'/>
                <Form.Control type='password' placeholder='Repeat password' />
              </div>
              <div className='mb-4'>
                <Form.Check type='checkbox' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              <Button className='mb-4' size='lg'>Register</Button>
            </Col>
            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
