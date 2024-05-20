import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../Pages/Track/TrackBanner.css"
const TrackBanner = () => {
    return (
        <div className="hero-banner-track">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title">Track</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default TrackBanner