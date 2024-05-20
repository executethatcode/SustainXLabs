import React from 'react'
import { Container, Button } from 'react-bootstrap';
import "../../Components/Home/Section4.css"
import { useNavigate } from 'react-router-dom';

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="main-container-section4 d-flex flex-column justify-content-center align-items-center">
      <h1>Create Real Transformation with a SustainXlabs</h1>
      <p>Waste management doesn’t have to be a burden to your business.</p>
      <Button variant="light" onClick={()=>{
        navigate('/addpickup');
      }} >Add Pickup</Button>
    </Container>
  )
}

export default Section4