import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Masonry from 'react-masonry-css';

import '../styles/GalleryPage.css';

function GalleryPage() {
  const { slug } = useParams();
  const [media, setMedia] = useState([]);

  useEffect(() => {
      const url = `https://email-api-p7zg.onrender.com/api/gallery/${slug}?t=${Date.now()}`; //! DON'T FORGET REMOVE cache-busting param
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched gallery data:", data);
        setMedia(data);
      })
      .catch(console.error);
  }, [slug]);

 // Breakpoint columns config for react-masonry-css
  const breakpointColumnsObj = {
    default: 4, // xl and up
    1200: 4,     // lg (≥1200px)
    992: 3,      // md (≥992px)
    768: 2,      // sm (≥768px)
    576: 1       // xs (<576px)
  };

  return (
    <div className="container gallery-page pb-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {media.map((item, index) => (
          <div key={index} className="gallery-item">
            {item.resource_type === "video" ? (
              <video
                controls
                className="gallery-image shadow-sm"
                preload="metadata"
                width="100%"
              >
                <source
                  src={`https://res.cloudinary.com/dyxzzhzqs/video/upload/${item.public_id}.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={`https://res.cloudinary.com/dyxzzhzqs/image/upload/w_600,c_fill/${item.public_id}.jpg`}
                alt={item.public_id}
                className="img-fluid shadow-sm gallery-image"
                loading="lazy"
                fetchpriority="low"
              />
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default GalleryPage;
