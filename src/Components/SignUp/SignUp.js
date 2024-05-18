import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './SignUp.css'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleNameChange = (setter) => (e) => {
    const value = e.target.value;
    // Allow only letters and spaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <div className="border-container">
            <h2>Sign Up</h2>
            <Form >
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter first name" 
                  value={name} 
                  onChange={handleNameChange(setName)} 
                  required 
                />
              </Form.Group>

  

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 mt-2">
                Sign Up
              </Button>
            </Form>
            <Button variant="outline-success" className="w-100 mt-2" >
              Sign In
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
