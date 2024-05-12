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
  const [subjects, setSubjects] = useState([]); // Array to store selected subjects
  const [numClasses, setNumClasses] = useState(0); // Number of pro-bono classes
  const [numStudents, setNumStudents] = useState(0); // Number of pro-bono students

  const handleSubjectChange = (event) => {
    const isChecked = event.target.checked;
    const subject = event.target.value;

    if (isChecked) {
      setSubjects([...subjects, subject]);
    } else {
      setSubjects(subjects.filter((s) => s !== subject));
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'numClasses') {
      setNumClasses(parseInt(value));
    } else if (name === 'numStudents') {
      setNumStudents(parseInt(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginData.forEach((user) => user.username === username ? user.don_Type = 'Teacher' : null)

    // Implement logic to submit selection data (e.g., send to server)
    alert(`Thank you for your willingness to help! You selected: 
      Subjects: ${subjects.join(', ')}
      Number of Pro-bono Classes: ${numClasses}
      Number of Pro-bono Students: ${numStudents}`);
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
                  <Form.Control type='text' placeholder='Subject(s) to Teach' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <PiStudentFill className="me-3" size='24' />
                  <Form.Control type='number' placeholder='Pro-bono Sessions' required />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <RiGitRepositoryPrivateFill className="me-3" size='24' />
                  <Form.Control type='number' placeholder='Private Pro-bono Sessions' required />
                </div>
                <Form.Group className="mb-4">
                    <Form.Label>Document Upload for Organization Verification</Form.Label>
                    <Form.Control type="file" name='document'  required />
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