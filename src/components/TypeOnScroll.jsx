import React, { useEffect, useRef, useState } from "react";

export default function TypeOnScroll({ text, speed = 30 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [visible, text, speed]);

  return (
    <div ref={ref} className="typing-text">
      {displayed}
      <span className="typing-cursor">|</span>
    </div>
  );
}