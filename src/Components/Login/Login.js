// import React from 'react'
// import { Link } from 'react-router-dom'

// function Login() {
//   return (
//     <div className=' d-flex justify-content-center align-items-center  vh-100'>
//       <div className=' p-3 rounded w-25   border border-dark'>
//         <form action="">
//           <div className='mb-3 mt-3'>
//             <label htmlFor="email"><strong>Email</strong></label>
//             <input type="email" placeholder="enter email" className='form-control rounded-0' />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor="password"><strong>Password</strong></label>
//             <input type="password" placeholder="enter password" className='form-control rounded-0' />
//           </div>
//           <button className='btn btn-success w-100 rounded-1 mb-3'><strong>Login</strong></button>
//           <button className='text-decoration-none btn btn-default border rounded-1 w-100 bg-light'><strong>Create Account</strong></button>

//         </form>
//       </div>
      
//     </div>
//   )
// }
// export default Login;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'
const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log('Sign In', { email, password });
//   };

//   const navigateToSignUp = () => {
//     history.push('/signup');
//   };

  return (
  <Container className="mt-5 mb-5">
  <Row className="justify-content-md-center">
    <Col md={4}>
      <div className="border-container">
        <h2>Sign In</h2>
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 mt-2">
            Sign In
          </Button>
        </Form>
        <Button variant="outline-success" className="w-100 mt-2" >
          Sign Up
        </Button>
      </div>
    </Col>
  </Row>
</Container>
  );
};

export default Login;
