export default function AnnouncementBar() {
  const announcementText = (
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
      <span className="announcement-dot mobile-dot">•</span>  {/* spacer dot between duplicates */}
    </>
  );

  return (
    <a href="http://localhost:5173/referral-program" className="announcement-bar-link">
      <div className="announcement-bar">
        {/* Desktop: existing cycle animation */}
        <div className="announcement-track announcement-cycle announcement-desktop">
          {announcementText}
        </div>

        {/* Mobile: endless scroll using duplicated content */}
        <div className="announcement-mobile-scroll">
          <div className="announcement-track announcement-loop">
            {announcementText}
            {announcementText}  {/* duplicate for seamless loop */}
          </div>
        </div>
      </div>
    </a>
  );
}