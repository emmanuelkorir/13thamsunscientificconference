import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">13<sup>th</sup> AMSUN Scientific Conference</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Speakers</Nav.Link>
            <NavDropdown title="Programme" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Abstracts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Support Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">FAQs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header