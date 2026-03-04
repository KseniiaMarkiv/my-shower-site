import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import HowItWorksSection from './referral/HowItWorksSection';
import MoreDetailsSection from './referral/MoreDetailsSection';

import heroImage from "../assets/HomeownersAndIndividuals.jpg";
import "../styles/ConstructionPartnership.css";

export default function HomeownersAndIndividuals() {
  return (
    <div>
      <div className="referral-hero-section">
        <img src={heroImage} alt="Homeowners referral" className="referral-hero-img" />

        <div className="referral-hero-overlay">
          <div className="referral-hero-content">
            <h1 className="referral-hero-title">
              Know Someone Planning a Shower or Glass Project?
            </h1>

            <p className="referral-hero-subtitle">
              If you've ever recommended MyGlassStyle to a neighbor, friend, or colleague -
              now your recommendation can come with a thank-you reward.
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap hero-btn-group">
              <Button
                href="https://forms.gle/Msag9tCogpx8JuSu5"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="bounce-anim mt-3"
              >
                Submit a Referral
              </Button>
              <Button
                href="#how-it-works"
                variant="outline-light"
                className="bounce-anim mt-3"
              >
                How It Works
              </Button>

              <Button
                href="#home-ref-details"
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
        <HowItWorksSection />
        <MoreDetailsSection />
      </div>
    </div>
  );
}
