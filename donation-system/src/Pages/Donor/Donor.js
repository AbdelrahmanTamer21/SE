import React, { useContext } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import { SideBarContext } from '../../Components/SideBarContext';
import { Outlet } from 'react-router-dom';

const DonorPage = () => {

    const { isOpen } = useContext(SideBarContext);

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

export default DonorPage;