import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you have react-router-dom installed

import '../styles/PortfolioSection.css'; // You'll need to update this CSS

const portfolioItems = [
  {
    title: "Showers",
    slug: "showers",
    imgPublicId: "Showers/triple/01-shower-triple-4_vjh4bf",
  },
  {
    title: "Mirrors",
    slug: "mirrors",
    imgPublicId: "Mirrors/20241230_170426_txopus",
  },
  {
    title: "Railings",
    slug: "railings",
    imgPublicId: "Railings/20250128_115658_ikdy5p",
  },
  {
    title: "Shelves",
    slug: "shelves",
    imgPublicId: "Shelves/IMG-20240702-WA0000_tew4m8",
  },
];

export default function PortfolioSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for large screens

  // Function to determine itemsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) { // 'lg' breakpoint and up
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) { // 'md' breakpoint and up
        setItemsPerPage(2);
      } else { // 'sm' breakpoint and down
        setItemsPerPage(1);
      }
    };

    // Set initial itemsPerPage on component mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      // Loop from the end if going past the first item
      return newIndex < 0 ? portfolioItems.length - itemsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      // Loop from the beginning if going past the last visible item
      return newIndex + itemsPerPage > portfolioItems.length ? 0 : newIndex;
    });
  };

  // Slice items based on current startIndex and itemsPerPage
  const visibleItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);

  // If there aren't enough items to fill the visible slice (e.g., at the end),
  // wrap around to show items from the beginning. This is common for carousels.
  if (visibleItems.length < itemsPerPage) {
    visibleItems.push(...portfolioItems.slice(0, itemsPerPage - visibleItems.length));
  }

  const cloudinaryBaseUrl = "https://res.cloudinary.com/dyxzzhzqs/image/upload/";

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <Container>
        <h2 className="display-4 fw-bold text-center mb-1 fs-1">Our Works</h2>
        <p className="text-center mb-5 portfolio-text">
          See some of our recent shower, mirror, and railing installations.
        </p>

        {/* Carousel Wrapper - Using Row for responsive columns */}
        <div className="portfolio-carousel d-flex justify-content-center align-items-center gap-2"> {/* Reduced gap slightly */}
          {/* <i className="bi bi-caret-left-fill nav-icon" onClick={handlePrev}></i> */}
          <div className="portfolio-nav-arrows d-flex align-items-center">
            <i className="bi bi-caret-left-fill nav-icon" onClick={handlePrev}></i>
          </div>


          <Row className="flex-grow-1 justify-content-center g-3"> {/* Use g-3 for Bootstrap 5 gutters */}
            {visibleItems.map((item, index) => (
              <Col
                key={item.slug} // Use slug for key for better stability if order changes
                xs={12} // On extra small, take full width (1 card per row)
                md={6}  // On medium (tablet), take half width (2 cards per row)
                lg={4}  // On large (desktop), take one-third width (3 cards per row)
                className="d-flex justify-content-center" // Center card within its column
              >
                <Link to={`/gallery/${item.slug}`} className="portfolio-card text-decoration-none">
                  <img
                    src={`${cloudinaryBaseUrl}c_fill,w_360,h_640,f_auto,q_auto/${item.imgPublicId}`}
                    alt={item.title}
                    className="portfolio-img"
                  />
                  <div className="portfolio-title-blur">
                    <span>{item.title}</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>

          {/* <i className="bi bi-caret-right-fill nav-icon" onClick={handleNext}></i> */}
          <div className="portfolio-nav-arrows d-flex align-items-center">
            <i className="bi bi-caret-right-fill nav-icon" onClick={handleNext}></i>
          </div>

        </div>
      </Container>
    </section>
  );
}