import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import BuildersHowItWorksSection from './referral/BuildersHowItWorksSection';
import BuildrsMoreDetailsSection from './referral/BuildersMoreDetailsSection';
import FaqSection from './referral/FaqSection';

import heroImage from "../assets/BuildersAndConstructionPartners.webp";
import "../styles/ConstructionPartnership.css";

export default function BuildersAndConstructionPartners() {
  return (
    <div>
      <div className="referral-hero-section">
        <img src={heroImage} alt="Homeowners referral" className="referral-hero-img" />

        <div className="referral-hero-overlay">
          <div className="referral-hero-content">
            <h1 className="referral-hero-title">
              Need a Reliable Glass Installation Partner?
            </h1>

            <p className="referral-hero-subtitle">
              If you're a contractor, builder, designer, or property manager - 
              MyGlassStyle can support your projects with professional glass installation, fast estimates, and flexible collaboration.
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap hero-btn-group">
              <Button
                href={`mailto:myglassstyle@gmail.com?subject=Partnership%20Program%20Inquiry&body=IMPORTANT:%0AIf%20you%20have%20drawings%2C%20pictures%2C%20or%20plans%2C%20please%20attach%20them%20to%20this%20email.%20It%20helps%20us%20review%20your%20request%20and%20respond%20faster.%0A%0AIf%20some%20information%20is%20not%20available%20yet%2C%20you%20can%20leave%20it%20blank.%20We%20will%20review%20your%20message%20and%20follow%20up%20if%20additional%20details%20are%20needed.%0A%0A1)%20I%20AM:%0A%5B%20%5D%20General%20contractor%0A%5B%20%5D%20Builder%0A%5B%20%5D%20Designer%0A%5B%20%5D%20Property%20manager%0A%5B%20%5D%20Other%0A%0A2)%20PROJECT%20TYPE:%0A%5B%20%5D%20Shower%0A%5B%20%5D%20Glass%20railing%0A%5B%20%5D%20Mirror%0A%5B%20%5D%20Glass%20shelving%0A%5B%20%5D%20Glass%20tabletop%0A%5B%20%5D%20Other%20custom%20glass%20project%0A%0A3)%20PROJECT%20DETAILS:%0AWidth%20(inches)%20-%0AHeight%20(inches)%20-%0ACount%20-%0AZIP%20code%20of%20the%20project%20-%0A%0A4)%20TIMELINE%20(optional):%0A%5B%20%5D%20ASAP%0A%5B%20%5D%201%E2%80%932%20weeks%0A%5B%20%5D%201%20month%0A%5B%20%5D%20Planning%20stage%0A%0A5)%20YOUR%20QUESTION%20(optional):`}
                variant="light"
                className="bounce-anim mt-3"
              >
                Contact for Information
              </Button>

              <Button
                href="#how-it-works"
                variant="outline-light"
                className="bounce-anim mt-3"
              >
                How It Works
              </Button>

              <Button
                href="#builder-more-details"
                variant="outline-light"
                className="bounce-anim mt-3"
              >
                More Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="referral-sections">
        <BuildersHowItWorksSection />
        <BuildrsMoreDetailsSection />
      </div>

      <FaqSection />
    </div>
  );
}
