import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import "../../Components/Contact/Section1.css"

const Section1 = () => {
  return (
    <Container className="main-container">
      <Row>
        <Col md={6} className="left-div">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Main Office</Card.Title>
              <Card.Text>
              Raintree Marg, near Bharati Vidyapeeth, <br/>Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614
              </Card.Text>
              <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8596674030223!2d73.05167127596458!3d19.025904453541877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1716025018300!5m2!1sen!2sin"
                width="600"
                height="250"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="right-div">
          <h1>Get in Touch</h1>
          <p>If you have any questions, please feel free to contact us</p>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Section1