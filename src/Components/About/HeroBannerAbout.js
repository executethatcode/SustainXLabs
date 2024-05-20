import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./HeroBannerAbout.css"
const HeroBannerAbout = () => {
    return (
        <div className="hero-banner-about">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title-about">About Us</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HeroBannerAbout