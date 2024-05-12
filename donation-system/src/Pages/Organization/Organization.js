import React, { useContext } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import { SideBarContext } from '../../Components/SideBarContext';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../Components/UserContext';
import { Navigate } from 'react-router-dom';

const OrganizationPage = () => {

    const { isOpen } = useContext(SideBarContext);
    const { isLoggedIn } = useContext(UserContext);
    if(isLoggedIn === false){
        return <Navigate to='/Login' />
    }

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
                    </Col>
                    }
            </Row>
        </Container>
    );
};

export default OrganizationPage;