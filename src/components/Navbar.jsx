import { useEffect, useState, useRef } from 'react'; // Import useRef
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import '../styles/Navbar.css';

const galleryItems = [
  { name: 'Showers', slug: 'showers' },
  { name: 'Mirrors', slug: 'mirrors' },
  { name: 'Railings', slug: 'railings' },
  { name: 'Shelves', slug: 'shelves' },
];

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showGallery, setShowGallery] = useState(false);


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

  useEffect(() => {
  if (!expanded) {
    const timer = setTimeout(() => setShowGallery(true), 400);
    return () => clearTimeout(timer);
  } else {
    setShowGallery(false);
  }
}, [expanded]);


  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      fixed="top"
      className={`main-navbar ${scrolled ? 'navbar-blur' : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >

    <div className="d-flex justify-content-between align-items-center d-lg-none w-100 mobile-navbar-container">
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={`custom-navbar-toggle navbar-toggler collapsed ms-3 ${animate ? 'animate-lines' : ''}`}
        onClick={handleToggleClick}
      >
        <div className="line top-line"></div>
        <div className="line middle-line"></div>
        <div className="line bottom-line"></div>
      </Navbar.Toggle>

        {!expanded && showGallery && (
          <NavDropdown
            title={
              <button className="btn btn-dark gallery-menu d-flex align-items-center gap-2">
                <span className="dropdown-caret">&#9662;</span> {/* down arrow on the left */}
                Gallery
              </button>
            }
            id="mobile-gallery-dropdown"
            className="d-lg-none d-md-block d-sm-block d-block gallery-link-fade show me-3"
            align="end"
          >
            {galleryItems.map((item) => (
              <NavDropdown.Item
                key={item.slug}
                as={HashLink}
                to="/#portfolio"
                onClick={handleNavLinkClick}
                className="text-center"
              >
                {item.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        )}
    </div>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
        <Nav className="ms-lg-5 text-secondary gap-lg-4">
          <Nav.Link as={HashLink} to="/#jumbotron" className="text-center" onClick={handleNavLinkClick}>Home</Nav.Link>
          <Nav.Link as={HashLink} to="/#testimonials" className="text-center" onClick={handleNavLinkClick}>Testimonials</Nav.Link>
          
          <NavDropdown title="Gallery" id="gallery-dropdown" className="text-center">
            {galleryItems.map((item) => (
              <NavDropdown.Item
                key={item.slug}
                as={HashLink}
                to={`/gallery/${item.slug}`}
                onClick={handleNavLinkClick}
                className="text-center"
              >
                {item.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={HashLink} to="/#about-us" className="text-center" onClick={handleNavLinkClick}>Contact Us</Nav.Link>

          <NavDropdown title="More Options" id="more-options-dropdown" className="text-center">
            <NavDropdown.Item as={HashLink} to="/#services-short" className="text-center" onClick={handleNavLinkClick}>Installation Types</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/#services-professional" className="text-center" onClick={handleNavLinkClick}>Our Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={HashLink} to="/#portfolio" className="text-center" onClick={handleNavLinkClick}>Our Works</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/#how-it-works" className="text-center" onClick={handleNavLinkClick}>How It Works</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Buttons */}
        <Nav className="ms-lg-auto my-sm-3 my-lg-0 pe-lg-5 nav-button">
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