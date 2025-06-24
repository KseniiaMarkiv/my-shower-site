// src/components/ScrollToTop.jsx
import { useEffect, useState } from 'react';
import backBtnImg from '../assets/back-btn.png';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top btn"
        aria-label="Scroll to top"
      >
        
         <img
          src={backBtnImg}
          alt="Back to Top"
        />

      </button>
    )
  );
}
