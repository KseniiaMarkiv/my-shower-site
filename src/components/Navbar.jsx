import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`main-navbar py-3 ${scrolled ? 'navbar-blur' : ''}`}
    >
      {/* Logo */}
      <Navbar.Brand href="#home" className="logo-font text-lg text-dark ps-5">
        <img
          src={logo}
          alt="Company Logo"
          width="auto"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
        <Nav className="ms-lg-5 text-secondary gap-4">
          <Nav.Link href="#home" className="text-center">Home</Nav.Link>
          <Nav.Link href="#about-us" className="text-center">About Us</Nav.Link>
          <Nav.Link href="#contact-us" className="text-center">Contact Us</Nav.Link>

          <NavDropdown title="More Options" id="more-options-dropdown" className="text-center">
            <NavDropdown.Item href="#services-short" className="text-center">Installation Types</NavDropdown.Item>
            <NavDropdown.Item href="#services-professional" className="text-center">Our Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#gallery" className="text-center">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#how-it-works" className="text-center">How It Works</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Buttons */}
        <Nav className="ms-lg-auto pe-lg-5 nav-button">
          <Button
            href="#quote"
            variant="outline-dark"
            className="custom-estimate-button me-lg-2 px-4 py-1 border border-gray-400 text-sm rounded-0"
          >
            Get a Free Quote
          </Button>
          <Button
            variant="dark"
            className="navbar-contact-button px-4 py-1 text-sm rounded-0"
          >
            Contact
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
