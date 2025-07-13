import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTotop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke paling atas saat path berubah
  }, [pathname]);

  return null;
}

export default ScrollTotop;
