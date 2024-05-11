import React, { useState, useRef } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import DonorsData from "../DonorsData"
import { Nav, Row, Col, Card, Container, Image } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../marker.png'; // Import your marker icon
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Info.css";

export function HomeTab() {
    const { donor_id } = useParams();

    const donor = DonorsData.find(donor => donor.donor_id === Number(donor_id));

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

    return (
        <Card>
            <h1 className='mt-2'>Donors Information</h1>
            <Container className='text-start ms-3'>
                <Row>
                    <Col md="auto">
                        <Image roundedCircle
                            src="https://i.pinimg.com/564x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg"
                            width={100} height={100}
                            alt="profile" />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <p>First Name: {donor?.first_name}</p>
                    </Col>
                    <Col>
                        <p>Last Name: {donor?.last_name}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p>Email: {donor?.email}</p>
                    </Col>
                    <Col>
                        <p>Phone Number: {donor?.phone}</p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col md="auto">
                        <p className='mt-1'>Address: {donor?.address}</p>
                    </Col>
                    <Col>
                        <Button
                            type='primary'
                            className='mapBtn'
                            icon={<AimOutlined />}
                            onClick={handleMap}>
                            Map
                        </Button>
                    </Col>
                </Row>
                <Row className={`${isMapOpen ? "map" : "d-none"} mt-2 mb-3 justify-content-center me-2`}>
                    <MapContainer center={donor.location} zoom={13} style={containerStyle} ref={mapRef}>

                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={donor.location} icon={customMarkerIcon}>
                            <Popup>
                                Donor location
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Row>
            </Container>
        </Card>
    );
}

export function DonationsTab() {
    return (
        <div>
            <h1>Donations</h1>
        </div>
    );
}

export function ContactTab() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

function DonorsInfo() {
    const navigate = useNavigate();
    const { donor_id } = useParams();
    const [activeTab, setActiveTab] = React.useState("");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/Admin/DonorsInfo/${donor_id}/${tab}`);
    }

    return (
        <Row className='tab-content m-auto pt-4'>
            <div className='col-auto'>
                <IoMdArrowRoundBack className='backIcon' onClick={() => navigate('/Admin/Donors')} />

            </div>
            <Col >
                <div>

                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleTabClick("")}
                                className={activeTab === "" ? "active" : ""}>
                                Active
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleTabClick("donations")}
                                className={activeTab === "donations" ? "active" : ""}>
                                Donations
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleTabClick("contact")}
                                className={activeTab === "contact" ? "active" : ""}>
                                Contact
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

export default DonorsInfo;