import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';

function JumbotronCarousel({ slug }) {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  useEffect(() => {
    if (!slug) return;

    const cacheKey = `jumbotron-${slug}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      setSlides(JSON.parse(cached));
      return;
    }

    const url = `${import.meta.env.VITE_API_URL}/api/gallery/${slug}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const sorted = [...data].sort((a, b) => {
          const nameA = a.name?.toLowerCase() || '';
          const nameB = b.name?.toLowerCase() || '';
          return nameA.localeCompare(nameB);
        });
        sessionStorage.setItem(cacheKey, JSON.stringify(sorted));
        setSlides(sorted);
      })

      .catch(console.error);
  }, [slug]);

  return (
    <div id="jumbotron" className="jumbotron-section">
      <Carousel activeIndex={index} onSelect={handleSelect} fade controls={false} indicators={false}>
        {slides.map((slide, i) => (
          <Carousel.Item key={i} interval={5000}>
            <img
              src={slide.url} // ✅ Direct ImageKit URL from your backend
              alt={slide.name}
              className="d-block w-100 jumbotron-img"
              loading="lazy"
            />

            <Carousel.Caption className="jumbotron-caption">
              <Container>
                <Row className="justify-content-start">
                  <Col lg={8} md={10}>
                    <h1 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h1>
                    <p className="jumbotron-text mb-4">
                      Enhance the beauty and functionality of your home or business with our expert installation services.
                      From showers to mirrors and railings, we bring your vision to life.
                    </p>
                    <div className="jumbotron-buttons">
                      <Button variant="light" href="#how-it-works" className="btn-learn-more me-3">
                        Learn More
                      </Button>
                      <a href="mailto:myglassstyle@gmail.com">
                        <Button variant="outline-light" className="btn-contact-us">
                          Contact
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default JumbotronCarousel;
