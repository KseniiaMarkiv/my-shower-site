import { useEffect, useState, useRef } from 'react'; // Import useRef
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import logo from '../assets/thanks_support_small_business.png';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navbarRef = useRef(null); // Create a ref for the Navbar component

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20 && expanded) {
        setExpanded(false); // Collapse on scroll if expanded
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [expanded]);

  // Effect for handling clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the navbar is expanded and the click is outside the navbar element
      if (expanded && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      // Add event listener when navbar is expanded
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when navbar is collapsed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: remove event listener when component unmounts or expanded changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]); // Re-run this effect when 'expanded' state changes

  const handleToggleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1500);
    setExpanded(!expanded); // Toggle the expanded state
  };

  // Function to collapse the navbar (used for nav links and buttons)
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      ref={navbarRef} // Attach the ref to the Navbar component
      expand="lg"
      fixed="top"
      className={`p-0 main-navbar ${scrolled ? 'navbar-blur' : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)} // Keep this to ensure internal state sync
    >
      {/* Logo */}
      <Navbar.Brand as={HashLink} to="/#home" className="logo-font text-lg text-dark ps-4">
        <img
          src={logo}
          alt="Company Logo"
          width="auto"
          height="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={`me-4 custom-navbar-toggle ${animate ? 'animate-lines' : ''}`}
        onClick={handleToggleClick}
      >
        <div className="line top-line"></div>
        <div className="line middle-line"></div>
        <div className="line bottom-line"></div>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
        <Nav className="ms-lg-5 text-secondary gap-lg-4">
          <Nav.Link as={HashLink} to="/#jumbotron" className="text-center" onClick={handleNavLinkClick}>Home</Nav.Link>
          <Nav.Link as={HashLink} to="/#testimonials" className="text-center" onClick={handleNavLinkClick}>Testimonials</Nav.Link>
          <Nav.Link as={HashLink} to="/#about-us" className="text-center" onClick={handleNavLinkClick}>Contact Us</Nav.Link>

          <NavDropdown title="More Options" id="more-options-dropdown" className="text-center">
            <NavDropdown.Item as={HashLink} to="/#services-short" className="text-center" onClick={handleNavLinkClick}>Installation Types</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/#services-professional" className="text-center" onClick={handleNavLinkClick}>Our Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={HashLink} to="/#portfolio" className="text-center" onClick={handleNavLinkClick}>Gallery</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/#how-it-works" className="text-center" onClick={handleNavLinkClick}>How It Works</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Buttons */}
        <Nav className="ms-lg-auto my-sm-3 my-lg-0 pe-lg-4 nav-button">
          <Button
            href="#quote"
            variant="outline-dark"
            className="custom-estimate-button me-lg-2 px-4 py-1 border border-gray-400 text-sm rounded-0"
            onClick={handleNavLinkClick}
          >
            Get a Free Quote
          </Button>
          <a
            href="mailto:myglassstyle@gmail.com"
            onClick={(e) => { // Use 'e' for event object
              console.log('Contact button clicked inside Navbar');
              handleNavLinkClick();
            }}
          >
            <Button
              variant="dark"
              className="navbar-contact-button px-4 py-1 text-sm rounded-0"
            >
              Contact
            </Button>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;