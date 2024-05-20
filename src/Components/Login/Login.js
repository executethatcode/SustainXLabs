import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css'
import { adminlogin, storeToken } from '../../services/AdminService';
import { useNavigate } from 'react-router';
const Login = () => {

  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminlogin(credentials);
      console.log(response);
      if (response && response.status === 200) {
        storeToken(response.data.token);
        navigate('/admin');
      } else {
        setLoginError('Unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <div className="border-container">
            <h2>Sign In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 mt-2">
                Sign In
              </Button>
            </Form>


          </div>

        </Col>
        
        
      </Row>
      {
          loginError.length !==0 ? <Row className='mt-3 justify-content-md-center'>
          <Col lg={4}>
            <Alert variant='danger'>{loginError}</Alert>
          </Col>
        </Row> : null
        }
    </Container>
  );
};

export default Login;
