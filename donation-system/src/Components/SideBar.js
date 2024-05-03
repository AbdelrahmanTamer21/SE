import React, { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { SideBarContext } from './SideBarContext';
import { UserContext } from './UserContext';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const { userRole } = useContext(UserContext);

  const { isOpen, toggleSidebar } = useContext(SideBarContext);

  return (
    <>

      <Nav defaultActiveKey="/home" className={`flex-column sidebar ${isOpen ? 'open' : 'closed'}`} style={{ backgroundColor: '#FFFFFF' }}>
        
        
        <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}`)} className="nav-link" style={{ color: '#000000' }} >Dashboard</Nav.Link>

        {userRole === 'Admin'?(      
          <>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/Donors`)} className="nav-link" style={{ color: '#000000' }} >Donors</Nav.Link>
            <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}/Organizations`)} className="nav-link" style={{ color: '#000000' }} >Organizations</Nav.Link>
            </>
        ):null}
        <Nav.Link eventKey="link-2" onClick={()=>navigate(`/${userRole}/DonationRequests`)} className="nav-link" style={{ color: '#000000' }} >Donation Requests</Nav.Link>
        <Nav.Link eventKey="link-3" className="nav-link" style={{ color: '#000000' }} >Profile</Nav.Link>
        <Nav.Link eventKey="link-4" className="nav-link" style={{ color: '#000000' }} >Settings</Nav.Link>
      </Nav>
    </>
  );
};

export default Sidebar;