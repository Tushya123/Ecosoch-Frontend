import React, { Fragment, useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function StickyIcon() {
  const [isVisible1, setIsVisible1] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Adjust this value as needed
        setIsVisible1(false);
      } else {
        setIsVisible1(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="sticky-icon">
        <a className="Instagram" style={{ transform: "translate(160px, 0px)" }}>
          <i className="fas fa-envelope"></i>
          <a href="mailto:someone@example.com">Get a Quote </a>
        </a>
        <a className="Facebook" style={{ transform: "translate(160px, 0px)" }}>
          <i className="fas ">
            <FaPhoneAlt />{" "}
          </i>
          <a href="tel:+918123410101">Call Now</a>
        </a>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="sticky-icon">
        <a
          href="mailto:someone@example.com"
          className="Instagram"
          style={{
            transform: isVisible1
              ? "translate(0px, 0px)"
              : "translate(160px, 0px)",
          }}
        >
          <i className="fas fa-envelope"></i> Get a Quote
        </a>
        <a
          href="tel:+918123410101"
          className="Facebook"
          style={{
            transform: isVisible1
              ? "translate(0px, 0px)"
              : "translate(160px, 0px)",
          }}
        >
          <i className="fas ">
            <FaPhoneAlt />
          </i>{" "}
          Call Now
        </a>
      </div>
    </Fragment>
  );
}

export default StickyIcon;
