// import React from 'react'
// import { Link } from 'react-router-dom'

// function SignUp() {
//   return (
//     <div className=' d-flex justify-content-center align-items-center  vh-100'>
//       <div className=' p-3 rounded w-25   border border-dark'>
//         <form action="">
//           <div className='mb-3 mt-3'>
//             <label htmlFor="name"><strong>Name</strong></label>
//             <input type="text" placeholder="enter name" className='form-control rounded-0' />
//           </div>
//           <div className='mb-3 mt-3'>
//             <label htmlFor="email"><strong>Email</strong></label>
//             <input type="email" placeholder="enter email" className='form-control rounded-0' />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor="password"><strong>Password</strong></label>
//             <input type="password" placeholder="enter password" className='form-control rounded-0' />
//           </div>
//           <button className='btn btn-success w-100 rounded-1 mb-3'><strong>SignUp</strong></button>
//           <button className='text-decoration-none btn btn-default border rounded-1 w-100 bg-light'><strong>Login</strong></button>

//         </form>
//       </div>
      
//     </div>
//   )
// }
// export default SignUp;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './SignUp.css'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     // Add your registration logic here
//     console.log('Sign Up', { firstName, lastName, email, password });
//   };

//   const navigateToSignIn = () => {
//     history.push('/signin');
//   };

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
