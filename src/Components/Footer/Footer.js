import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Footer/Footer.css"


const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container className='text-center'>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
            The Future of Waste Management
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: SustainXlabs@gmail.com</li>
              <li>Phone: 552-334-223</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" target='_blank' className="text-white">Facebook</a></li>
              <li><a href="https://www.twitter.com" target='_blank' className="text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com" target='_blank' className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 SustainXlabs. All rights reserved. Designed by Team 5</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer