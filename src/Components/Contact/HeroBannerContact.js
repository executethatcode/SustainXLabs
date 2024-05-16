import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Contact/HeroBannerContact.css"

const HeroBannerContact = () => {
  return (
    <div className="hero-banner">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title">Contact Us</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  )
}

export default HeroBannerContact