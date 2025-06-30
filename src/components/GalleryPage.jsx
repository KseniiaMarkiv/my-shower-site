import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

import "../styles/GalleryPage.css";

function GalleryPage() {
  const { slug } = useParams();
  const [media, setMedia] = useState([]);
  const [fullscreenItem, setFullscreenItem] = useState(null);

  useEffect(() => {
    const cacheKey = `gallery-${slug}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      setMedia(JSON.parse(cached));
      return;
    }

    const url = `${import.meta.env.VITE_API_URL}/api/gallery/${slug}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => {
          const getBaseName = (item) => item.public_id.split("/").pop().replace(/\.(jpg|jpeg|png|webm)$/, ".mp4");
          return getBaseName(a).localeCompare(getBaseName(b));
        });
        sessionStorage.setItem(cacheKey, JSON.stringify(sorted));
        setMedia(sorted);
      })
      .catch(console.error);
  }, [slug]);


  const handleOpenFullscreen = (item) => setFullscreenItem(item);
  const handleCloseFullscreen = () => setFullscreenItem(null);

  const breakpointColumnsObj = {
    default: 4,
    1200: 4,
    992: 3,
    768: 2,
    576: 1,
  };

  return (
    <div className="container gallery-page pb-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {media.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleOpenFullscreen(item)}
          >
            {item.resource_type === "video" ? (
              <video
                className="gallery-image shadow-sm"
                preload="metadata"
                width="100%"
                muted
                autoPlay
                loop
                playsInline
                controls={false}
                disablePictureInPicture
              >
                <source
                  src={`https://res.cloudinary.com/dyxzzhzqs/video/upload/${item.public_id}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={`https://res.cloudinary.com/dyxzzhzqs/image/upload/w_600,c_fill,f_auto,q_auto/${item.public_id}`}
                alt={item.public_id}
                className="img-fluid shadow-sm gallery-image"
                loading="lazy"
                fetchpriority="low"
              />
            )}
          </div>
        ))}
      </Masonry>

      {fullscreenItem && (
        <div
          className="fullscreen-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("fullscreen-overlay")) {
              handleCloseFullscreen();
            }
          }}
        >
          <button className="close-button" onClick={handleCloseFullscreen}>
            ×
          </button>
          {fullscreenItem.resource_type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="fullscreen-media"
            >
              <source
                src={`https://res.cloudinary.com/dyxzzhzqs/video/upload/f_auto,q_auto/${fullscreenItem.public_id}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={`https://res.cloudinary.com/dyxzzhzqs/image/upload/f_auto,q_auto/${fullscreenItem.public_id}`}
              alt={fullscreenItem.public_id}
              className="fullscreen-media"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
