import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function Carousel() {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const allSliders = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/activeslider`
        );
        // console.log(allSliders.data.data);
        setSliders(allSliders.data.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchSlider();
  }, []);

  return (
    <Fragment>
      <div
        id="carouselVideoExample"
        className="carousel slide carousel-fade new"
        data-bs-ride="carousel"
        autoPlay
        loop
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
          {sliders.map((slide, index) => (
            <button
              key={index}
              name={slide}
              type="button"
              data-bs-target="#carouselVideoExample"
              data-bs-slide-to={index}
              className={`${index === 0 && "active"}`}
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          ))}
          {/* <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button> */}
          {/* <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button> */}
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner ">
          {sliders.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 && "active"}`}
            >
              <div className="video-overlay-container">
                <video className="img-fluid" autoPlay loop muted>
                  <source
                    src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${slide.sliderImage}`}
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption my-act-view d-block">
                  <h3 className="animated fadeIn">
                    {slide.sliderThumnailDesc}
                  </h3>
                  <p>{slide.sliderDesc}</p>
                  <div className="button-banner">
                    <a href="/" className="btn rts-btn btn-primary">
                      Get a Quote
                    </a>
                    <a
                      href="/"
                      className="btn rts-btn btn-primary m-3 custom-btn"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
