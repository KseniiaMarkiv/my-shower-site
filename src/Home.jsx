import JumbotronCarousel from './components/JumbotronCarousel'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import QuoteSection from './components/QuoteSection'
import HowItWorksSection from './components/HowItWorksSection.jsx'
import PortfolioSection from './components/PortfolioSection.jsx'

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
    description: "We professionally install mirrors of any size to match your interior vision — no matter the style.",
    link: "#"
  },
  {
    name: "Railing Installations for Safety and Aesthetics",
    description: "We install railings that match your space — indoors & outdoors — strong, safe, and built to last.",
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

export default function Home() {
  return (
    <>
      <JumbotronCarousel id="jumbotron" />
      <ServicesSection
        id="services-professional"
        title="Explore Our Professional Installation Services with Tempered Glass"
        subtitle="Transform your space with our expert installations. From showers to mirrors and railings, we bring your vision to life."
        services={professionalServices}
        showButtons={true}
      />
      <HowItWorksSection />
      <TestimonialSection id="testimonials" />
      <ServicesSection
        id="services-short"
        className="py-5 my-5"
        title="Explore Our Installation Services"
        subtitle="Transform your space with our expert installation services. From showers to mirrors and railings, we bring your vision to life."
        services={mainServices}
        showButtons={true}
      />
      <PortfolioSection id="portfolio" />
      <QuoteSection id="quote" />
    </>
  );
}