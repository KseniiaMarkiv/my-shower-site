import { useState } from 'react'
import './styles/App.css'
import CustomNavbar from './components/Navbar'
import JumbotronCarousel from './components/JumbotronCarousel'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import QuoteSection from './components/QuoteSection'

import { Stack, Button } from 'react-bootstrap';

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

export default function App() {
  return (
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

      <QuoteSection />

      <h1>Hello</h1>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <p className="fs-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, amet facilis.
      </p>
    </>
  );
}
