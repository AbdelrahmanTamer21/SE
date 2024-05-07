import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { SideBarContext } from './SideBarContext';
import { UserContext } from './UserContext';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const { userRole } = useContext(UserContext);

  const { isOpen } = useContext(SideBarContext);

  return (
    <>

      <Nav defaultActiveKey="/home" className={`flex-column sidebar ${isOpen ? 'open' : 'closed'}`} style={{ backgroundColor: '#FFFFFF' }}>
        
        
        <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}`)} className="nav-link">Dashboard</Nav.Link>

        {userRole === 'Admin'?(      
          <>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/Donors`)} className="nav-link">Donors</Nav.Link>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/Organizations`)} className="nav-link">Organizations</Nav.Link>
            </>
        ):null}
        {userRole === 'Donor' || userRole === 'Organization'?(
          <>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/DonationRequests`)} className="nav-link">Donation Requests</Nav.Link>
          </>
        ):null}
        {userRole === 'Donor'?(
          <>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/VolunteerSelection`)} className="nav-link">Volunteer Role Selection</Nav.Link>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/DocumentUpload`)} className="nav-link">Document Upload</Nav.Link>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/Delivery`)} className="nav-link">Delivery Details</Nav.Link>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/Organizations`)} className="nav-link">Organizations</Nav.Link>
          </>
        ):null}
        <Nav.Link eventKey="link-3" className="nav-link">Profile</Nav.Link>
        <Nav.Link eventKey="link-4" className="nav-link">Settings</Nav.Link>
      </Nav>
    </>
  );
};

export default Sidebar;