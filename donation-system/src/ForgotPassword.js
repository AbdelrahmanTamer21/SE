import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";


function ForgotPassword() {
    const navigate = useNavigate();
    const handleForgotPassword = () => {
        navigate("/changePassword");

    }
    return (
        <Container className="py-5 h-100">
            <Card style={{ padding: '15px' }} className='text-black m-5'>
                <Card.Body style={{ padding: '15px' }}>
                    <h1>Forgot Password</h1>
                    <Form className="mt-5">
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="mt-1">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter your E-mail address" />
                        </Form.Group>
                        <Button type="submit" variant="main-inverse" className="mt-2" onClick={handleForgotPassword}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ForgotPassword;