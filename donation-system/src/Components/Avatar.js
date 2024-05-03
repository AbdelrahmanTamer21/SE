import React from "react";
import { Button, Dropdown, Image } from "react-bootstrap";
import "./avatar.css";
import {UserContext} from './UserContext';
import {useContext, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Avatar() {
    const { isLoggedIn, userRole, updateUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        updateUser(null,false);
        navigate("/");
    }
    useEffect(() => {
        if (!isLoggedIn) {
            updateUser(null, false);
        }
    }, [isLoggedIn, updateUser]);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" style={{ backgroundColor: '#D3D3D3' }} id="avatar-dropdown" className="">
                <Image src="https://i.pinimg.com/564x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg" roundedCircle width="30" height="30" />
                <i className="dropdown-icon fas fa-caret-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to={`/${userRole}/Profile`}>Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <Button variant="danger" onClick={handleLogout} className="w-100" >Logout</Button>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Avatar;