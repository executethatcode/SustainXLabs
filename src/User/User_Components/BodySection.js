import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export const BodySection = () => {
  return (
    <Container fluid className="d-flex vh-100">
      <Row className="m-auto">
        <Col className="text-center">
          <Button variant="primary" className="mx-2">Add Pickup</Button>
          <Button variant="primary" className="mx-2">Pickup History</Button>
        </Col>
      </Row>
    </Container>
  )
}
