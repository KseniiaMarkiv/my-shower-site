import { useState } from 'react'
import './styles/App.css'
import CustomNavbar from './components/Navbar'
import JumbotronCarousel from './components/JumbotronCarousel'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import QuoteSection from './components/QuoteSection'
import OpeningSoon from './components/OpeningSoon'

import showerImg from './assets/services/shower.webp'
import mirrorImg from './assets/services/mirror.webp'
import railingImg from './assets/services/railing.webp'

// Data for your services sections
const mainServices = [
  {
    name: "Shower Installations That Elevate Your Bathroom",
    description: "Experience luxury and functionality with our custom shower solutions!",
    link: "#"
  },
  {
    name: "Mirror Installations for Style and Elegance",
    description: "Enhance your space with our stunning mirror designs.",
    link: "#"
  },
  {
    name: "Railing Installations for Safety and Aesthetics",
    description: "Our railings combine safety with modern design.",
    link: "#"
  },
];

const professionalServices = [
  {
    name: "Shower Installations Tailored to Your Needs",
    description: "Experience luxury and functionality with our custom shower solutions!",
    image: showerImg,
  },
  {
    name: "Stunning Mirror Installations for Every Space",
    description: "Enhance your taste and style with our stunning mirror designs.",
    image: mirrorImg,
  },
  {
    name: "Durable Railing Installations for Safety and Style",
    description: "Our railings combine safety with aesthetic appeal",
    image: railingImg,
  },
];

const isDev = import.meta.env.MODE === 'development';

export default function App() {
  const [showComingSoon, setShowComingSoon] = useState(!isDev);

  const renderDevToggle = () => {
    return isDev ? (
      <div className="dev-toggle-panel" style={{ top: 130 }}>
        <label style={{ marginRight: '0.5rem' }}>
          <strong>Show:</strong> {showComingSoon ? 'Coming Soon' : 'Full Site'}
        </label>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setShowComingSoon(prev => !prev)}
        >
          Toggle
        </button>
      </div>
    ) : null;
  };

  return (
    <>
      {renderDevToggle()}
      {showComingSoon ? (
        <OpeningSoon />
      ) : (
        <>
          <CustomNavbar />
          <JumbotronCarousel />
          <ServicesSection
            title="Explore Our Installation Services"
            subtitle="Transform your space with our expert installation services. From showers to mirrors and railings, we bring your vision to life."
            services={mainServices}
            showButtons={true}
          />
          <TestimonialSection />
          <ServicesSection
            title="Explore Our Professional Installation Services"
            subtitle="Transform your space with our expert installations. From showers to mirrors and railings, we bring your vision to life."
            services={professionalServices}
            showButtons={true}
          />
          <QuoteSection />
        </>
      )}
    </>
  );
}
