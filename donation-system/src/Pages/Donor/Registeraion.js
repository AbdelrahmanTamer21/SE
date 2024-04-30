import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { PiWarehouse } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";

function Registeration() {
  return (
    <Container fluid>
    <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
      <Card.Body>
        <Row>
          <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Donor Registeration</p>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <IoIosPerson className="me-3" size='24'/>
              <Form.Control type='text' placeholder='First Name' className='w-100' required />
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <IoIosPerson className="me-3" size='24'/>
              <Form.Control type='text' placeholder='Last Name' required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MdOutlineMail className="me-3" size='24'/>
              <Form.Control type='email' placeholder='E-mail' required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FaPhone className="me-3" size='24'/>
              <Form.Control type='tel' placeholder='Contact Number' pattern="[0]{1}[1]{1}[0-2]{1}[0-9]{8}" required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FaHome className="me-3" size='24'/>
              <Form.Control type='text' placeholder='Address' required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FaCity className="me-3" size='24'/>
              <Form.Control type='text' placeholder='Area' required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <RiGovernmentFill className="me-3" size='24'/>
              <Form.Control type='text' placeholder='Government' required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <RiLockPasswordLine className="me-3" size='24'/>
              <Form.Control type='password' placeholder='Password' required/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <FaKey className="me-3" size='24'/>
              <Form.Control type='password' placeholder='Confirm Password' required/>
            </div>
           
            <Button className='mb-4' size='lg'>Register</Button>
          </Col>
          <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <Card.Img src='https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.jpg?s=612x612&w=0&k=20&c=9AL8Uj9TTtrbHpM78kMp9fqjT_8EqpEekjdixeKUzDw=' fluid />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default Registeration;