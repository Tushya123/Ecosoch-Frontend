import React, { Fragment, useState, useEffect } from "react";

function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const toggleVisibility = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {/* <button
        id="button"
        className={isVisible ? "show" : "hide"}
        onClick={toggleVisibility}
      ></button> */}
      <div
        className={isVisible ? "show progress-wrap active-progress" : "hide"}
        onClick={toggleVisibility}
        style={{bottom: "70px"}}
      >
          <svg
            class="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              // style={{transition: "stroke-dashoffset 10ms linear 0s", strokeDasharray: "307.919, 307.919", strokeDashoffset: "183.588"}}
            ></path>
          </svg>
        </div>
    </Fragment>
  );
}

export default GoTopButton;
