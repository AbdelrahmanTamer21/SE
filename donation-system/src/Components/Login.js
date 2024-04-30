import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, FormLabel, FormCheck } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
function Login() {
    const navigate = useNavigate();
    function handleLogin(){
      navigate("/Donor")
    }
  return (
    <section className="vh-100">
      <Container className="py-5 h-100">
    <Card style={{padding:'20px'}} className='text-black m-5' borderRadius='25px'>
      <Card.Body style ={{padding: '20px'}}>

        <Row className="d-flex align-items-center justify-content-center h-100">
                    
        <Col md={8} lg={7} xl={6}>
    <img 
      src="https://img.freepik.com/premium-vector/print_561236-152.jpg?w=740" 
      alt="Phone image" 
      className="img-fluid" 
      style={{ width: '50%', borderRadius: '15px'}}
    />
</Col>
<Col md={7} lg={5} xl={5} offsetXL={1}>
            <Form>
              {/* Username input */}
                <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username" />
        </Form.Group>
     

              {/* Password input */}
              <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <FormCheck>
                  <FormCheck.Input type="checkbox" value="" id="form1Example3" defaultChecked />
                  <FormCheck.Label for="form1Example3">Remember me</FormCheck.Label>
                </FormCheck>
                <a href="#!">Forgot password?</a>
              </div>

              {/* Submit button */}
              <Button type="submit" variant="primary" onClick={handleLogin} size="lg" block>Sign in</Button>
              <div> 
              <Link to="/Registeration">If you're not a user? Register</Link>      
              </div>      
               </Form>
          </Col>
        </Row>
        </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default Login;