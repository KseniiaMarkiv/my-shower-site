import '../styles/AboutUsAndFooter.css';

export default function AboutUsAndFooter() {
  return (
    <footer id="about-us" className="footer-white pt-5 pb-4 my-5">
      <div className="container">

        {/* === ABOUT TEXT === */}
        <div className="mb-4">
          <h4 className="text-dark mb-3">About MyGlassStyle</h4>
          <p className="text-muted mb-0">
            We specialize in custom installation of tempered glass showers, mirrors, railings, and more. Our mission is to bring modern elegance to every space.  
            We work with premium-grade glass and hardware to ensure durability, safety, and sleek aesthetics in every project.  
            All products are custom-made to fit your space, with careful attention to detail from measurement to installation.  
            Whether it's a residential bathroom or a commercial railing, we deliver precision, quality, and style.

          </p>
        </div>

        <hr className="my-4 border-secondary" />

        {/* === COPYRIGHT + DEVELOPER === */}
        <div className="row">
          <div className="col-md-6 mb-5">
            <p className="mb-0 text-dark">
              © <span className="mx-1">2025</span> MyGlassStyle.
              <span className="ms-2">All rights reserved.</span>
            </p>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <p className="mb-0 text-dark">
              <a
                href="https://www.linkedin.com/in/kseniiamarkiv/"
                className="text-dark link-offset-2 link-underline link-underline-opacity-25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-code-slash me-2"></i>
                <span className="me-1">by</span> Kseniia Markiv
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
