import React, { useRef, useContext } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import { SideBarContext } from '../../Components/SideBarContext';
import { Outlet, Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminProfile from './AdminProfile';

const MainPage = () => {

    const { isOpen, toggleSidebar } = useContext(SideBarContext);

    return (
        <Container fluid className="p-0 h-100">
            <Row className='w-100'>
                {isOpen === true ?
                    <>
                        <Col xs={2}>
                            <SideBar />
                        </Col>
                        <Col>
                            <Outlet />
                        </Col>
                    </>
                    : 
                    <Col>
                       <Outlet />
                    </Col>}
            </Row>
        </Container>
    );
};

export default MainPage;