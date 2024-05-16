import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../Components/Home/Section2.css"

const Section2 = () => {
  return (
    <Container fluid className="custom-container">
    <Row>
      <Col md={3}>
        <div className="d-flex align-items-center">
          <Image src='icon_homepage.png' rounded className="icon" />
          <div className="ms-3">
            <h4>Refuse</h4>
            <p>We invite clients to join us in our plastic pledge to remove single-use plastics from our business.</p>
          </div>
        </div>
      </Col>
      <Col md={3}>
        <div className="d-flex align-items-center">
          <Image src="path_to_your_icon2.png" rounded className="icon" />
          <div className="ms-3">
            <h4>Reduce</h4>
            <p>Cut down on your consumption of products that leave behind a lasting plastic trail.</p>
          </div>
        </div>
      </Col>
      <Col md={3}>
        <div className="d-flex align-items-center">
          <Image src="path_to_your_icon3.png" rounded className="icon" />
          <div className="ms-3">
            <h4>Reuse</h4>
            <p>Containers, bottles and other everyday items can be reused if we make choices outside of plastic.</p>
          </div>
        </div>
      </Col>
      <Col md={3}>
        <div className="d-flex align-items-center">
          <Image src="path_to_your_icon4.png" rounded className="icon" />
          <div className="ms-3">
            <h4>Recycle</h4>
            <p>Pay attention to the life cycle of the products you consume, and how they can be recycled.</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Section2