import '../styles/AboutUsAndFooter.css';
import LinkedInBadges from "../components/LinkedInBadges";


export default function AboutUsAndFooter() {
  return (
    <footer id="about-us" className="footer-white pt-5 pb-4 my-5">
      <div className="container">

        {/* === ABOUT + CONTACT SPLIT === */}
        <div className="row mb-4">
          {/* === ABOUT US === */}
          <div className="col-md-8 pe-5 mb-4 about-us-div text-lg-start text-md-center">
            <h4 className="text-dark mb-3">About MyGlassStyle</h4>
            <p className="text-muted mb-0">
              Glass installation & services are provided by <strong>MyGlassStyle</strong> - a New Jersey brand managed by <strong className="text-decoration-underline">Kseniia Markiv</strong> and supported by a lead specialist with 
              2 years of U.S. glass installation experience and 15+ years in international construction.  
              We specialize in the custom installation of tempered glass showers, railings, mirrors, and shelving. 
              Using premium-grade glass and hardware to ensure strength, safety, and sleek aesthetics in every project. <br /><br />
              From clear to Starfire glass, all products are made to order. We take pride in delivering clean, precise, and punctual service - always with attention to detail.
            </p><br />
            <strong>Licensed NJ Home Improvement Contractor — HIC #13VH13832500</strong>
          </div>

          {/* === CONTACT US === */}
          <div className="col-md-4 mb-4">
            <h4 className="text-dark mb-3">Contact Us</h4>
            <p className="text-muted mb-3">
              You got a project in mind and you need a free measurement? <br /> Reach out today!
            </p>
            <ul className="list-unstyled text-muted">
              <li><i className="bi bi-envelope me-2"></i>
                <a
                  href="mailto:myglassstyle@gmail.com"
                  className="text-muted text-decoration-none"
                >
                  myglassstyle@gmail.com
                </a>
              </li>
              <li><i className="bi bi-telephone me-2"></i>
                <a
                  href="sms:+18483528480"
                  className="text-muted text-decoration-none"
                >
                  (848) 352-84-80
                </a>
              </li>
              <li><i className="bi bi-geo-alt me-2"></i>New Jersey, USA</li>
            </ul>

            {/* === SOCIAL === */}
            <div className="mt-4 text-md-end text-center">
              <h6 className="text-dark mb-2 me-3">Find us on</h6>

              <div className="d-inline-flex align-items-center gap-3 fs-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/myglassstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MyGlassStyle on LinkedIn"
                  className="text-muted social-icon"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@myglassstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MyGlassStyle on YouTube"
                  className="text-muted social-icon"
                  title="YouTube"
                >
                  <i className="bi bi-youtube"></i>
                </a>

                {/* TikTok (use Bootstrap Icon if available, otherwise inline SVG fallback) */}
                <a
                  href="https://www.tiktok.com/@myglassstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MyGlassStyle on TikTok"
                  className="text-muted social-icon"
                  title="TikTok"
                >
                  {/* Try Bootstrap Icon first */}
                  <i className="bi bi-tiktok d-inline-block" style={{ lineHeight: 1 }}></i>

                </a>
              </div>
              {/* === LinkedIn profile previews + expandable badges === */}
              <LinkedInBadges />
            </div>

          </div>
        </div>

        <hr className="my-4 border-secondary" />

        {/* === COPYRIGHT + DEVELOPER === */}
        <div className="row">
          <div className="col-md-6 mb-5">
            <p className="mb-0 text-dark">
              © <span className="mx-1">2025</span> MyGlassStyle | Kseniia Markiv. 
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
