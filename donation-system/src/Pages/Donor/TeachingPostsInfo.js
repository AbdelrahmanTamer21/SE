import React, { useState, useRef } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import "./Info.css";
import TeachingPostsData from '../TeachingPostsData'; // Corrected import
import { Nav, Row, Col, Card, Container, Image , Button } from 'react-bootstrap';
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
    const post = TeachingPostsData.find(post => post.id === Number(id)); // Renamed TeachingPosts to TeachingPostsData

    const [isMapOpen, setIsMapOpen] = useState(false);
    const containerStyle = {
        width: '70%',
        height: '300px',
        borderRadius: '15px'
    };

    function handleMap() {
        setIsMapOpen(!isMapOpen);
    }

    const mapRef = useRef(null);

    // Create custom marker icon
    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [22, 32], // Adjust the size of your marker icon
    });
    const goBack = () => {
        navigate(-1);
      }

    return (
        <Card>
            <h1 className='mt-2'>Teaching Post Information</h1>
            <Container className='text-start ms-3'  style={{ paddingBottom: '20px' }}>
                <Row className='mt-4'>
                    <Col>
                        <p>Number of Students: {post ? post.Number_of_students : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Subject: {post ? post.Subject : 'N/A'}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col md="auto">
                        <p className='mt-1'>Address: {post ? post.address : 'N/A'}</p>
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
                    {post && post.location && isMapOpen && (
                        <MapContainer center={post.location} zoom={13} style={containerStyle} ref={mapRef}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={post.location} icon={customMarkerIcon}>
                                <Popup>
                                    Donor location
                                </Popup>
                            </Marker>
                        </MapContainer>
                    )}
                </Row>
                    <div>
                        <Button variant="main-inverse" className='w-25' onClick={goBack}>Back</Button>
                        <Button variant="main-inverse" className="w-25 ms-2" >FullFill</Button>
                    </div>
            </Container>
        </Card>
    );
}

function TeachingPostsInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = React.useState("");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/Donor/TeachingPostsInfo/${id}/${tab}`);
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

export default TeachingPostsInfo;