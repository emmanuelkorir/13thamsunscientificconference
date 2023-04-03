import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/amsun-logo.png';
import './header.css';

function Header() {
  return (
    <header>
<Navbar fixed="top" className="header__color" expand="lg">
<Container>
  <Navbar.Brand href="/"><img src={logo} width="40" height="40" className="d-inline-block align-top" alt="amsun-logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/programme">Programme</Nav.Link>
      <Nav.Link href="/speakers">Speakers</Nav.Link>
            <Nav.Link href="/faqs">FAQs</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </header>
  )
}

export default Header