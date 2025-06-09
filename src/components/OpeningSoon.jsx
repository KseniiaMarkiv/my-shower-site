import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/OpeningSoon.css';
import comingSoonVideo from '../assets/coming_soon.mp4';

const backgroundVideoSrc = comingSoonVideo;

function OpeningSoon() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Notify Me button clicked!");
  };

  return (
    <div className="coming-soon-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay text-white">
        <div className="p-4 content-overlay-text text-center">
          <h1 className="coming-soon-title mb-3">We're Opening Soon!</h1>
          <p className="coming-soon-subtitle mb-4">
            Showers • Railings • Mirrors <br />
            Measurement • Manufacturing • Installation
          </p>

          <Form onSubmit={handleSubmit} className="email-form w-100">
            <Form.Group className="d-flex flex-column flex-sm-row w-100" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email to stay updated"
                className="email-input mb-2 mb-sm-0"
                required
              />
              <Button variant="primary" type="submit" className="notify-button" size="sm">
                Notify Me
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>

    </div>
  );
}

export default OpeningSoon;
