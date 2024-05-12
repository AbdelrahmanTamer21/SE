import React, { useState, useRef } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import "./Info.css";
import MedicalCases from '../medicalCasesData'; // Corrected import
import { Nav, Row, Col, Card, Container, Image, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import { AimOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../marker.png'; // Import your marker icon
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button as ButtonMap } from 'antd';


export function HomeTab() {
    const { id } = useParams();
    const navigate = useNavigate();
    const med = MedicalCases.find(med => med.id === Number(id)); // Renamed TeachingPosts to TeachingPostsData

    const [isMapOpen, setIsMapOpen] = useState(false);
    const containerStyle = {
        width: '70%',
        height: '300px',
        borderRadius: '15px'
    };

    function handleMap() {
        setIsMapOpen(!isMapOpen);
    }

    const goBack = () => {
        navigate(-1);
      }



    const FullfillPage = () => {
        navigate('/Donor/DoctorFullfill');
      }
    

    const mapRef = useRef(null);

    // Create custom marker icon
    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [22, 32], // Adjust the size of your marker icon
    });

    return (
        <Card>
            <h1 className='mt-2'>Medical Case Information</h1>
            <Container className='text-start ms-3'  style={{ paddingBottom: '20px' }}>
                <Row className='mt-4'>
                    <Col>
                        <p>Patient Name : {med ? med.patientName : 'N/A'}</p>
                    </Col>
                </Row>
                    <Col>
                        <p>Age: {med ? med.patientage : 'N/A'}</p>
                    </Col>
                
                <Row className="mt-1">
                    <Col>
                        <p>Gender: {med ? med.patientgender : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Weight: {med ? med.patientweight : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Organization: {med ? med.organizationName : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Medical Speciality: {med ? med.medicalSpecialty : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Date {med ? med.Date : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Time: {med ? med.time : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Case description: {med ? med.caseDesc : 'N/A'}</p>
                    </Col>
                </Row>
                
                <Row className="mt-1">
                    <Col md="auto">
                        <p className='mt-1'>Address: {med ? med.address : 'N/A'}</p>
                    </Col>
                    <Col>
                        <ButtonMap
                            type='primary'
                            className='mapBtn'
                            icon={<AimOutlined />}
                            onClick={handleMap}>
                            Map
                        </ButtonMap>
                    </Col>
                </Row>
                
                <Row className={`${isMapOpen ? "map" : "d-none"} mt-2 mb-3 justify-content-center me-2`}>
                    {med && med.location && isMapOpen && (
                        <MapContainer center={med.location} zoom={13} style={containerStyle} ref={mapRef}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={med.location} icon={customMarkerIcon}>
                                <Popup>
                                    Donor location
                                </Popup>
                            </Marker>
                        </MapContainer>
                    )}
                </Row>
                    <div>
                        <Button  className='w-25' variant='main-inverse'  onClick={goBack} >Back</Button>
                        <Button  className="w-25 ms-2" variant='main-inverse' onClick={FullfillPage}>Fulfill</Button>
                    </div>
            </Container>
        </Card>
    );
}

function MedicalCasesInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = React.useState("");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/Donor/MedicalCasesInfo/${id}/${tab}`);
    }

    return (
        <Row className='tab-content m-auto pt-4'>
            <Col >
                <div>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleTabClick("")}
                                className={activeTab === "" ? "active" : ""}>
                                Details
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div>
                    <Outlet />
                </div>
            </Col>
        </Row>
    );
}

export default MedicalCasesInfo;