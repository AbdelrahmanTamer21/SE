import { Container, Button, Card, Row, Col } from "react-bootstrap";
import LoginData from "../LoginData";
import "./requests.css"
import Orphan from '../Orphange.jpg';
import school from '../School.png';
import { BiCheck } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import { useState } from "react";
import OrganizationData from "../OrganizationData";
import DonorsData from "../DonorsData";
import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import React from "react";
import teacher from '../Teacher.png';
import doctor from '../Doctor.png';
import donorr from '../donorr.jpg';


export function DonorsTab() {
    const [donors, setDonors] = useState(LoginData.filter((donor) => donor.type === "Donor" && donor.status === "pending"));
    const handleAccept = (donor) => {
        if (window.confirm("Are you sure you want to accept this donor")) {
        LoginData.forEach((d) => {
            if (d.username === donor.username) {
                donor.status = "approved";
                setDonors(donors.filter(donor => donor !== d));
                const currentDate = new Date();
                d.joined_date = currentDate.toISOString().split('T')[0];
                const maxId = Math.max( ...DonorsData.map(d => d.donor_id));
                d.donor_id = maxId + 1;
                DonorsData.push(donor);
                

                return;
            }
        });
    }
    }

    const handleReject = (donor) => {
        // Add logic to reject the organization
        if (window.confirm("Are you sure you want to reject this donor")) {
        LoginData.forEach((d) => {
            if (d.username === donor.username) {
                donor.status = "rejected";
                setDonors(donors.filter(donor => donor !== d));
                return;
            }
        });
    }
    }

    return (
        <div>
            <Container>

                <h1>Donors Requests</h1>
                <Row>
                    {donors.map((donor, index) => (
                        <Col md={3} key={index}>
                            <Card className="cardReq">
                                <Card.Body>
                                    {donor.image !== undefined ?

                                        <img src={donor.image} alt="donor" className="imgReq" />
                                        :
                                        donor.don_Type === "Teacher" ?
                                            <img src={teacher} alt="donor" className="imgReq" />
                                            : donor.don_Type === "Doctor" ?
                                                <img src={doctor} alt="donor" className="imgReq" />
                                                : <img src={donorr} alt="donor" className="imgReq" />


                                    }
                                    <h2>{donor.first_name + " " + donor.last_name}</h2>
                                    <p>{donor.donorEmail}</p>
                                    <p>{donor.don_Type}</p>
                                    <Button variant='main-inverse' className="w-100" onClick={() => handleViewDocument(donor)}>View Document</Button>
                                    <Button className="btn-success m-3" style={{ borderRadius: '50%', width: '3rem', height: '3rem' }} onClick={() => handleAccept(donor)}>
                                        <BiCheck size={25} />
                                    </Button>
                                    <Button className="btn-danger" style={{ borderRadius: '50%', width: '3rem', height: '3rem' }} onClick={() => handleReject(donor)}>
                                        <BsX size={25} />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export function OrganizationsTab() {
    const [orgs, setOrgs] = useState(LoginData.filter((org) => org.status === "pending" && org.type !== "Donor"));
    const handleAccept = (org) => {
        if (window.confirm("Are you sure you want to accept this organization")) {
        LoginData.forEach((o) => {
            if (o.username === org.username) {
                o.status = "approved";
                setOrgs(orgs.filter(o => o !== org));
                const currentDate = new Date();
                o.joined_date = currentDate.toISOString().split('T')[0];
                const maxId = Math.max(...OrganizationData.map(o => o.org_id));
                o.org_id = maxId + 1;
                OrganizationData.push(o);
                console.log(OrganizationData);


                return;
            }
        });
    }
    }

    const handleReject = (org) => {
        // Add logic to reject the organization
        if (window.confirm("Are you sure you want to reject this organization")) {
        LoginData.forEach((o) => {
            if (o.username === org.username) {
                o.status = "rejected";
                setOrgs(orgs.filter(o => o !== org));


                return;
            }
        });
    }
    }

    const handleViewDocument = (org) => {
        // Add logic to view the organization's document
        const pdf = new Blob([org.pdf], { type: 'application/pdf' });
        const url = URL.createObjectURL(pdf);
        window.open(url);
    }

    return (
        <Container>
            <h1>Organizations Requests</h1>
            <Row>
                {orgs.map((org, index) => (
                    <Col md={3} key={index}>
                        <Card className="cardReq">
                            <Card.Body>
                                {org.image !== undefined ?
                                    <img src={org.image} alt="organization" className="imgReq" />
                                    :
                                    org.orgType === "Hospital" ?
                                        <img src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" alt="organization" className="imgReq" />
                                        :
                                        org.orgType === "Orphanage" ?
                                            <img src={Orphan} alt="organization" className="imgReq" />
                                            : org.orgType === "School" ?
                                                <img src={school} alt="organization" className="imgReq" />
                                                : null
                                }
                                <h2>{org.organizationName}</h2>
                                <p>{org.organizationEmail}</p>
                                <p>{org.orgType}</p>
                                <Button variant="main-inverse" className="w-100" onClick={() => handleViewDocument(org)}>View Document</Button>
                                <Button className="btn-success m-3" style={{ borderRadius: '50%', width: '3rem', height: '3rem' }} onClick={() => handleAccept(org)}>
                                    <BiCheck size={25} />
                                </Button>
                                <Button className="btn-danger" style={{ borderRadius: '50%', width: '3rem', height: '3rem' }} onClick={() => handleReject(org)}>
                                    <BsX size={25} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

function Requests() {

    const [activeTab, setActiveTab] = React.useState("");
    const navigate = useNavigate();
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/Admin/Requests/${tab}`);
    }

    return (
        <>
            <div className="reqTab-links">
                <Nav variant="tabs" defaultActiveKey="/Organizations">
                    <Nav.Item>
                        <Nav.Link
                            onClick={() => handleTabClick("")}
                            className={activeTab === "" ? "Organizations" : ""}>
                            Organizations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            onClick={() => handleTabClick("Donors")}
                            className={activeTab === "Donors" ? "active" : ""}>
                            Donors
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Outlet />
            </div>
        </>
    );
}

export default Requests;