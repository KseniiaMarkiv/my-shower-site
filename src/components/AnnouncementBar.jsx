import { Link } from 'react-router-dom'

// WhatsApp April Installation
const WA_PHONE = '18483528480';
const WA_TEXT  = "Hi, I'd like to reserve an April installation spot. My ZIP code is ";
const WA_URL   = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_TEXT)}`;

export default function AnnouncementBar() {
const topText = (
  <>
    <span className="announcement-desktop-text">
      Early April Installation Openings
      <span className="announcement-dot">•</span>
      April 2–4
      <span className="announcement-dot">•</span>
      April 6–8
      <span className="announcement-dot">•</span>
      Contact Us Now to Secure a Spot
    </span>

    <span className="announcement-mobile-text">
      Early April Openings
      <span className="announcement-dot">•</span>
      Tap to Reserve
    </span>
  </>
)

  const bottomText = (
    <>
      <span>Know Someone Planning a Glass Project?</span>
      <span className="announcement-dot">•</span>
      <span>MyGlassStyle Partnership Program</span>
      <span className="announcement-dot">•</span>
      <span>Homeowners Welcome</span>
      <span className="announcement-dot">•</span>
      <span>Contractors Welcome</span>
      <span className="announcement-dot">•</span>
      <span>Referral Thank-You Reward</span>
      <span className="announcement-dot mobile-dot">•</span>
    </>
  )

  return (
    <div className="announcement-wrapper">
      <a href={WA_URL} className="announcement-bar-link" target="_blank" rel="noopener noreferrer">
        <div className="announcement-bar announcement-bar-top">
          <div className="announcement-static">
            {topText}
          </div>
        </div>
      </a>

      <Link to="/referral-program" target="_blank" className="announcement-bar-link">
        <div className="announcement-bar announcement-bar-bottom">
          <div className="announcement-track announcement-cycle announcement-desktop">
            {bottomText}
          </div>

          <div className="announcement-mobile-scroll">
            <div className="announcement-track announcement-loop">
              {bottomText}
              {bottomText}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}