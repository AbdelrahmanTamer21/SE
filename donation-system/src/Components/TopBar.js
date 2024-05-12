import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import { SideBarContext } from './SideBarContext';
import "./Login.css" 
import { SlMenu } from "react-icons/sl";


function TopBar() {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login");
  }
  const handlehome = () =>{
    navigate("Home");
  }
  const handleRegister = () =>{
    navigate("RegistrationType");
  }
  const goBack = () => {
    navigate(-1);
}

  const { isOpen, toggleSidebar } = useContext(SideBarContext);

  return (
    <Navbar expand="lg" className="navbar sticky-top">
      {isLoggedIn === true ? (
        <button onClick={toggleSidebar} className={`sidebar-toggle ${isOpen ? 'open' : ''} ms-3`}>
          <SlMenu className='sidebar-toggle-icon' />
        </button>
      ) : null}
      <Container>
        <Navbar.Brand href="/" >Donation System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {isLoggedIn === true ? (
              <> <Nav.Link style={{ transition: 'font-size 0.2s' }} className="btn ms-2" onMouseEnter={e => e.target.style.fontSize = '1.2em'} onMouseLeave={e => e.target.style.fontSize = '1em'} onClick={goBack}>Back</Nav.Link>
              </>
            ) : null}
          </Nav>
          {isLoggedIn === true ? (
            <Avatar />
          ) : <Nav>
            <Button variant="" className="btn-main btnLogIn" onClick={handleLogin}>Login</Button>
            <Button variant="" className="btn-main btnLogIn ms-2" onClick={handleRegister}>Register</Button>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;