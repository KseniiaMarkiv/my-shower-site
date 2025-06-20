import '../styles/AboutUsAndFooter.css';

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
              <strong className="text-decoration-underline">MyGlassStyle</strong> specializes in the custom installation of tempered glass showers, railings, mirrors, and shelving.
              We work with premium-grade glass and hardware to ensure strength, safety, and sleek aesthetics in every project. <br /><br />
              From clear to frosted glass, all products are made to order. We take pride in delivering clean, precise, and punctual service — always with attention to detail.
            </p>
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
                  href="sms:+17328142159"
                  className="text-muted text-decoration-none"
                >
                  (732) 814-21-59
                </a>
              </li>
              <li><i className="bi bi-geo-alt me-2"></i>New Jersey, USA</li>
            </ul>
          </div>
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
