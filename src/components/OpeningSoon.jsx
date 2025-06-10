import React from 'react';
import NotifyForm from './NotifyForm';
import '../styles/OpeningSoon.css';

import comingSoonVideo from '../assets/coming_soon.mp4';
import fallbackImage from '../assets/fallback.jpg';

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
        <img src={fallbackImage} alt="Opening Soon" />
      </video>


      <div className="content-overlay text-white">
        <div className="p-4 content-overlay-text text-center">
          <h1 className="coming-soon-title mb-3">We're Opening Soon!</h1>
          <p className="coming-soon-subtitle mb-4">
            Showers • Railings • Mirrors <br />
            Measurement • Manufacturing • Installation
          </p>
          <NotifyForm />
        </div>
      </div>

    </div>
  );
}

export default OpeningSoon;
