import { useEffect } from "react";

function LIRevealFixed({ vanity, href, size = "small", theme = "light", style = {} }) {
  useEffect(() => {
    if (window.LIRenderAll) window.LIRenderAll();
  }, []);

  return (
    <div
      className="li-reveal--fixed gap-2"
      style={style}
      tabIndex={0}
      aria-label="LinkedIn profile card"
    >
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size={size}
        data-theme={theme}
        data-type="VERTICAL"
        data-vanity={vanity}
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </div>
  );
}

export default function LinkedInBadges() {
  return (
    <>
      {/* Kseniia badge (bottom one) */}
      <LIRevealFixed
        vanity="kseniiamarkiv"
        href="https://www.linkedin.com/in/kseniiamarkiv?trk=profile-badge"
        size="small"
        theme="dark"
        style={{ bottom: "50px" }}   // stays near bottom
      />
    </>
  );
}