import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import "../styles/GalleryPage.css";

function GalleryPage({ tabSlug }) {
  const [media, setMedia] = useState([]);
  const [fullscreenItem, setFsItem] = useState(null);

  useEffect(() => {
    if (!tabSlug) return;

    const key = `gallery-${tabSlug}`;
    const cached = sessionStorage.getItem(key);
    if (cached) {
      setMedia(JSON.parse(cached));
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/gallery/${tabSlug}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          new URL(item.url).pathname.includes(`/${tabSlug}/`)
        );
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        sessionStorage.setItem(key, JSON.stringify(filtered));
        setMedia(filtered);
      })
      .catch(console.error);
  }, [tabSlug]);

  const openFs = (item) => setFsItem(item);
  const closeFs = () => setFsItem(null);

  const breakpoints = { default: 4, 1200: 4, 992: 3, 768: 2, 576: 1 };

  return (
    <div className={`container gallery-page pb-4 fade-gallery ${media.length ? "show" : ""}`}>
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {media.map((item, i) => (
          <div key={i} className="gallery-item" onClick={() => openFs(item)}>
            {item.file_type === "non-image" ? (
              <video className="gallery-image shadow-sm" preload="metadata" width="100%" autoPlay muted loop playsInline controls={false} poster={`${item.url}?tr=w-600`}>
                <source src={`${item.url}?tr=format=mp4,w-600`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={`${item.url}?tr=w-600`} alt={item.name} className="img-fluid shadow-sm gallery-image" loading="lazy" />
            )}
          </div>
        ))}
      </Masonry>

      {fullscreenItem && (
        <div className="fullscreen-overlay" onClick={(e) => e.target.classList.contains("fullscreen-overlay") && closeFs()}>
          <button className="close-button" onClick={closeFs}>×</button>
          {fullscreenItem.file_type === "non-image" ? (
            <video autoPlay muted loop playsInline controls className="fullscreen-media">
              <source src={`${fullscreenItem.url}?tr=format=mp4,w-1200`} type="video/mp4" />
            </video>
          ) : (
            <img src={`${fullscreenItem.url}?tr=w-1200`} alt={fullscreenItem.name} className="fullscreen-media" />
          )}
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
