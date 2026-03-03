import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import JumbotronCarousel from './components/JumbotronCarousel';
import'./styles/ConstructionPartnership.css';

import houseIcon from "./assets/120x83house.png";
import commerceIcon from "./assets/120x120commerce.png";


export default function ConstructionPartnership() {
  return (
  <div>
    <JumbotronCarousel slug="Jumbotron">
      <div className="construction-hero">
        <h1 className="jumbotron-title">Partner With MyGlassStyle</h1>

        <div className="row g-4 mt-4">
          <div className="col-12 col-md-5 jumbotron-buttons">
            <div className="text-white mb-4 d-flex flex-column align-items-start">
              <img src={houseIcon} alt="Homeowners" className="ref-icon" />
              <strong className="jumbotron-text ref-label">
                For Homeowners &amp; Individuals
              </strong>
            </div>

            <Button
              as={Link}
              to="/homeowners-and-individuals"
              variant="light"
              className="bounce-anim mt-3"
            >
              Earn With Referrals
            </Button>
          </div>

          <div className="col-12 col-md-5 jumbotron-buttons">
            <div className="text-white mb-4 d-flex flex-column align-items-start">
              <img src={commerceIcon} alt="Builders" className="ref-icon" />
              <strong className="jumbotron-text ref-label">
                For Builders &amp; Construction Partners
              </strong>
            </div>

            <Button
              as={Link}
              to="/builders-and-construction-partners"
              variant="light"
              className="bounce-anim mt-3"
            >
              Partnership Program
            </Button>
          </div>
        </div>
      </div>
    </JumbotronCarousel>
  </div>
  );
}
