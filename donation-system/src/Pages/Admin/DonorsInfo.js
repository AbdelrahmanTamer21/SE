import React, { useState, useCallback} from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import DonorsData from "../DonorsData"
import { Nav, Row, Col, Card, Container, Image } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export function HomeTab() {
    const { donor_id } = useParams();

    const donor = DonorsData.find(donor => donor.donor_id === Number(donor_id));

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC3w9cUTNQfgH2qqCdxC2DC1rjq78Mt6a4"
    })

    const [map, setMap] = useState(null)
    const [isMapOpen, setIsMapOpen] = useState(false);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const containerStyle = {
        width: '70%',
        height: '300px',
        borderRadius: '15px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    function handleMap() {
        setIsMapOpen(!isMapOpen);
    }


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
                    {isLoaded ? (
                        <GoogleMap
                            className={isMapOpen ? 'map' : 'd-none'}
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        />
                    ) : (
                        <>Loading...</>
                    )}
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