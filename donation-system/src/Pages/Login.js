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
          if(user.status === "pending"){
            alert("Your account is still pending approval");
          }
          else if(user.status === "rejected"){
            alert("Your account has been rejected");
          }
          else{
            navigate("/Donor");
          }
          break;
        case "Organization":
          if(user.status === "pending"){  
            alert("Your account is still pending approval");
          }
          else if(user.status === "rejected"){
            alert("Your account has been rejected");
          }
          else{
          navigate("/OrganizationDashboard");
          }
          break;
        default:
          navigate("/Login");
      }
    }
  }
  
  return (
    <section className="h-100">
      <Container className="py-5 h-100">
        <Card style={{ padding: '15px' }} className='text-black m-5'>
          <Card.Body style={{ padding: '15px' }}>

            <Row className="d-flex align-items-center justify-content-center h-100">

              <Col md={10} lg={10} xl={6}>
                <img
                  src="https://i.pinimg.com/236x/7d/bd/c0/7dbdc03df87c75f679056a3a9db12e02.jpg"
                  alt="Phone"
                  className="img-fluid rounded-3 w-50  mt-md-5"
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