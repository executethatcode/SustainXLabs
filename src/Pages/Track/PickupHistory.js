import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const PickupHistory = () => {
  const [requestId, setRequestId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pickupData, setPickupData] = useState(null);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:6500/addpickup/${requestId}`);
      setPickupData(response.data);
      console.log(pickupData);
      setShowModal(true);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Container className="d-flex flex-column align-items-center mt-5 ">
        <Form onSubmit={handleSubmit} className='main'>
          <Form.Group controlId="formBasicInput">
            <Form.Control
              type="text"
              placeholder="Enter Request ID"
              value={requestId}
              onChange={(e) => setRequestId(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Modal show={showModal} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title>Pickup Details</Modal.Title>
        </Modal.Header>
          {pickupData ? (
            <Modal.Body >
            <div>
              <p><strong>ID:</strong> {pickupData[0].req_id}</p>
              <p><strong>Name:</strong> {pickupData[0].name}</p>
              <p><strong>Status:</strong> {pickupData[0].status}</p>
            </div>
            </Modal.Body>
          ) : (
            <p>Loading...</p>
          )}
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PickupHistory;