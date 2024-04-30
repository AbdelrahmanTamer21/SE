import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button onClick={toggleSidebar} className={`sidebar-toggle ${isOpen ? 'open' : ''}`}>
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbMdpEOk1eHL8V9GHwWliqKfwb4V37ZxQZlJTMxIAOBmG674h4" alt="Toggle Sidebar" className="sidebar-toggle-icon" />
    </button>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <span className={`sidebar-toggle-icon ${isOpen ? 'open' : 'closed'}`}></span>
      </button>
      <Nav defaultActiveKey="/home" className={`flex-column sidebar ${isOpen ? 'open' : 'closed'}`} style={{ backgroundColor: '#FFFFFF' }}>
        <Nav.Link href="/home" className="nav-link" style={{ color: '#495057' }} >Home</Nav.Link>
        <Nav.Link eventKey="link-1" className="nav-link" style={{ color: '#495057' }} >Dashboard</Nav.Link>
        <Nav.Link eventKey="link-2" className="nav-link" style={{ color: '#495057' }} >Profile</Nav.Link>
        <Nav.Link eventKey="link-3" className="nav-link" style={{ color: '#495057' }} >Settings</Nav.Link>
      </Nav>
    </>
  );
};

export default Sidebar;