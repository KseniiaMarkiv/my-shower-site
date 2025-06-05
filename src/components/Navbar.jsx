import { useState } from 'react';

import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const CustomNavbar = () => {

  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3"> 
      {/* Logo - Apply a custom font class if defined */}
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
          <Nav.Link href="#home-services" className='text-center'>Home Services</Nav.Link>
          <Nav.Link href="#about-us" className='text-center'>About Us</Nav.Link>
          <Nav.Link href="#contact-us" className='text-center'>Contact Us</Nav.Link>
          {/* For 'More Options' with a dropdown */}
          <NavDropdown title="More Options" id="more-options-dropdown" className="text-center">
            <NavDropdown.Item href="#action/1" className="text-center">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2" className="text-center">Option 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3" className="text-center">Another Option</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Buttons on the far right */}
        <Nav className="ms-lg-auto pe-lg-5 nav-button"> 
          <Button
            variant="outline-dark" 
            className="me-lg-2 px-4 py-1 border border-gray-400 text-sm rounded-0" 
          >
            Join
          </Button>
          <Button
            variant="dark" 
            className="px-4 py-1 text-sm rounded-0" 
          >
            Contact
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;