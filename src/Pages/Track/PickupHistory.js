import React from 'react'
import { Table, Button, Container, Col, Row, Form } from 'react-bootstrap';

const PickupHistory = () => {

    // const requests = [
    //     { id: 1, type: 'Organic', address: '123 Main St', date: '2024-05-17', status: 'Pending' },
    //     { id: 2, type: 'Recyclable', address: '456 Elm St', date: '2024-05-18', status: 'Completed' },
    //     { id: 3, type: 'Hazardous', address: '789 Oak St', date: '2024-05-19', status: 'In Progress' },
    //   ];
      
  return (
    <>
    
    <Container className="d-flex flex-column align-items-center mt-5">
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Control type="text" placeholder="Enter Request ID" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    
    <Container className='mb-5 mt-5'>
      <h2 className="my-4">Garbage Pickup Status</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>RequestID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Garbage Type</th>
          <th>Garbage Description</th>
          <th>Pickup Address</th>
          <th>Pickup Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* {requests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.type}</td>
            <td>{request.address}</td>
            <td>{request.date}</td>
            <td>{request.status}</td>
            <td>
              <Button variant="warning" >Modify</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  </Container>
</>
  )
}

export default PickupHistory