import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import '../styles/GalleryPage.css';

function GalleryPage() {
// function GalleryPage({ slug }) {    //NOTE - This won't work — React Router v6 doesn't pass slug directly as a prop.
  const { slug } = useParams(); // <-- GET the slug from the URL
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://email-api-p7zg.onrender.com/api/gallery/${slug}`)
      .then(res => res.json())
      .then(setImages)
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
              className="img-fluid hadow-sm gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
