import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { RiLockPasswordLine, RiGovernmentFill } from "react-icons/ri";
import { MdOutlineMail, MdErrorOutline } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaHome, FaCity, FaRegUser, FaKey } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import LoginData from '../LoginData';
import DonorsData from '../DonorsData';



function DonorRegistration() {

  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [government, setGovernment] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [usernameMatch, setUsernameMatch] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contact':
        setContact(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'area':
        setArea(value);
        break;
      case 'government':
        setGovernment(value);
        break;
      case 'username':
        setUsername(value);
        setUsernameMatch(LoginData.some(user => user.username === value));
        break;
      case 'password':
        setPassword(value);
        setPasswordsMatch(value === repeatPassword);
        break;
      case 'repeatPassword':
        setRepeatPassword(value);
        setPasswordsMatch(password === value);
        break;
      default:
        break;
    }
  }

  function getRandomLocation() {
    const minLat = 30.0; // Minimum latitude value
    const maxLat = 31.0; // Maximum latitude value
    const minLng = 30.0; // Minimum longitude value
    const maxLng = 31.0; // Maximum longitude value

    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;

    return { lat, lng };
}

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false || !passwordsMatch || usernameMatch) {
      e.preventDefault();
      e.stopPropagation();
    } else if (passwordsMatch && !usernameMatch) {
      const maxKey = DonorsData.reduce((max, donor) => Math.max(max, donor.key), 0) + 1;
      const maxDonorID = DonorsData.reduce((max, donor) => Math.max(max, donor.donor_id), 0) + 1;
      const loc = getRandomLocation();
      let newUser = {
        donor_id: maxDonorID,
        first_name: first_name,
        last_name: last_name,
        email: email,
        contact: contact,
        address: address,
        area: area,
        government: government,
        username: username,
        password: password,
        volunteerRole: undefined,
        don_Type: "Donor",
        type: "Donor",
        status: "pending",
        image: undefined,
        location: loc
      }
      LoginData.push(newUser);
      setValidated(true);
      navigate(`/Volunteer/${username}`);
    }
    // const pdfBlob = new Blob([document], { type: 'application/pdf' });
    // const pdfUrl = URL.createObjectURL(pdfBlob);
    // window.open(pdfUrl);
  }

  return (
    <Container fluid>
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <Row>
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Donor Registeration</p>
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <IoIosPerson className="me-3" size='24' />
                      <Form.Control type='text' placeholder='First Name' className='w-100' name='first_name' onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <IoIosPerson className="me-3" size='24' />
                      <Form.Control type='text' placeholder='Last Name' name='last_name' onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                </Row>
                <Row style={{ width: '84%' }}>
                  <div className={usernameMatch ? 'mb-2' : 'mb-4'}>
                    <div className="d-flex flex-row align-items-center">
                      <FaRegUser className="me-3" size='24' />
                      <Form.Control type='text' placeholder='Username' name='username' onChange={(e) => handleChange(e)} required />
                    </div>
                    {usernameMatch &&
                      <Row className='justify-content-center align-items-center mt-2'>
                        <MdErrorOutline className='w-auto text-danger p-0' size='20' />
                        <p className='text-danger w-auto m-0'>Username Alreday exists</p>
                      </Row>
                    }
                  </div>
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MdOutlineMail className="me-3" size='24' />
                      <Form.Control type='email' placeholder='E-mail' name='email' onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <FaPhone className="me-3" size='24' />
                      <Form.Control type='tel' placeholder='Contact Number' name='contact' pattern="[0]{1}[1]{1}[0-2]{1}[0-9]{8}" onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                </Row>
                <Row style={{ width: '84%' }}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <FaHome className="me-3" size='24' />
                    <Form.Control type='text' placeholder='Address' name='address' onChange={(e) => handleChange(e)} required />
                  </div>
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <FaCity className="me-3" size='24' />
                      <Form.Control type='text' placeholder='Area' name='area' onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <RiGovernmentFill className="me-3" size='24' />
                      <Form.Control type='text' placeholder='Government' name='government' onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <RiLockPasswordLine className="me-3" size='24' />
                      <Form.Control type='password' placeholder='Password' name='password' onChange={(e) => handleChange(e)} required />
                    </div>
                  </Col>
                  <Col>
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
                  </Col>
                </Row>
                <Row>
                  <Button variant='main-inverse' className='mb-4' size='lg' type='sumbit'>Register</Button>
                </Row>
              </Col>
              <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <Card.Img src='https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.jpg?s=612x612&w=0&k=20&c=9AL8Uj9TTtrbHpM78kMp9fqjT_8EqpEekjdixeKUzDw=' fluid />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DonorRegistration;