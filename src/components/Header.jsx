import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/amsun-logo.png';
import './header.css';

function Header() {
  return (
    <header>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} width="40" height="40" className="d-inline-block align-top" alt="amsun-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto header__text-color">
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