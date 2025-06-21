// src/components/QuoteSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/QuoteSection.css'; // You might need to create this CSS file

const QuoteSection = ({ id }) => {
  return (
    <section id={id} className="quote-section py-5 bg-dark text-white d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="display-5 fw-bold mb-3">Get Your Free Quote</h2>
            <p className="lead mb-4">
              Ready to transform your space? Contact us now for a personalized quote or more information about our services!
            </p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <Button variant="light" className="me-3 quote-btn request">Request A Quote</Button>
            <a
              href="mailto:myglassstyle@gmail.com"
              onClick={() => {
                console.log('Contact button clicked inside Services');
              }}
            >
              <Button
                variant="outline-light"
                className="quote-btn contact"
              >
                Contact
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QuoteSection;