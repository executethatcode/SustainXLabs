import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button, Modal, Alert } from 'react-bootstrap';

import { deleteSelectedRequest, fetchAllGarbageFormData } from '../../services/AdminService';
import logoblack from "../../assets/img/logo_black.png"
import { useNavigate } from 'react-router';


const Admin = () => {

  const [garbageFormData, setGarbageFormData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(0);
  const navigate = useNavigate();        

  const closeModal = () => {
    setShowModal(false);
  }

  const getAllGarbageData = async () => {
    const response = await fetchAllGarbageFormData();
    setGarbageFormData(response.data);
  }

  useEffect(() => {
    getAllGarbageData();
  }, []);


  const handleLogout = () => {

    navigate('/');
  };

  const handleAdd = () => {

    navigate('/add-request');
  };

  const handleDelete = async () => {
    const response = await deleteSelectedRequest(selectedRequest);
    if (response.status == 200) {
      setShowModal(false);
      getAllGarbageData();
    }

  };

  return (
    <>
      <header>
        <Container>
          <Row className="align-items-center my-3">
            <Col xs="auto">
              <img src={logoblack} alt="Logo" className="img-fluid" style={{ height: '50px' }} />
            </Col>
            <Col>
              <h1 className="mb-0">Admin Panel</h1>
            </Col>
            <Col xs="auto" className="text-end">
              <Button variant="success" onClick={handleAdd}>Add Request</Button>
            </Col>
            <Col xs="auto" className="text-end">
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        {
          garbageFormData.length === 0 ?
            <Alert variant='danger'>No Data Exists</Alert>
            :
            <Table striped bordered hover responsive className="mt-4">
              <thead>
                <tr>
                  <th>Req ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Garbage Type</th>
                  <th>Description</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>State</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  garbageFormData.map((g) => {
                    return (
                      <tr>
                        <td className="p-2">{g.req_id}</td>
                        <td className="p-2">{g.name}</td>
                        <td className="p-2">{g.user_email}</td>
                        <td className="p-2">{g.garbage_type}</td>
                        <td className="p-2">{g.description}</td>
                        <td className="p-2">{g.address}</td>
                        <td className="p-2">{g.pin}</td>
                        <td className="p-2">{g.state}</td>
                        <td className="p-2">{g.status}</td>
                        <td className="p-2">
                          <Button variant="warning" size="sm" className="me-2" onClick={()=>{
                            navigate(`/edit-request/${g.req_id}`)
                          }}>Edit</Button>
                          <Button variant="danger" size="sm" onClick={() => {
                            setShowModal(true);
                            setSelectedRequest(g.req_id);
                          }}>Delete</Button>
                        </td>
                      </tr>
                    )
                  })

                }

              </tbody>
            </Table>
        }

      </Container>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove Request no. {selectedRequest} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleDelete} >
            Yes
          </Button>
          <Button variant="danger" onClick={closeModal} >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Admin