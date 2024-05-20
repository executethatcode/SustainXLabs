import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../Components/Home/HeroBanner.css"

const HeroBanner = () => {
    return (
        <div className="hero-banner-home">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title-home">Garbage Management Services </h1>
                            <p className="hero-subtitle-home">
                                We help make your neighborhood more sustainable With an industry-leading 80% recycling rate, we can help you transform your personal’ waste management.
                            </p>

                            {/* <Button variant="primary" className="hero-button-home">Add Pickup</Button>
                            <Button variant="outline-light" className="hero-button-home">Contact us</Button> */}
                        </Col>
                    </Row>
                        <Col md={3}>
                        <Button variant="outline-light" className="hero-button-home">Add Pickup</Button>
                            <Button variant="outline-light" className="hero-button-home">Contact us</Button>
                        </Col>
                    <Row>

                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HeroBanner