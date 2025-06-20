import '../styles/PortfolioSection.css';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="pb-5">
      <div className="container text-center">
        <h2 className="display-4 mt-4 fw-bold">Our Work</h2>
        <p className="mb-4">See some of our recent shower, mirror, and railing installations.</p>
          <img src="https://dummyimage.com/1200x550/cccccc/000000&text=Image+Coming+Soon" className="img-fluid" alt="Placeholder image for project"></img>
      </div>
    </section>
  );
}
