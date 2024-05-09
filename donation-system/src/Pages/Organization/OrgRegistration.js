import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { PiWarehouse } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail, MdErrorOutline } from "react-icons/md";
import { FaKey, FaRegUser } from "react-icons/fa";
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from './marker.png'; // Import your marker icon
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import LoginData from '../LoginData';
import { FaMapMarkerAlt } from "react-icons/fa";

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
  const [markerPosition, setMarkerPosition] = useState(null);
  const mapRef = useRef(null);

  // Create custom marker icon
  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Adjust the size of your marker icon
  });

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

  function handleMapClick(e) {
    setMarkerPosition(e.latlng);
  }

  function handleSetLocation() {
    const map = mapRef.current;
    if (map) {
      const center = map.getCenter();
      setMarkerPosition(center);
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
        image: undefined,
        location: markerPosition,
      }
      console.log(newUser);
      LoginData.push(newUser);
      setValidated(true);
      navigate('/Login');
    }
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
                <div style={{ border: '2px solid black', width: '100%', height: '400px', position: 'relative' }}>
                  <MapContainer center={[30.020882, 31.526789]} zoom={13} style={{ width: '100%', height: '100%' }} onclick={handleMapClick} ref={mapRef}>
                  
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {markerPosition && (
                      <Marker position={markerPosition} icon={customMarkerIcon}>
                        <Popup>
                          Your location
                        </Popup>
                      </Marker>
                    )}
                  </MapContainer>
                  <Row className='justify-content-center' style={{ position: 'absolute', bottom: '-70px', left: '50%', transform: 'translateX(-50%)' }}>
                    <Button variant='main-inverse' onClick={handleSetLocation}><FaMapMarkerAlt /> Set Location</Button>
                  </Row>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrganizationRegistration;
