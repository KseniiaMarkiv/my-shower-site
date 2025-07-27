import { useState } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import GalleryPage from "./GalleryPage";

import "../styles/PortfolioSection.css";
import "../styles/ServicesSection.css"; // make sure the button style is loaded

const portfolioItems = [
  {
    title: "Showers",
    slug: "Showers",
  },
  {
    title: "Mirrors",
    slug: "Mirrors",
  },
  {
    title: "Railings",
    slug: "Railings",
  },
  {
    title: "Shelves",
    slug: "Shelves",
  },
];

export default function PortfolioSection() {
  const [activeSlug, setActiveSlug] = useState("Showers");

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <Container>
        <h2 className="display-4 fw-bold text-center mb-1 fs-1">Our Works</h2>
        <p className="text-center mb-4 portfolio-text">
          See some of our recent shower, mirror, and railing installations.
        </p>

        <div className="d-flex justify-content-center mb-4">
          <ButtonGroup>
            {portfolioItems.map((item) => (
              <Button
                key={item.slug}
                variant="outline-dark"
                className={`me-2 ${activeSlug === item.slug ? "active" : ""}`}
                onClick={() => setActiveSlug(item.slug)}
              >
                {item.title}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <GalleryPage tabSlug={activeSlug} />
      </Container>
    </section>
  );
}
