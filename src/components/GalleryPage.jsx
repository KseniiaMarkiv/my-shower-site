import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function GalleryPage() {
// function GalleryPage({ slug }) {    //NOTE - This won't work — React Router v6 doesn't pass slug directly as a prop.
  const { slug } = useParams(); // <-- GET the slug from the URL
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/gallery/${slug}`)
      .then(res => res.json())
      .then(setImages)
      .catch(console.error);
  }, [slug]);

  return (
    <div className="container py-4">
      <div className="row g-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <img
              src={img.url}
              alt={img.public_id}
              className="img-fluid rounded shadow-sm gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
