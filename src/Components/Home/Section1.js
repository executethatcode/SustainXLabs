import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Home/Section1.css";


const Section1 = () => {
  return (
    <div className="section">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/400x740" alt="Image" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="content">
                            <h1 className="heading">Heading</h1>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Section1