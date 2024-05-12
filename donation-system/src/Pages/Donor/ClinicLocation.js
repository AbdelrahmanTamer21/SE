import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import Doctor from '../Doctor.png';
import LoginData from '../LoginData';
import { useNavigate, useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon from '../marker.png'; // Import your marker icon
import L from 'leaflet';

function ClinicLocation() {
  const navigate = useNavigate();
  const { username } = useParams();

  const [markerPosition, setMarkerPosition] = useState(null);
  const [document, setDocument] = useState(null);
  const mapRef = useRef(null);

  // Create custom marker icon
  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [ 22, 32 ], // Adjust the size of your marker icon
  });

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

  const handleDocument = (e) => {
    setDocument(e.target.files[0]);
  };
  function handleSubmit() {
    LoginData.forEach((user) => user.username === username ? user.don_Type = 'Doctor' : null)
    LoginData.forEach((user) => user.username === username ? user.pdf = document : null)
    navigate("/Login")
  }
  return (
    <Container fluid>
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <Form onSubmit={handleSubmit}>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Doctor </p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FaHome className="me-3" size='24' />
                  <Form.Control type='text' placeholder='Clinic Address' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FaCity className="me-3" size='24' />
                  <Form.Control type='text' placeholder='Clinic Area' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <RiGovernmentFill className="me-3" size='24' />
                  <Form.Control type='text' placeholder='Clinic Government' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FaUserDoctor className="me-3" size='24' />
                  <Form.Control type='text' placeholder='Speciality' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MdEventAvailable className="me-3" size='24' />
                  <Form.Control type='number' min='1' max='100' placeholder='Pro-bono cases' required />
                </div>
                <Form.Group className="mb-4">
                    <Form.Label>Document Upload for Doctor </Form.Label>
                    <Form.Control type="file" name='document' onChange={handleDocument}  required />
                  </Form.Group>
                <Button variant='main-inverse' type='submit' className='mb-4' size='lg'>Submit</Button>
              </Form>
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
                    <Button variant='main-inverse' onClick={handleSetLocation} ><FaMapMarkerAlt />  Set Location of your Clinic </Button>
                  </Row>
                </div>
              </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
} export default ClinicLocation