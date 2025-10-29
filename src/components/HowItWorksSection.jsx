import React, { useRef, useEffect, useState } from 'react';
import '../styles/HowItWorksSection.css';

const steps = [
  {
    title: 'Contact Us',
    description: 'Reach out via phone, website, or messenger — whichever is most convenient for you.',
    icon: 'bi-telephone',
  },
  {
    title: 'Schedule Measurement',
    description: 'We agree on a suitable time and send a technician for accurate measurements.',
    icon: 'bi-calendar-event',
  },
  {
    title: 'Get a Quote',
    description: 'You receive a transparent quote with full material and labor details.',
    icon: 'bi-receipt',
  },
  {
    title: '50% Prepayment',
    description: '50% deposit after contract signing to secure your order and start glass production.',
    icon: 'bi-cash-coin',
  },
  {
    title: 'Production (7 Business Days)',
    description: 'Your custom order goes into production. Takes approx. 7 business days.',
    icon: 'bi-tools',
  },
  {
    title: 'Schedule Installation',
    description: 'We set a convenient date for installing your shower, mirror, or railing.',
    icon: 'bi-truck',
  },
  {
    title: 'Final Payment & Satisfaction',
    description: 'Pay the remaining 50% after you approve the final result.',
    icon: 'bi-hand-thumbs-up',
  },
];

export default function HowItWorksSection() {
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stepPositions = stepRefs.current.map((ref) => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.top;
      });

      const current = stepPositions.findIndex((top) => top > window.innerHeight / 2);
      setActiveStep(current === -1 ? steps.length - 1 : Math.max(0, current - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" className="py-5">
      <div className="container text-center pb-5">
        <h2 className="mb-4 display-5 fw-bold">How It Works</h2>
        <p className="mb-5 fs-5">Step-by-step overview of how we handle your project, from measurement to installation.</p>
        <div className="how-steps-timeline pt-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-row ${index === activeStep ? 'active' : ''} ${index % 2 === 1 ? 'reverse' : ''}`}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-left">
                    <div className="timeline-icon-box">
                      <i className={`bi ${step.icon}`}></i>
                    </div>
                  </div>
                  <div className="timeline-line-container">
                    {index !== steps.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-right">
                    <div className="timeline-header">
                      <div className="timeline-circle mb-md-4">{index + 1}</div>
                      <div className="text-start">
                        <h4 className="timeline-title mb-md-3 fs-3">{step.title}</h4>
                        <p className="timeline-desc">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-right">
                    <div className="timeline-header">
                      <div className="timeline-circle mb-md-4">{index + 1}</div>
                      <div className="text-start">
                        <h4 className="timeline-title mb-md-3 fs-3">{step.title}</h4>
                        <p className="timeline-desc">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-line-container">
                    {index !== steps.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-left">
                    <div className="timeline-icon-box">
                      <i className={`bi ${step.icon}`}></i>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
