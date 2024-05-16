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
              <div className="image-container">
                <img src="path_to_your_image.jpg" alt="Office Location" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="right-div">
          <h1>Get in Touch</h1>
          <p>If you have any questions, please feel free to contact us using the form below.</p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Section1