import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import '../styles/GalleryPage.css';

function GalleryPage() {
  const { slug } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
      const url = `https://email-api-p7zg.onrender.com/api/gallery/${slug}?t=${Date.now()}`; // cache-busting param
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched gallery data:", data);
        setImages(data);
      })
      .catch(console.error);
  }, [slug]);

  return (
    <div className="container pb-4 gallery-page">
      <div className="row g-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <img
              src={`https://res.cloudinary.com/dyxzzhzqs/image/upload/w_360,h_640,c_fill/${img.public_id}.jpg`}
              loading="lazy"
              fetchPriority="low"
              alt={img.public_id}
              className="img-fluid shadow-sm gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
