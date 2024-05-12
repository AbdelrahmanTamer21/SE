import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

function ChangePassword() {
    return (
        <Container className="py-5 h-100">
            <Card style={{ padding: '15px' }} className='text-black m-5'>
                <Card.Body style={{ padding: '15px' }}>
                    <h1>Change Password</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your old password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your new password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your new password" />
                        </Form.Group>
                        <Button variant="main-inverse" type="submit">
                            <Link to="/Login" className="link-style">Submit</Link>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default ChangePassword;