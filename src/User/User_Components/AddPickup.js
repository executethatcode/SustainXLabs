import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../../User/User_Components/AddPickup.css"

const AddPickup = () => {
  return (
    <Container className='container-pickup'>
    <Row className="justify-content-md-center">
      <Col md="6">
        <h2>Garbage Pickup Form</h2>
        <Form>
          <Form.Group controlId="formGarbageType">
            <Form.Label>Garbage Type</Form.Label>
            <Form.Control as="select">
              <option value="">Select type</option>
              <option value="Organic">Organic</option>
              <option value="Recyclable">Recyclable</option>
              <option value="Hazardous">Hazardous</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Garbage Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
            />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Pickup Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pickup address"
            />
          </Form.Group>

          <Form.Group controlId="formPickupDate">
            <Form.Label>Pickup Date</Form.Label>
            <Form.Control
              type="date"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit Details
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default AddPickup