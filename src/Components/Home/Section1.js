import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../Components/Home/Section1.css";


const Section1 = () => {
    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                <Col md={6} className="left-half">
                    
                </Col>
                <Col md={6} className="right-half d-flex flex-column justify-content-center align-items-start">
                    <h1>The Future of Waste Management</h1>
                    <p>Welcome to the forefront of waste management innovation, where sustainability meets cutting-edge technology. As we move towards a greener future, our approach to managing waste is evolving rapidly. Here's a glimpse into how we're transforming waste management to create a cleaner, more sustainable world for generations to come.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Section1