import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/PortfolioSection.css';

const imageKitBaseUrl = "https://ik.imagekit.io/6o2yw6zpa/";

const portfolioItems = [
  {
    title: "Showers",
    slug: "showers",
    imgPublicId: "Showers/01-shower-triple-4.webp",
  },
  {
    title: "Mirrors",
    slug: "mirrors",
    imgPublicId: "Mirrors/20241230_170426.webp",
  },
  {
    title: "Railings",
    slug: "railings",
    imgPublicId: "Railings/20250128_115658.webp",
  },
  {
    title: "Shelves",
    slug: "shelves",
    imgPublicId: "Shelves/20241231_171418.webp",
  },
];

export default function PortfolioSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? portfolioItems.length - itemsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex + itemsPerPage > portfolioItems.length ? 0 : newIndex;
    });
  };

  const visibleItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);
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

        <div className="portfolio-carousel d-flex justify-content-center align-items-center gap-2">
          <div className="portfolio-nav-arrows d-flex align-items-center">
            <i className="bi bi-caret-left-fill nav-icon" onClick={handlePrev}></i>
          </div>

          <Row className="flex-grow-1 justify-content-center g-3">
            {visibleItems.map((item) => (
              <Col
                key={item.slug}
                xs={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center"
              >
                <Link to={`/gallery/${item.slug}`} className="portfolio-card text-decoration-none">
                  <img
                    src={`${imageKitBaseUrl}${item.imgPublicId}?tr=w-360,h-640,fo-auto,q-80`}
                    alt={item.title}
                    className="portfolio-img"
                    loading="lazy"
                  />
                  <div className="portfolio-title-blur">
                    <span>{item.title}</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="portfolio-nav-arrows d-flex align-items-center">
            <i className="bi bi-caret-right-fill nav-icon" onClick={handleNext}></i>
          </div>
        </div>
      </Container>
    </section>
  );
}
