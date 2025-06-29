import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you have react-router-dom installed

import '../styles/PortfolioSection.css'; // You'll need to update this CSS

const portfolioItems = [
  {
    title: "Showers",
    slug: "showers",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750899830/Showers/frameless/20240814_161015_ttxocg.jpg",
  },
  {
    title: "Mirrors",
    slug: "mirrors",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750900165/Mirrors/20240920_113729_fhd99h.jpg",
  },
  {
    title: "Railings",
    slug: "railings",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750900088/Railings/20250624_184846_v1onh3.jpg",
  },
  {
    title: "Shelves",
    slug: "shelves",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750900040/Shelves/20241231_171418_nceqqo.jpg",
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
                  <img src={item.img} alt={item.title} className="portfolio-img" />
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