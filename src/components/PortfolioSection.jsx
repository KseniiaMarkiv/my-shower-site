import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import GalleryPage from "./GalleryPage";

import "../styles/PortfolioSection.css";
import "../styles/ServicesSection.css";

const portfolioItems = [
  { title: "Showers",  slug: "Showers"  },
  { title: "Mirrors",  slug: "Mirrors"  },
  { title: "Railings", slug: "Railings" },
  { title: "Shelves",  slug: "Shelves"  },
];

export default function PortfolioSection() {
  const [activeSlug, setActiveSlug] = useState("Showers");

  useEffect(() => {
    // pick up tab chosen via Navbar / previous visit
    const saved = sessionStorage.getItem("portfolioTab");
    const valid = portfolioItems.some(p => p.slug === saved);
    if (saved && valid) setActiveSlug(saved);

    // live updates from Navbar while on page
    const handler = (e) => {
      const slug = e.detail;
      const ok = portfolioItems.some(p => p.slug === slug);
      if (ok) {
        sessionStorage.setItem("portfolioTab", slug);
        setActiveSlug(slug);
      }
    };
    window.addEventListener("portfolio:set-tab", handler);
    return () => window.removeEventListener("portfolio:set-tab", handler);
  }, []);

  const activate = (slug) => {
    sessionStorage.setItem("portfolioTab", slug);
    setActiveSlug(slug);
  };

  return (
    <section id="portfolio" className="portfolio-section py-5">
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
              aria-pressed={activeSlug === item.slug}
              onClick={() => activate(item.slug)}
            >
              {item.title}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <GalleryPage tabSlug={activeSlug} />
    </section>
  );
}
