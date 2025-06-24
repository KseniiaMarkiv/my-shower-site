import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/PortfolioSection.css';

const portfolioItems = [
  {
    title: "Showers",
    img: "https://picsum.photos/360/640?random=1",
  },
  {
    title: "Mirrors",
    img: "https://picsum.photos/360/640?random=1",
  },
  {
    title: "Railings",
    img: "https://placehold.co/360x640?text=Railings&font=Montserrat",
  },
  {
    title: "Shelves",
    img: "https://picsum.photos/360/640?random=1",
  },
];

export default function PortfolioSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 >= portfolioItems.length ? 0 : prevIndex + 1
    );
  };

  const visibleItems = portfolioItems.slice(startIndex, startIndex + 3);

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <Container>
        <h2 className="display-4 fw-bold text-center mb-1 fs-1">Our Work</h2>
        <p className="text-center mb-5 portfolio-text">
          See some of our recent shower, mirror, and railing installations.
        </p>

        <div className="portfolio-carousel d-flex justify-content-center align-items-center gap-4">
          <i className="bi bi-caret-left-fill nav-icon" onClick={handlePrev}></i>

          {visibleItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img src={item.img} alt={item.title} className="portfolio-img" />
              <div className="portfolio-title-blur">
                <span>{item.title}</span>
              </div>
            </div>
          ))}

          <i className="bi bi-caret-right-fill nav-icon" onClick={handleNext}></i>
        </div>
      </Container>
    </section>
  );
}
