// src/components/QuoteSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/QuoteSection.css'; // You might need to create this CSS file

function QuoteSection() {
  return (
    <section className="quote-section py-5 bg-dark text-white d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="display-5 fw-bold mb-3">Get Your Free Quote Today</h2>
            <p className="lead mb-4">
              Ready to transform your space? Contact us now for a personalized quote or more information about our services!
            </p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <Button variant="light" className="me-3 mb-2 mb-md-0 quote-btn request">Request A Quote</Button>
            <Button variant="outline-light quote-btn contact">Contact</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QuoteSection;