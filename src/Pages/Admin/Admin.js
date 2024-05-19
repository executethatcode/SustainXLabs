import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

const Admin = () => {

  const requests = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      garbageType: 'Plastic',
      garbageDescription: 'Plastic bottles',
      address: '123 Street, City',
      pincode: '123456',
      state: 'StateName',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      garbageType: 'Organic',
      garbageDescription: 'Kitchen waste',
      address: '456 Avenue, City',
      pincode: '654321',
      state: 'StateName',
      status: 'Completed'
    },
    // Add more data as needed
  ];


  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout');
  };

  return (
    <>
     <header>
        <Container>
          <Row className="align-items-center my-3">
            <Col xs="auto">
              <img src={logo} alt="Logo" className="img-fluid" style={{ height: '50px' }} />
            </Col>
            <Col>
              <h1 className="mb-0">Admin Panel</h1>
            </Col>
            <Col xs="auto" className="text-end">
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Garbage Type</th>
              <th>Garbage Description</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.id}>
                <td className="p-2">{request.id}</td>
                <td className="p-2">{request.name}</td>
                <td className="p-2">{request.email}</td>
                <td className="p-2">{request.garbageType}</td>
                <td className="p-2">{request.garbageDescription}</td>
                <td className="p-2">{request.address}</td>
                <td className="p-2">{request.pincode}</td>
                <td className="p-2">{request.state}</td>
                <td className="p-2">{request.status}</td>
                <td className="p-2">
                  <Button variant="warning" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Admin