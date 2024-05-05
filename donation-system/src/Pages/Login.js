import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormCheck } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { UserContext } from '../Components/UserContext';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import LoginData from './LoginData';

function Login() {
  const navigate = useNavigate(); 
  const { updateUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (event) => {
    event.preventDefault();
    const user = LoginData.find((user) => user.username === username && user.password === password);
    if(user){
      updateUser(user.type,true,username);
      switch(user.type){
        case "Admin":
          navigate("/Admin");
          break;
        case "Donor":
          navigate("/Donor");
          break;
        case "Organization":
          navigate("/Organization");
          break;
        default:
          navigate("/Login");
      }
    }
  }
  
  return (
    <section className="h-100">
      <Container className="py-5 h-100">
        <Card style={{ padding: '20px' }} className='text-black m-5'>
          <Card.Body style={{ padding: '20px' }}>

            <Row className="d-flex align-items-center justify-content-center h-100">

              <Col md={8} lg={7} xl={6}>
                <img
                  src="https://img.freepik.com/premium-vector/print_561236-152.jpg?w=740"
                  alt="Phone"
                  className="img-fluid rounded-3 w-50"
                />
              </Col>
              <Col md={7} lg={5} xl={5}>
                <Form>
                  {/* Username input */}
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value) } />
                  </Form.Group>


                  {/* Password input */}
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) } />
                  </Form.Group>

                  <div className="d-flex justify-content-around align-items-center mb-4">
                    {/* Checkbox */}
                    <FormCheck>
                      <FormCheck.Input type="checkbox" value="" id="form1Example3" defaultChecked />
                      <FormCheck.Label>Remember me</FormCheck.Label>
                    </FormCheck>
                    <a href="#!">Forgot password?</a>
                  </div>

                  {/* Submit button */}
                  <Button type="submit" variant="main-inverse" onClick={(event)=>handleLogin(event)} size="lg" className='w-100'>Sign in</Button>
                  <div className='p-3'>
                    <Link to="/RegistrationType">If you're not a user? Register</Link>
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