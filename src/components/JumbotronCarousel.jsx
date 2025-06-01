import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';

import slideImage1 from '../assets/cropped-jumbotron-slide-2.jpg';
import slideImage2 from '../assets/cropped-jumbotron-slide-1.png';
import slideImage3 from '../assets/cropped-jumbotron-slide-3.jpg';
import slideImage4 from '../assets/cropped-jumbotron-slide-4.png';
import slideImage5 from '../assets/cropped-jumbotron-slide-5.jpg';
import slideImage6 from '../assets/cropped-jumbotron-slide-6.png';


function JumbotronCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="jumbotron-section">
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true} controls={false} indicators={false}>
        {/* Carousel Item 1: Image with Text Overlay */}
        <Carousel.Item interval={5000}> {/* Auto-switch every 5 seconds */}
          <img
            className="d-block w-100 jumbotron-img"
            src={slideImage1}
            alt="First slide with custom installations"
          />
          <Carousel.Caption className="jumbotron-caption">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8} md={10}>
                    <h3 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h3>
                    <p className="jumbotron-text mb-4 fs-6">
                      Enhance the beauty and functionality of your home or business with our expert installation services. From showers to mirrors and runs, we bring your vision to life.
                    </p>
                    <div className="jumbotron-buttons">
                      <Button variant="light" className="btn-learn-more me-3">
                        Learn More
                      </Button>
                      <Button variant="outline-light" className="btn-contact-us">
                        Contact
                      </Button>
                    </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 jumbotron-img"
            src={slideImage2}
            alt="Second slide featuring design flexibility"
          />
          <Carousel.Caption className="jumbotron-caption">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8} md={10}>
                  <h3 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h3>
                  <p className="jumbotron-text mb-4 fs-6">
                    Enhance the beauty and functionality of your home or business with our expert installation services. From showers to mirrors and runs, we bring your vision to life.
                  </p>
                  <div className="jumbotron-buttons">
                    <Button variant="light" className="btn-learn-more me-3">
                      Learn More
                    </Button>
                    <Button variant="outline-light" className="btn-contact-us">
                      Contact
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 jumbotron-img"
            src={slideImage3}
            alt="Second slide featuring design flexibility"
          />
          <Carousel.Caption className="jumbotron-caption">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8} md={10}>
                  <h3 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h3>
                  <p className="jumbotron-text mb-4 fs-6">
                    Enhance the beauty and functionality of your home or business with our expert installation services. From showers to mirrors and runs, we bring your vision to life.
                  </p>
                  <div className="jumbotron-buttons">
                    <Button variant="light" className="btn-learn-more me-3">
                      Learn More
                    </Button>
                    <Button variant="outline-light" className="btn-contact-us">
                      Contact
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 jumbotron-img"
            src={slideImage4}
            alt="Second slide featuring design flexibility"
          />
          <Carousel.Caption className="jumbotron-caption">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8} md={10}>
                  <h3 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h3>
                  <p className="jumbotron-text mb-4 fs-6">
                    Enhance the beauty and functionality of your home or business with our expert installation services. From showers to mirrors and runs, we bring your vision to life.
                  </p>
                  <div className="jumbotron-buttons">
                    <Button variant="light" className="btn-learn-more me-3">
                      Learn More
                    </Button>
                    <Button variant="outline-light" className="btn-contact-us">
                      Contact
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 jumbotron-img"
            src={slideImage5}
            alt="Second slide featuring design flexibility"
          />
          <Carousel.Caption className="jumbotron-caption">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8} md={10}>
                  <h3 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h3>
                  <p className="jumbotron-text mb-4 fs-6">
                    Enhance the beauty and functionality of your home or business with our expert installation services. From showers to mirrors and runs, we bring your vision to life.
                  </p>
                  <div className="jumbotron-buttons">
                    <Button variant="light" className="btn-learn-more me-3">
                      Learn More
                    </Button>
                    <Button variant="outline-light" className="btn-contact-us">
                      Contact
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 jumbotron-img"
            src={slideImage6}
            alt="Second slide featuring design flexibility"
          />
          <Carousel.Caption className="jumbotron-caption">
            <Container>
              <Row className="justify-content-start">
                <Col lg={8} md={10}>
                  <h3 className="fs-1 jumbotron-title mb-4">Transform Your Space With Custom Installations</h3>
                  <p className="jumbotron-text mb-4 fs-6">
                    Enhance the beauty and functionality of your home or business with our expert installation services. From showers to mirrors and runs, we bring your vision to life.
                  </p>
                  <div className="jumbotron-buttons">
                    <Button variant="light" className="btn-learn-more me-3">
                      Learn More
                    </Button>
                    <Button
                      variant="outline-dark" 
                      className="btn-contact-us" 
                    >
                      Contact
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default JumbotronCarousel;