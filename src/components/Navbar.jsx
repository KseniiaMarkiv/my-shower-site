import { useState } from 'react';

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';


const CustomNavbar = () => {

  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3"> {/* Added shadow and adjusted padding */}
      <Container>
        {/* Logo - Apply a custom font class if defined */}
        <Navbar.Brand href="#home" className="logo-font text-lg text-dark">
          Logo {/* Apply your custom font class here, e.g., 'font-scriptish' */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center"> {/* Center collapse content */}
          <Nav className="mx-auto text-sm text-secondary gap-4"> {/* Adjusted spacing and text color */}
            <Nav.Link href="#home-services">Home Services</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            {/* For 'More Options' with a dropdown */}
            <NavDropdown title="More Options" id="more-options-dropdown" className="align-self-center">
              <NavDropdown.Item href="#action/1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Another Option</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Buttons on the far right */}
          <Nav className="ms-auto"> {/* Use ms-auto to push content to the right */}
            <Button
              variant="outline-dark" // For border, no fill
              className="me-2 px-4 py-1 border border-gray-400 text-sm rounded-0" // Custom border color and no rounded corners
            >
              Join
            </Button>
            <Button
              variant="dark" // For black background
              className="px-4 py-1 text-sm rounded-0" // No rounded corners
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;