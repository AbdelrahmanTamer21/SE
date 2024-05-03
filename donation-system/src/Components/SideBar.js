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
        <Nav.Link onClick={()=>navigate(`/home`)} className="nav-link" style={{ color: '#000000' }}>Home</Nav.Link>
        <Nav.Link eventKey="link-1" onClick={()=>navigate(`/${userRole}`)} className="nav-link" style={{ color: '#000000' }} >Dashboard</Nav.Link>
        <Nav.Link eventKey="link-2" className="nav-link" style={{ color: '#000000' }} >Profile</Nav.Link>
        <Nav.Link eventKey="link-3" className="nav-link" style={{ color: '#000000' }} >Settings</Nav.Link>
      </Nav>
    </>
  );
};

export default Sidebar;