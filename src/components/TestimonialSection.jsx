import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/TestimonialSection.css';

import GoogleLogo from '../assets/google-my-business.svg';

function TestimonialSection() {
const testimonials = [
  {
    id: 1,
    quote: "“The frameless shower installation completely transformed our bathroom. The quality and attention to detail really stood out.”",
    author: "Sample Client",
    title: "Residential Project, Lakewood NJ",
    avatar: "https://via.placeholder.com/80x80?text=SC"
  },
  {
    id: 2,
    quote: "“We needed custom mirrors for a salon remodel. The team was easy to work with and delivered beautiful results.”",
    author: "Sample Business Owner",
    title: "Commercial Interior, Cherry Hill NJ",
    avatar: "https://via.placeholder.com/80x80?text=BO"
  },
  {
    id: 3,
    quote: "“Our new glass railings on the balcony look sleek and feel super sturdy. Great upgrade to our space!”",
    author: "Sample Homeowner",
    title: "Exterior Project, Jersey City NJ",
    avatar: "https://via.placeholder.com/80x80?text=HO"
  },
  {
    id: 4,
    quote: "“Custom mirror wall was installed perfectly and added so much light to our hallway. Will definitely use again.”",
    author: "Sample Testimonial",
    title: "Residential Client, Edison NJ",
    avatar: "https://via.placeholder.com/80x80?text=TC"
  },
  {
    id: 5,
    quote: "“Ми замовили матове скло для душової. Все пройшло чітко за термінами. Гарно, зручно та безпечно.”",
    author: "Приклад клієнта",
    title: "Демонстраційний відгук, Howell NJ",
    avatar: "https://via.placeholder.com/80x80?text=PK"
  }
];


  return (
    <section className="testimonial-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="google-logo-container mb-3">
              <img src={GoogleLogo} alt="Google Business Logo" className="google-logo" />
            </div>

            <Carousel
              controls={true}
              indicators={true}
              interval={7000}
              fade={false}
              prevIcon={<i className="bi bi-arrow-left arrows" />}
              nextIcon={<i className="bi bi-arrow-right arrows" />}
            >
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <div className="testimonial-content d-inline-block mx-auto text-center">
                    <p className="testimonial-quote mb-0">{testimonial.quote}</p>

                    <div className="testimonial-avatar-placeholder d-flex align-items-center justify-content-center mx-auto">
                      <div className="avatar-inner-circle">
                        <i className="bi bi-person-circle fs-1"></i>
                      </div>
                    </div>

                    <div className="spacer" />

                    <div className="testimonial-meta">
                      <p className="testimonial-author fw-bold my-0 fs-6">{testimonial.author}</p>
                      <p className="testimonial-title text-muted fs-6">{testimonial.title}</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8} className="text-center">
            <p className="fs-6 feedback-request">
             <span className="fs-4"> 📝 </span> 
             We would be <span className="fs-5"> very grateful </span> 
             if you could leave your feedback after our work is completed, and we will post it here.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialSection;
