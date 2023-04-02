import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/amsun-logo.png';
import './header.css';

function Header() {
  return (
    <header>
<Navbar fixed="top" className="header__color" expand="lg">
<Container>
  <Navbar.Brand href="#home"><img src={logo} width="40" height="40" className="d-inline-block align-top" alt="amsun-logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Speakers</Nav.Link>
      <Nav.Link href="#link">Programme</Nav.Link>
      <Nav.Link href="#link">FAQs</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </header>
  )
}

export default Header