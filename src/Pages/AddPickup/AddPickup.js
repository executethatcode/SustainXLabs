import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import "./AddPickup.css"


const AddPickup = () => {
  return (
    <Container>
    <Row className="justify-content-md-center">
      <Col md="6">
        <h2>Garbage Pickup Form</h2>
        <Form>

        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="formGarbageType">
            <Form.Label>Garbage Type</Form.Label>
            <Form.Control as="select" defaultValue="General">
              <option value="Dry">Dry waste</option>
              <option value="Wet">Wet waste</option>
              <option value="General">General waste</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Garbage Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Pickup Address</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter pickup address" />
          </Form.Group>

          <Form.Group controlId="formPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="formPickupDate">
            <Form.Label>Pickup Date</Form.Label>
            <Form.Control type="date" />
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