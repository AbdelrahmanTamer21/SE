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

import { FaChalkboardTeacher } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import Teacher from '../Teacher.png'

function SubjectClassSelection() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [otherSubject, setOtherSubject] = useState('');
  const [document, setDocument] = useState(null);

  const handleCheckboxChange = (subject) => {
    const updatedSubjects = [...selectedSubjects];

    if (updatedSubjects.includes(subject)) {
      updatedSubjects.splice(updatedSubjects.indexOf(subject), 1);
    } else {
      updatedSubjects.push(subject);
    }

    setSelectedSubjects(updatedSubjects);

    // Reset the other subject value when unchecking the checkbox
    if (!updatedSubjects.includes('other')) {
      setOtherSubject('');
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherSubject(e.target.value);
  };

  const handleDocument = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginData.forEach((user) => user.username === username ? user.don_Type = 'Teacher' : null)
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Teacher </p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FaChalkboardTeacher className="me-3" size='24' />
                  <Form.Group controlId="checkboxWithTextbox">
                    <Row>
                      <Col>
                        <Form.Check
                          type="checkbox"
                          id="mathCheckbox"
                          label="Math"
                          onChange={() => handleCheckboxChange('math')}
                          checked={selectedSubjects.includes('math')}
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          type="checkbox"
                          id="englishCheckbox"
                          label="English"
                          onChange={() => handleCheckboxChange('english')}
                          checked={selectedSubjects.includes('english')}
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          type="checkbox"
                          id="scienceCheckbox"
                          label="Science"
                          onChange={() => handleCheckboxChange('science')}
                          checked={selectedSubjects.includes('science')}
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          type="checkbox"
                          id="otherCheckbox"
                          label="Other"
                          onChange={() => handleCheckboxChange('other')}
                          checked={selectedSubjects.includes('other')}
                        />
                      </Col>
                    </Row>
                    {selectedSubjects.includes('other') && (
                      <Row>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="Please specify other subject(s)"
                            value={otherSubject}
                            onChange={handleOtherInputChange}
                          />
                        </Col>
                      </Row>
                    )}
                  </Form.Group>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <PiStudentFill className="me-3" size='24' />
                  <Form.Control type='number' min='1' max='100' placeholder='Pro-bono Sessions' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <RiGitRepositoryPrivateFill className="me-3" size='24' />
                  <Form.Control type='number' min='1' max='100' placeholder='Private Pro-bono Sessions' required />
                </div>
                <Form.Group className="mb-4">
                  <Form.Label>Document Upload for Teacher </Form.Label>
                  <Form.Control type="file" name='document' onChange={handleDocument} required />
                </Form.Group>

                <Button variant='main-inverse' type='submit' className='mb-4' size='lg'>Submit</Button>
              </Form>
            </Col>
            <Col md='8' lg='5' className='order-1 order-lg-2 d-flex align-items-center'>
              <Card.Img width={100} height={450} variant="top" src={Teacher} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
} export default SubjectClassSelection