import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../Components/Home/Section3.css"

const Section3 = () => {
  return (
    <Container fluid className="main-container">
      <Row >
        <Col>
          <Container className="content-container">
            <h1>What’s Your Waste Problem?</h1>
            <p>This is a small paragraph under the heading.</p>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="card-container d-flex justify-content-around">
            <Card className="card-item">
              <Card.Img variant="top" src="https://via.placeholder.com/1200x600" />
              <Card.Body>
                <Card.Title>General Waste</Card.Title>
                <Card.Text>This is the content of the first card.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-item">
              <Card.Img variant="top" src="https://via.placeholder.com/1200x600" />
              <Card.Body>
                <Card.Title>Plastic Recycling</Card.Title>
                <Card.Text>This is the content of the second card.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-item">
              <Card.Img variant="top" src="https://via.placeholder.com/1200x600" />
              <Card.Body>
                <Card.Title>E-Waste Recycling</Card.Title>
                <Card.Text>This is the content of the third card.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Section3