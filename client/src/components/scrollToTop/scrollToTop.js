import React, { useEffect, useState } from "react";
import { Icons } from "../assets";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <img src={Icons.arrowCircleUp} alt="" />
    </div>
  );
};

export default ScrollToTop;
