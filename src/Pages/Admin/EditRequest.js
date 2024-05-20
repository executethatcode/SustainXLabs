import React, { useEffect, useState } from 'react';
import { fetchGarbageFormDataById, updateRequest } from '../../services/AdminService';
import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const EditRequest = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [fetchedData, setFetchedData] = useState({ req_id:'', name: '', mail: '', garbagetype: '', gDesc: '', address: '', pincode: '', state: '', pDate: '', status: '' });

    const getGarbageFormDataById = async () => {
        const response = await fetchGarbageFormDataById(params.req_id);
        if (response.status === 200) {
            setFetchedData(response.data[0]);
            console.log(response.data[0]);
        }
    };

    const handleFieldChange = (e) => {
        setFetchedData({ ...fetchedData, [e.target.name]: e.target.value })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(fetchedData);
        const response = await updateRequest(fetchedData)
        if(response.status ===200){
            
            navigate('/admin');
        }
        else{
            //error
        }
    }

    

    useEffect(() => {
        getGarbageFormDataById();
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Edit</h2>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formID">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" name='req_id' value={fetchedData.req_id} readOnly style={{borderBlockColor: "red"}}  />
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' value={fetchedData.name} readOnly style={{borderBlockColor: "red"}}  />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="mail" name='mail' value={fetchedData.user_email} readOnly style={{borderBlockColor: "red"}}  />
                        </Form.Group>

                        <Form.Group controlId="formGarbageType">
                            <Form.Label>Garbage Type</Form.Label>
                            <Form.Control as="text"  name='garbagetype' value={fetchedData.garbage_type} readOnly style={{borderBlockColor: "red"}}  />
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Garbage Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name='gDesc' value={fetchedData.description} readOnly style={{borderBlockColor: "red"}} />
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                            <Form.Label>Pickup Address</Form.Label>
                            <Form.Control as="textarea" rows={3} name='address' value={fetchedData.address} readOnly style={{borderBlockColor: "red"}} />
                        </Form.Group>

                        <Form.Group controlId="formPincode">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control type="text" name='pincode' value={fetchedData.pin} readOnly style={{borderBlockColor: "red"}}/>
                        </Form.Group>

                        <Form.Group controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" name='state' value={fetchedData.state} readOnly style={{borderBlockColor: "red"}}/>
                        </Form.Group>

                        <Form.Group controlId="formPickupDate">
                            <Form.Label>Pickup Date</Form.Label>
                            <Form.Control type='date' name='pDate' value={fetchedData.request_date} readOnly onChange={handleFieldChange} style={{borderBlockColor: "red"}}/>
                        </Form.Group>

                        <Form.Group controlId="formStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" name='status' value={fetchedData.status} readOnly style={{borderBlockColor: "green"}} onChange={handleFieldChange}>
                                <option value="pending">pending</option>
                                <option value="inprocess">inprocess</option>
                                <option value="completed">completed</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{backgroundColor:'grey', border: '0px'}} onClick={()=>{navigate('/admin')}}>
                            Back
                        </Button>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EditRequest;
