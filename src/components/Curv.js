import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

function Curv() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <Fragment>
      {isMobile ? (
        <div className="curve">
          <svg
            className="fusion-big-half-circle-candy"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="50"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="#fff"
          >
            <path d="M0 0 C55 180 100 0 100 0 Z"></path>
          </svg>
        </div>
      ) : (
        <div className="curve">
          <svg
            className="fusion-big-half-circle-candy"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="#fff"
          >
            <path d="M0 0 C55 180 100 0 100 0 Z"></path>
          </svg>
        </div>
      )}
    </Fragment>
  );
}

export default Curv;
