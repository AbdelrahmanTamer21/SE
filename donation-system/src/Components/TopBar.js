import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function TopBar() {
    const { isLoggedIn, userRole, updateUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        updateUser('admin', true);
        navigate("/Login");
    }
    const handleLogout = () => {
        updateUser(null, false);
    }
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Donation System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn ? (
            <><Nav.Link href="#home">Home</Nav.Link><Nav.Link href="#link">Link</Nav.Link><NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                  Another action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">
                                  Separated link
                              </NavDropdown.Item>
                          </NavDropdown></>
                ) : null}
          </Nav>
          <Nav>
            <Button variant="main" onClick={handleLogin}>Login</Button>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;