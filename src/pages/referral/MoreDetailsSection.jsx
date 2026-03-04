import React from 'react';
import { Button } from 'react-bootstrap';

export default function MoreDetailsSection() {
  return (
    <section id="home-ref-details" className="container py-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <h2>More Details</h2>
          <p>
            The referral program rewards people who recommend MyGlassStyle for shower
            and glass projects. Rewards are issued after project completion and eligibility
            checks. Visit the referral submission form to provide details about the person
            you referred and the project.
          </p>
        </div>

        <div className="col-12 col-md-4 d-flex align-items-center">
          <Button
            href="https://forms.gle/Msag9tCogpx8JuSu5"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-100"
          >
            Submit a Referral
          </Button>
        </div>
      </div>
    </section>
  );
}
