import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/JumbotronCarousel.css';

// ─── 1a. Desktop local images: src/assets/jumbotron/*.{ext} ──────────────────
const desktopModules = import.meta.glob(
  '/src/assets/jumbotron/*.{jpg,jpeg,png,webp,gif,svg}',
  { eager: true }
);

// ─── 1b. Mobile local images: src/assets/jumbotron/mobile/*.{ext} ────────────
const mobileModules = import.meta.glob(
  '/src/assets/jumbotron/mobile/*.{jpg,jpeg,png,webp,gif,svg}',
  { eager: true }
);

// Helper: convert a Vite glob result → sorted slides array
const toSlides = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => ({
      url: mod.default,
      name: path.split('/').pop(),
      source: 'local',
      hideCaption: true, // hide caption for slides from local jumbotron folders
    }));

const desktopSlides = toSlides(desktopModules);
const mobileSlides = toSlides(mobileModules);

// ─── 2. Pick correct local set based on screen width ─────────────────────────
const getLocalSlides = () => {
  const onMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  return onMobile && mobileSlides.length > 0 ? mobileSlides : desktopSlides;
};

function JumbotronCarousel({ slug, children }) {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState(getLocalSlides);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  useEffect(() => {
    if (!slug) return;

    sessionStorage.removeItem(`jumbotron-${slug}`);

    const url = `${import.meta.env.VITE_API_URL}/api/gallery/${slug}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const remoteSlides = [...data]
          .sort((a, b) => {
            const nameA = a.name?.toLowerCase() || '';
            const nameB = b.name?.toLowerCase() || '';
            return nameA.localeCompare(nameB);
          })
          .map((slide) => ({
            ...slide,
            source: 'remote',
            hideCaption: false,
          }));

        setSlides([...getLocalSlides(), ...remoteSlides]);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <div
      id="jumbotron"
      className={`jumbotron-section ${children ? 'jumbotron-section--child' : ''}`}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        controls={false}
        indicators={false}
      >
        {slides.map((slide, i) => {
          const shouldShowCaption = !slide.hideCaption;

          return (
            <Carousel.Item key={i} interval={5000}>
              <div
                className={`jumbotron-media ${
                  slide.source === 'local'
                    ? 'jumbotron-media--local'
                    : 'jumbotron-media--remote'
                }`}
                style={{ '--bg-image': `url(${slide.url})` }}
              >
                <img
                  src={slide.url}
                  alt={slide.name}
                  className={`d-block w-100 ${
                    slide.source === 'local'
                      ? 'jumbotron-img jumbotron-img--local'
                      : 'jumbotron-img jumbotron-img--remote'
                  }`}
                  loading="lazy"
                />
              </div>

              {shouldShowCaption && (
                <Carousel.Caption
                  className={`jumbotron-caption ${
                    children ? 'jumbotron-caption--custom' : ''
                  }`}
                >
                  {children ? (
                    <div className="jumbotron-custom-content">{children}</div>
                  ) : (
                    <Container>
                      <Row className="justify-content-start">
                        <Col lg={8} md={10}>
                          <h1 className="jumbotron-title">
                            Residential & Commercial Tempered Glass Installation & Service in NJ
                          </h1>
                          <p className="jumbotron-text mb-4">
                            Enhance the beauty and functionality of your home or business with our
                            expert installation services. From showers to mirrors and railings, we
                            bring your vision to life.
                          </p>
                          <div className="jumbotron-buttons">
                            <Button
                              variant="light"
                              href="#how-it-works"
                              className="btn-learn-more me-3"
                            >
                              Learn More
                            </Button>
                            <a href="mailto:myglassstyle@gmail.com">
                              <Button variant="outline-light" className="btn-contact-us">
                                Contact
                              </Button>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  )}
                </Carousel.Caption>
              )}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default JumbotronCarousel;