import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import "./AddRequest.css"
import { saveGarbageFormData } from '../../services/GarbageFormService.js';
import { useNavigate } from 'react-router';


const AddRequest = () => {
  const [garbageFormData, setGarbageFormData] = useState({name:'', mail:'', garbagetype:'',gDesc:'', address:'' , pincode:'', state:'', pDate:''})
  const navigate = useNavigate();
  const handleFieldChange = (e)=>{
      setGarbageFormData({...garbageFormData , [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    saveGarbageFormData(garbageFormData).then((response)=>{
    alert(`Request Submitted Successfully. Request ID: ${response.data.req_id}`);
    navigate('/admin');
    }).catch((error=>{
    console.error(error);
    }));
  }


  return (
    <Container>
    <Row className="justify-content-md-center">
      <Col md="6">
        <h2>Add Request</h2>
        <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' onChange={handleFieldChange} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name='mail' onChange={handleFieldChange}  />
          </Form.Group>

          <Form.Group controlId="formGarbageType">
            <Form.Label>Garbage Type</Form.Label>
            <Form.Control as="select" defaultValue="General" name='garbagetype' onChange={handleFieldChange}>
              <option value="Dry">Dry waste</option>
              <option value="Wet">Wet waste</option>
              <option value="General">General waste</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Garbage Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" name='gDesc' onChange={handleFieldChange} />
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Pickup Address</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter pickup address" name='address' onChange={handleFieldChange} />
          </Form.Group>

          <Form.Group controlId="formPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text"  name='pincode' onChange={handleFieldChange}/>
          </Form.Group>

          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name='state' onChange={handleFieldChange} />
          </Form.Group>

          <Form.Group controlId="formPickupDate">
            <Form.Label>Pickup Date</Form.Label>
            <Form.Control type="date" name='pDate' onChange={handleFieldChange} />
          </Form.Group>

          <Button variant="primary" type="submit" style={{backgroundColor:'grey', border: '0px'}} onClick={()=>{navigate('/admin')}}>
            Back
          </Button>
          <Button variant="primary" type="submit">
            Submit Details
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
    
  )
}

export default AddRequest