import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';
import jumbotronSlideData from '../jumbotronImages'; // Adjust path if you put jumbotronImages.js in assets/

function JumbotronCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="jumbotron-section">
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true} controls={false} indicators={false}>
        {jumbotronSlideData.map((slide, idx) => (
          <Carousel.Item key={slide.id} interval={5000}>
            <picture>
              <source srcSet={slide.xs} media="(max-width: 575.98px)" />
              <source srcSet={slide.sm} media="(min-width: 576px) and (max-width: 767.98px)" />
              <source srcSet={slide.md} media="(min-width: 768px) and (max-width: 991.98px)" />
              <source srcSet={slide.lg} media="(min-width: 992px) and (max-width: 1199.98px)" />
              <source srcSet={slide.xl} media="(min-width: 1200px) and (max-width: 1399.98px)" />
              <img
                className="d-block w-100 jumbotron-img"
                src={slide.xxl}
                alt={slide.alt}
              />
            </picture>
            <Carousel.Caption className="jumbotron-caption">
              <Container>
                <Row className="justify-content-start">
                  <Col lg={8} md={10}>
                    <h3 className="fs-1 jumbotron-title mb-4">{slide.title}</h3>
                    <p className="jumbotron-text mb-4 fs-6">
                      {slide.text}
                    </p>
                    <div className="jumbotron-buttons">
                      <Button variant="light" href="#how-it-works" className="btn-learn-more me-3">
                        Learn More
                      </Button>
                      {/* Note: Original slide 6 had variant="outline-dark" */}
                      <Button variant="outline-light" className="btn-contact-us">
                        Contact
                      </Button>
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