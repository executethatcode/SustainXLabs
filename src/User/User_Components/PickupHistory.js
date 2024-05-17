import React from 'react'
import { Table, Button, Container, Col, Row } from 'react-bootstrap';

const PickupHistory = () => {

    // const requests = [
    //     { id: 1, type: 'Organic', address: '123 Main St', date: '2024-05-17', status: 'Pending' },
    //     { id: 2, type: 'Recyclable', address: '456 Elm St', date: '2024-05-18', status: 'Completed' },
    //     { id: 3, type: 'Hazardous', address: '789 Oak St', date: '2024-05-19', status: 'In Progress' },
    //   ];
      
  return (
    <>
    <Container>
    <h2 className="my-4">Garbage Pickup Requests</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>RequestID</th>
          <th>Garbage Type</th>
          <th>Pickup Address</th>
          <th>Pickup Date</th>
          <th>Status</th>
          <th>Action</th>
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
  <Container fluid className="d-flex mb-5">
  <Row className="m-auto">
    <Col className="text-center">
      <Button variant="primary" className="mx-2">Back</Button>
    </Col>
  </Row>
</Container>
</>
  )
}

export default PickupHistory