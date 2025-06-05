import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/TestimonialSection.css';

import WebflowLogo from '../assets/webflow-logo.svg';

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: "“The installation team was professional and exceeded our expectations. Our new shower looks stunning and functions perfectly!”",
      author: "Emily Johnson",
      title: "Homeowner, Residential",
      avatar: "https://via.placeholder.com/80x80?text=Avatar"
    },
    {
      id: 2,
      quote: "“Their attention to detail and commitment to quality truly stood out. Our new mirrors are a work of art!”",
      author: "Michael Smith",
      title: "Client",
      avatar: "https://via.placeholder.com/80x80?text=Avatar"
    },
    {
      id: 3,
      quote: "“From concept to completion, the railing installation was seamless. Impressed by the craftsmanship!”",
      author: "Jessica Davis",
      title: "Project Manager",
      avatar: "https://via.placeholder.com/80x80?text=Avatar"
    },
  ];

  return (
    <section className="testimonial-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="webflow-logo-container mb-5">
              <img src={WebflowLogo} alt="Webflow Logo" className="webflow-logo" />
            </div>

            <Carousel
              controls={true}
              indicators={true}
              interval={7000}
              fade={false}
              prevIcon={<i className="bi bi-arrow-left fs-4 arrows" />}
              nextIcon={<i className="bi bi-arrow-right fs-4 arrows" />}
            >
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <div className="testimonial-content d-inline-block mx-auto text-center">
                    <p className="testimonial-quote mb-5">
                      {testimonial.quote}
                    </p>

                    <div className="testimonial-avatar-placeholder d-flex align-items-center justify-content-center mx-auto mb-0">
                      <div className="avatar-inner-circle">
                        <i className="bi bi-person-circle fs-1"></i>
                      </div>
                    </div>

                    <p className="testimonial-author fw-bold my-0 fs-6">{testimonial.author}</p>
                    <p className="testimonial-title text-muted fs-6">{testimonial.title}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialSection;
