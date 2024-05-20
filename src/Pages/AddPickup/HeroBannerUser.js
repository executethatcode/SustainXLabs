import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../Pages/AddPickup/HeroBannerUser.css"
const HeroBannerUser = () => {
  return (
    <div className="hero-banner-pickup">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title-pickup" >Pickup</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  )
}

export default HeroBannerUser