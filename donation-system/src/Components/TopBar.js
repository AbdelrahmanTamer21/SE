import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';

function TopBar() {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login");
  }

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Donation System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn===true ? (
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
          {isLoggedIn===true ? (
            <Avatar />
          ) : <Nav>
            <Button variant="" className="btn-brown" onClick={handleLogin}>Login</Button>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;