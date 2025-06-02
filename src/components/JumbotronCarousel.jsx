import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';

// Slide 1 (original cropped-jumbotron-slide-2.jpg)
import slideXXLImage1 from '../assets/xxl/jumbotron-slide-2.webp';
import slideXLImage1 from '../assets/xl/jumbotron-slide-2.webp';
import slideLGImage1 from '../assets/lg/jumbotron-slide-2.webp';
import slideMDImage1 from '../assets/md/jumbotron-slide-2.webp';
import slideSMImage1 from '../assets/sm/jumbotron-slide-2.webp';
import slideXSImage1 from '../assets/xs/jumbotron-slide-2.webp';

// Slide 2 (original cropped-jumbotron-slide-1.png)
import slideXXLImage2 from '../assets/xxl/jumbotron-slide-1.webp';
import slideXLImage2 from '../assets/xl/jumbotron-slide-1.webp';
import slideLGImage2 from '../assets/lg/jumbotron-slide-1.webp';
import slideMDImage2 from '../assets/md//jumbotron-slide-1.webp';
import slideSMImage2 from '../assets/sm/jumbotron-slide-1.webp';
import slideXSImage2 from '../assets/xs/jumbotron-slide-1.webp';

// Slide 3 (original cropped-jumbotron-slide-3.jpg)
import slideXXLImage3 from '../assets/xxl/jumbotron-slide-3.webp';
import slideXLImage3 from '../assets/xl/jumbotron-slide-3.webp';
import slideLGImage3 from '../assets/lg/jumbotron-slide-3.webp';
import slideMDImage3 from '../assets/md/jumbotron-slide-3.webp';
import slideSMImage3 from '../assets/sm/jumbotron-slide-3.webp';
import slideXSImage3 from '../assets/xs/jumbotron-slide-3.webp';

// Slide 4 (original cropped-jumbotron-slide-4.png)
import slideXXLImage4 from '../assets/xxl/jumbotron-slide-4.webp';
import slideXLImage4 from '../assets/xl/jumbotron-slide-4.webp';
import slideLGImage4 from '../assets/lg/jumbotron-slide-4.webp';
import slideMDImage4 from '../assets/md/jumbotron-slide-4.webp';
import slideSMImage4 from '../assets/sm/jumbotron-slide-4.webp';
import slideXSImage4 from '../assets/xs/jumbotron-slide-4.webp';

// Slide 5 (original cropped-jumbotron-slide-5.jpg)
import slideXXLImage5 from '../assets/xxl/jumbotron-slide-5.webp';
import slideXLImage5 from '../assets/xl/jumbotron-slide-5.webp';
import slideLGImage5 from '../assets/lg/jumbotron-slide-5.webp';
import slideMDImage5 from '../assets/md/jumbotron-slide-5.webp';
import slideSMImage5 from '../assets/sm/jumbotron-slide-5.webp';
import slideXSImage5 from '../assets/xs/jumbotron-slide-5.webp';

// Slide 6 (original cropped-jumbotron-slide-6.png)
import slideXXLImage6 from '../assets/xxl/jumbotron-slide-6.webp';
import slideXLImage6 from '../assets/xl/jumbotron-slide-6.webp';
import slideLGImage6 from '../assets/lg/jumbotron-slide-6.webp';
import slideMDImage6 from '../assets/md/jumbotron-slide-6.webp';
import slideSMImage6 from '../assets/sm/jumbotron-slide-6.webp';
import slideXSImage6 from '../assets/xs/jumbotron-slide-6.webp';



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
          <picture>
            <source srcSet={slideXSImage1} media="(max-width: 575.98px)" />
            <source srcSet={slideSMImage1} media="(min-width: 576px) and (max-width: 767.98px)" />
            <source srcSet={slideMDImage1} media="(min-width: 768px) and (max-width: 991.98px)" />
            <source srcSet={slideLGImage1} media="(min-width: 992px) and (max-width: 1199.98px)" />
            <source srcSet={slideXLImage1} media="(min-width: 1200px) and (max-width: 1399.98px)" />
            <img
              className="d-block w-100 jumbotron-img"
              src={slideXXLImage1}
              alt="First slide with custom installations"
            />
          </picture>
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
          <picture>
            <source srcSet={slideXSImage2} media="(max-width: 575.98px)" />
            <source srcSet={slideSMImage2} media="(min-width: 576px) and (max-width: 767.98px)" />
            <source srcSet={slideMDImage2} media="(min-width: 768px) and (max-width: 991.98px)" />
            <source srcSet={slideLGImage2} media="(min-width: 992px) and (max-width: 1199.98px)" />
            <source srcSet={slideXLImage2} media="(min-width: 1200px) and (max-width: 1399.98px)" />
            <img
              className="d-block w-100 jumbotron-img"
              src={slideXXLImage2}
              alt="Second slide featuring design flexibility"
            />
          </picture>
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
          <picture>
            <source srcSet={slideXSImage3} media="(max-width: 575.98px)" />
            <source srcSet={slideSMImage3} media="(min-width: 576px) and (max-width: 767.98px)" />
            <source srcSet={slideMDImage3} media="(min-width: 768px) and (max-width: 991.98px)" />
            <source srcSet={slideLGImage3} media="(min-width: 992px) and (max-width: 1199.98px)" />
            <source srcSet={slideXLImage3} media="(min-width: 1200px) and (max-width: 1399.98px)" />
            <img
              className="d-block w-100 jumbotron-img"
              src={slideXXLImage3}
              alt="Third slide featuring design flexibility"
            />
          </picture>
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
          <picture>
            <source srcSet={slideXSImage4} media="(max-width: 575.98px)" />
            <source srcSet={slideSMImage4} media="(min-width: 576px) and (max-width: 767.98px)" />
            <source srcSet={slideMDImage4} media="(min-width: 768px) and (max-width: 991.98px)" />
            <source srcSet={slideLGImage4} media="(min-width: 992px) and (max-width: 1199.98px)" />
            <source srcSet={slideXLImage4} media="(min-width: 1200px) and (max-width: 1399.98px)" />
            <img
              className="d-block w-100 jumbotron-img"
              src={slideXXLImage4}
              alt="Fourth slide featuring design flexibility"
            />
          </picture>
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
          <picture>
            <source srcSet={slideXSImage5} media="(max-width: 575.98px)" />
            <source srcSet={slideSMImage5} media="(min-width: 576px) and (max-width: 767.98px)" />
            <source srcSet={slideMDImage5} media="(min-width: 768px) and (max-width: 991.98px)" />
            <source srcSet={slideLGImage5} media="(min-width: 992px) and (max-width: 1199.98px)" />
            <source srcSet={slideXLImage5} media="(min-width: 1200px) and (max-width: 1399.98px)" />
            <img
              className="d-block w-100 jumbotron-img"
              src={slideXXLImage5}
              alt="Fifth slide featuring design flexibility"
            />
          </picture>
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
          <picture>
            <source srcSet={slideXSImage6} media="(max-width: 575.98px)" />
            <source srcSet={slideSMImage6} media="(min-width: 576px) and (max-width: 767.98px)" />
            <source srcSet={slideMDImage6} media="(min-width: 768px) and (max-width: 991.98px)" />
            <source srcSet={slideLGImage6} media="(min-width: 992px) and (max-width: 1199.98px)" />
            <source srcSet={slideXLImage6} media="(min-width: 1200px) and (max-width: 1399.98px)" />
            <img
              className="d-block w-100 jumbotron-img"
              src={slideXXLImage6}
              alt="Sixth slide featuring design flexibility"
            />
          </picture>
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