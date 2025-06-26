import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/PortfolioSection.css';

const portfolioItems = [
  {
    title: "Showers",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750899830/Showers/frameless/20240814_161015_ttxocg.jpg",
  },
  {
    title: "Mirrors",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750900165/Mirrors/20240920_113729_fhd99h.jpg",
  },
  {
    title: "Railings",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750900088/Railings/20250624_184846_v1onh3.jpg",
  },
  {
    title: "Shelves",
    img: "https://res.cloudinary.com/dyxzzhzqs/image/upload/c_fill,w_360,h_640,f_auto,q_auto/v1750900040/Shelves/20241231_171418_nceqqo.jpg",
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
