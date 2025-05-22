import { useState } from 'react';

import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import logo from '../assets/logo.png';

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

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
        <Nav className="ms-5 text-secondary gap-4"> 
          <Nav.Link href="#home-services">Home Services</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          {/* For 'More Options' with a dropdown */}
          <NavDropdown title="More Options" id="more-options-dropdown" className="">
            <NavDropdown.Item href="#action/1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Option 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3">Another Option</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Buttons on the far right */}
        <Nav className="ms-auto pe-5"> 
          <Button
            variant="outline-dark" 
            className="me-2 px-4 py-1 border border-gray-400 text-sm rounded-0" 
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