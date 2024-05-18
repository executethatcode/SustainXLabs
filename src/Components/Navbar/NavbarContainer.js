import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';


const NavbarContainer = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img
                    src={logo}
                    width="140"
                    height="47"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/addpickup">Add Pickup</Nav.Link>
                        <Nav.Link href="/track">Track</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant="outline-light" >Admin</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarContainer