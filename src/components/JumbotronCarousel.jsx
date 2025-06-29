import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';

function JumbotronCarousel() {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/api/gallery/${slug}?t=${Date.now()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => {
          const getBaseName = (item) => {
            const name = item.public_id.split("/").pop();
            return name.replace(/\.(jpg|jpeg|png|mp4|webm)$/, "");
          };
          return getBaseName(a).localeCompare(getBaseName(b));
        });
        setSlides(sorted);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="jumbotron" className="jumbotron-section">
      <Carousel activeIndex={index} onSelect={handleSelect} fade controls={false} indicators={false}>
        {slides.map((slide, i) => (
          <Carousel.Item key={i} interval={5000}>
            {slide.resource_type === 'video' ? (
              <video
                className="d-block w-100 jumbotron-video"
                src={`https://res.cloudinary.com/dyxzzhzqs/video/upload/f_auto,q_auto/${slide.public_id}#t=0.1`}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={`https://res.cloudinary.com/dyxzzhzqs/image/upload/f_auto,q_auto/${slide.public_id}`}
                srcSet={`
                  https://res.cloudinary.com/dyxzzhzqs/image/upload/w_576,f_auto,q_auto/${slide.public_id} 576w,
                  https://res.cloudinary.com/dyxzzhzqs/image/upload/w_768,f_auto,q_auto/${slide.public_id} 768w,
                  https://res.cloudinary.com/dyxzzhzqs/image/upload/w_992,f_auto,q_auto/${slide.public_id} 992w,
                  https://res.cloudinary.com/dyxzzhzqs/image/upload/w_1200,f_auto,q_auto/${slide.public_id} 1200w,
                  https://res.cloudinary.com/dyxzzhzqs/image/upload/w_1600,f_auto,q_auto/${slide.public_id} 1600w
                `}
                sizes="(max-width: 575px) 576px,
                       (max-width: 767px) 768px,
                       (max-width: 991px) 992px,
                       (max-width: 1199px) 1200px,
                       1600px"
                className="d-block w-100 jumbotron-img"
                alt="Jumbotron Slide"
                loading="lazy"
              />
            )}

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
