import React from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import OrganizationData from '../OrganizationData';
import './Info.css';
import { Nav, Row ,Col} from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";

export function HomeTab() {
    const { org_id } = useParams();

    const Organization = OrganizationData.find(Organization => Organization.org_id === Number(org_id)) ;

    return (
        <div>
            <h1>Organization Information</h1>
            <p>Organization Name: {Organization?.organizationName}</p>
            <p>Type: {Organization?.orgType}</p>
            <p>Email: {Organization?.organizationEmail}</p>
        </div>
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

function OrganizationInfo() {
    const { org_id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState("");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/Admin/OrganizationInfo/${org_id}/${tab}`);
    }

    return (
        <Row className='tab-content m-auto pt-4'>
            <div className='col-auto'>
                <IoMdArrowRoundBack className='backIcon' onClick={() =>navigate('/Admin/Organizations') }/>

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

export default OrganizationInfo;