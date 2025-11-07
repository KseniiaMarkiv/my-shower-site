// src/components/QuoteSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/QuoteSection.css'; // You might need to create this CSS file

// WhatsApp Quote
const WA_PHONE = '18483528480';
const WA_TEXT  = 'Hi! I’d like a free quote for glass installation.';
const WA_URL   = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_TEXT)}`;

// Email Quote
const MAIL_TO = "mailto:myglassstyle@gmail.com";
const SUBJECT = "Request Quote";
const BODY = `Hi! I’d like a free quote for glass installation.

Project type: [shower / mirror / railing]
City:

Your question (optional):`;

const MAIL_URL = `${MAIL_TO}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;


const QuoteSection = ({ id }) => {
  return (
    <section id={id} className="quote-section py-5 bg-dark text-white d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="display-5 fw-bold mb-3">Get Your Free Quote</h2>
            <p className="lead mb-4 text-secondary">
              Ready to transform your space? Contact us now for a personalized quote or more information about our services!
            </p>
            <p className="d-block mt-2">
              <strong className="text-white fs-5">Tap “Request A Quote” </strong>
              <em className="ms-3">on WhatsApp to schedule your free measurement.</em>
            </p>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="light" className="me-3 quote-btn request pulse-button">Request A Quote</Button>
            </a>
            <a
              href={MAIL_URL}
              onClick={() => handleNavLinkClick && handleNavLinkClick()}
            >
              <Button
                variant="outline-light"
                className="quote-btn contact"
                title="Email us to request a quote"
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