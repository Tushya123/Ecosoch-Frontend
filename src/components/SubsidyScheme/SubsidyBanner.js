import React from "react";
import Slider from "react-slick";
import "./Subsidy.css";

function SubsidyBanner() {
  const settings = {
    dots: false,

    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="sub-ban-wrapper">
          <img
            // className="sub-ban-wrapper"
            src="assets\images\SubsidyBanner\Subsidy-for-solar-with-EcoSoch-Bangalore-1.png"
            alt=""
          />
        </div>
        <div className="sub-ban-wrapper">
          <img
            src="assets\images\SubsidyBanner\Subsidy-for-solar-with-EcoSoch-Bangalore-2-1.png"
            alt=""
          />
        </div>
      </Slider>
    </>
  );
}

export default SubsidyBanner;
