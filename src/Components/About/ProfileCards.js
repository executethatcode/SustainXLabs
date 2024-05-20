import React from 'react';
import { Card, Col, Row, Image, Container } from 'react-bootstrap';
import './ProfileCards.css'




const ProfileCards = () => (
  <div >
    <Container fluid>
      <section class="team-section text-center py-5">
    <h1 class="mb-4">Meet Our Amazing Team</h1>
    <div class="row justify-content-center">
      </div>
  </section></Container>
  <Container className="mt-5 mb-5">
      <Row>
    <Col xs={12} md={4} >
      <Card className=" margincard">
        <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Prashant" />
        <Card.Body>
          <Card.Title>Prashant Negi</Card.Title>
          <Card.Text style={{color:'black'}}>
            PG-DAC Kharghar
            March 2024
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card  className="margincard">
        <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Yshreekanth" />
        <Card.Body>
          <Card.Title>Y shree kanth </Card.Title>
          <Card.Text style={{color:'black'}}>
            PG-DAC Kharghar
            March 2024
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card className="margincard">
        <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Arusa" />
        <Card.Body>
          <Card.Title>Arusa Korse</Card.Title>
          <Card.Text style={{color:'black'}}>
            PG-DAC Kharghar
            March 2024
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  </Row>
  </Container>
  </div>

);

export default ProfileCards;
