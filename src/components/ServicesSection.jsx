import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

import '../styles/ServicesSection.css';

function ServicesSection({ subheading, title, subtitle, services, showButtons = true }) {
  return (
    <section className="services-section py-5 my-5">
      <Container>
        <Row className="text-center mb-5">
          <Col className="d-flex flex-column align-items-center">
            {subheading && <p className="text-uppercase fw-bold text-muted mb-2 small">{subheading}</p>}
            <h2 className="display-4 fw-bold w-700">{title}</h2>
            <p className="lead text-muted px-lg-5 w-900">{subtitle}</p>
          </Col>
        </Row>
        <Row className="justify-content-center g-4 my-5">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="d-flex">
              <Card className="shadow-sm border-0 flex-fill">
                <div className="service-icon-container text-center d-flex align-items-center justify-content-center">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="service-card-img"
                    />
                  ) : (
                    <div className="icon-inner-box d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faCube} className="fs-1 text-secondary-emphasis" />
                    </div>
                  )}
                </div>
                <Card.Body className="text-center pb-4">
                  <Card.Title className="fw-bold fs-4 mb-3">{service.name}</Card.Title>
                  <Card.Text className="text-muted small">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {showButtons && (
          <Row className="text-center py-5 my-5">
            <Col>
              <Button variant="outline-dark" className="me-3">Learn More</Button>
              <Button variant="outline-dark" className="borderless-btn">
                Contact <i className="bi bi-chevron-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default ServicesSection;
