import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./ContactBanner.css"

const HeroBannerContact = () => {
  return (
    <div>
        <div className="hero-banner-contact">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title-contact">Contact</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default HeroBannerContact