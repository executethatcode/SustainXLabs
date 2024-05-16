import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../Components/Home/Section1.css";


const Section1 = () => {
    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                <Col md={6} className="left-half">
                    {/* Image will be set as background via CSS */}
                </Col>
                <Col md={6} className="right-half d-flex flex-column justify-content-center align-items-start">
                    <h1>The Future of Waste Management</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Lectus est senectus lacus vulputate erat tempus aenean adipiscing. Eu massa maecenas lorem massa quis fusce.<br/><br/>Eget risus vitae pretium ut egestas lorem in. Vitae placerat elementum arcu nisi aliquet faucibus.
                        Sed sapien neque lectus quis sit odio. Pulvinar donec a id a. Libero purus proin ut egestas quis posuere. Mauris at amet pellentesque tempor rhoncus. Proin odio sed scelerisque suspendisse sagittis</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Section1