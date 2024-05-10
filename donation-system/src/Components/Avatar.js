import React from "react";
import { Button, Dropdown, Image } from "react-bootstrap";
import "./avatar.css";
import { UserContext } from './UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Avatar() {
    const { isLoggedIn, userRole, updateUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            updateUser(null, false);
            navigate("/");
        }
    }
    useEffect(() => {
        if (!isLoggedIn) {
            updateUser(null, false, null);
        }
    }, [isLoggedIn, updateUser]);

    return (
        <Dropdown>
            <Dropdown.Toggle onMouseEnter={e => e.target.style.backgroundColor='grey'} onMouseLeave={e => e.target.style.backgroundColor='#D3D3D3'}  variant="secondary" style={{ backgroundColor: '#D3D3D3' }} id="avatar-dropdown" className="">
                <Image src="https://i.pinimg.com/564x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg" roundedCircle width="30" height="30" />
                <i className="dropdown-icon fas fa-caret-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`/${userRole}/Profile`}>Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to={`/${userRole}/Settings`}>Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Notifications</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <Button variant="danger" onClick={handleLogout} className=" w-100" >Logout</Button>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Avatar;