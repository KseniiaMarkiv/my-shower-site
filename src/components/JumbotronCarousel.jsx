import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';
import jumbotronSlideData from '../jumbotronImages';

function JumbotronCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <div id="jumbotron" className="jumbotron-section">
      <Carousel activeIndex={index} onSelect={handleSelect} fade controls={false} indicators={false}>
        {jumbotronSlideData.map((slide) => (
          <Carousel.Item key={slide.id} interval={5000}>
            {slide.type === 'video' ? (
              <video
                className="d-block w-100 jumbotron-video"
                src={`${slide.cloudinaryBase}#t=0.1`}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={`${slide.cloudinaryBase}?q_auto:eco&f_auto`}
                srcSet={`
                  ${slide.cloudinaryBase}?w=576&q_auto&f_auto 576w,
                  ${slide.cloudinaryBase}?w=768&q_auto&f_auto 768w,
                  ${slide.cloudinaryBase}?w=992&q_auto&f_auto 992w,
                  ${slide.cloudinaryBase}?w=1200&q_auto&f_auto 1200w,
                  ${slide.cloudinaryBase}?w=1600&q_auto&f_auto 1600w
                `}
                sizes="(max-width: 575px) 576px,
                       (max-width: 767px) 768px,
                       (max-width: 991px) 992px,
                       (max-width: 1199px) 1200px,
                       1600px"
                className="d-block w-100 jumbotron-img"
                alt={slide.alt}
                loading="lazy"
              />
            )}

            <Carousel.Caption className="jumbotron-caption">
              <Container>
                <Row className="justify-content-start">
                  <Col lg={8} md={10}>
                    <h1 className="fs-1 jumbotron-title mb-4">{slide.title}</h1>
                    <p className="jumbotron-text mb-4">{slide.text}</p>
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
