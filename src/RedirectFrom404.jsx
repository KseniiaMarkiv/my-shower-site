import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectFrom404() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = sessionStorage.redirect;
    if (path) {
      sessionStorage.removeItem("redirect");
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default RedirectFrom404;
