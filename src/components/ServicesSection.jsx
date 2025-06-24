import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import '../styles/ServicesSection.css';

function ServicesSection({ id, subheading, title, subtitle, services, showButtons = true }) {
  return (
    <section id={id} className="services-section py-5 my-5">
      <Container>
        <Row className="text-center mb-5">
          <Col className="d-flex flex-column align-items-center">
            {subheading && <p className="text-uppercase fw-bold text-muted mb-2 small">{subheading}</p>}
            <h2 className="display-4 fw-bold w-700 fs-1">{title}</h2>
            <p className="lead text-muted px-lg-5 w-900">{subtitle}</p>
          </Col>
        </Row>
        <Row className="justify-content-center my-4 g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="d-flex">
              <Card className="card-height shadow-sm border-0 flex-fill">
                <div className="service-icon-container text-center d-flex align-items-center justify-content-center">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="service-card-img"
                    />
                  ) : (
                    <div className="icon-inner-box d-flex align-items-center justify-content-center">
                      <i className="bi bi-box"></i>
                    </div>
                  )}
                </div>
                <Card.Body className="text-center pb-4 px-4">
                  <Card.Title className="fw-bold fs-5 mb-3">{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {showButtons && (
          <Row className="text-center py-5 my-4">
            <Col>
              <Button variant="outline-dark" href="#how-it-works" className="me-3">Learn More</Button>
              <a
                href="mailto:myglassstyle@gmail.com"
                onClick={() => {
                  console.log('Contact button clicked inside Services');
                }}
              >
                <Button
                  variant="outline-dark"
                  className="borderless-btn"
                >
                  Contact <i className="bi bi-chevron-right ms-2"></i>
                </Button>
              </a>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default ServicesSection;
