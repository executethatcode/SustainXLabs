import React from 'react'
import "../../Pages/Admin/Admin.css"

const Admin = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={2} className="sidebar bg-light p-3">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#users">Users</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
          </Col>
          <Col md={10} className="main-content p-4">
            <h1>Welcome to the Admin Dashboard</h1>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title 2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </>
  )
}

export default Admin