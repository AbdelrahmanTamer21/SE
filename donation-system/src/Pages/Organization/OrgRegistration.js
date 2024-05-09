import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { PiWarehouse } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail, MdErrorOutline } from "react-icons/md";
import { FaKey, FaRegUser } from "react-icons/fa";
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginData from '../LoginData';

function OrganizationRegistration() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [organizationEmail, setOrganizationEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [document, setDocument] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'organizationName':
        setOrganizationName(value);
        break;
      case 'organizationEmail':
        setOrganizationEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        setPasswordsMatch(value === repeatPassword);
        break;
      case 'repeatPassword':
        setRepeatPassword(value);
        setPasswordsMatch(password === value);
        break;
      case 'document':
        setDocument(e.target.files[0]);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else if (passwordsMatch) {
      let newUser = {
        organizationName: organizationName,
        organizationEmail: organizationEmail,
        username: username,
        password: password,
        type: "Organization",
        orgType: form[5].value,
        pdf: document,
        status: "pending",
        image: undefined
      }
      console.log(newUser);
      LoginData.push(newUser);
      setValidated(true);
      navigate('/Login');
    }
    // const pdfBlob = new Blob([document], { type: 'application/pdf' });
    // const pdfUrl = URL.createObjectURL(pdfBlob);
    // window.open(pdfUrl);
    // console.log(LoginData);
  }

  return (
    <Container fluid="true">
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col className='d-flex flex-column align-items-center'>
                <Row>
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register your Organization</p>
                </Row>
                <Row className='ms-2 me-2'>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <PiWarehouse className="me-3" size='24' />
                    <Form.Control type='text' placeholder='Organization Name' className='w-100' name='organizationName' onChange={(e) => handleChange(e)} required />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MdOutlineMail className="me-3" size='24' />
                    <Form.Control type='email' placeholder='Organization Email' name='organizationEmail' onChange={(e) => handleChange(e)} required />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <FaRegUser className="me-3" size='24' />
                    <Form.Control type='text' placeholder='Username' name='username' onChange={(e) => handleChange(e)} required />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <RiLockPasswordLine className="me-3" size='24' />
                    <Form.Control type='password' placeholder='Password' name='password' onChange={(e) => handleChange(e)} required />
                  </div>
                  <div className={!passwordsMatch ? "mb-2" : "mb-4"}>
                    <div className="d-flex align-items-center">
                      <FaKey className="me-3" size='22' />
                      <Form.Control type='password' placeholder='Repeat password' name='repeatPassword' onChange={(e) => handleChange(e)} required />
                    </div>
                    {!passwordsMatch &&
                      <Row className='justify-content-center align-items-center mt-2'>
                        <MdErrorOutline className='w-auto text-danger p-0' size='20' />
                        <p className='text-danger w-auto m-0'>Passwords do not match</p>
                      </Row>
                    }
                  </div>
                </Row>
                <Row>
                  <Form.Group className="mb-4">
                    <Form.Label>Organization Type</Form.Label>
                    <Form.Select aria-label="Organization Type" required>
                      <option value='Hospital'>Hospital</option>
                      <option value='Orphanage'>Orphanage</option>
                      <option value='School'>School</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-4">
                    <Form.Label>Document Upload for Organization Verification</Form.Label>
                    <Form.Control type="file" name='document' onChange={(e) => handleChange(e)} required />
                  </Form.Group>
                </Row>
                <Row>
                  <div className='mb-4'>
                    <Checkbox type='checkbox' id='flexCheckDefault' >Subscribe to our newsletter</Checkbox>
                  </div>
                </Row>
                <Row className='w-75 ms-1'>
                  <Button variant='main-inverse' className='mb-4' size='lg' type='submit'>Register</Button>
                </Row>
              </Col>
              <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <Card.Img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrganizationRegistration;
