import { Container, Button, Card, Row, Col } from "react-bootstrap";
import LoginData from "../LoginData";
import "./requests.css"
import Orphan from '../Orphange.jpg';
import school from '../School.png';
import { BiCheck } from "react-icons/bi";
import { BsX } from "react-icons/bs";

function Requests() {

    const handleAccept = (org) => {
        // Add logic to accept the organization
    }

    const handleReject = (org) => {
        // Add logic to reject the organization
    }
    const orgs = LoginData.filter((org) => org.status === "pending");
    console.log(orgs);

    return (
        <Container>
            <h1>Requests</h1>
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
                                <p>{org.pdfPath}</p>
                                <Button className="btn-success m-3" style={{ borderRadius: '50%', width: '3rem', height: '3rem'}}  onClick={() => handleAccept(org)}>
                                    <BiCheck size={25}/>
                                </Button>
                                <Button className="btn-danger" style={{ borderRadius: '50%', width: '3rem', height: '3rem'}} onClick={() => handleReject(org)}>
                                    <BsX size={25}/>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Requests;