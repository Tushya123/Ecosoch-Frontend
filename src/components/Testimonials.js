import React, { Fragment } from "react";
import Curv from "./Curv";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Testimonials.css";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";

register();
function Testimonials() {
  const settings = {
    className: "center",
    // adaptiveHeight: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // dotsClass: "slick-dots slick-thumb",
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "static",
          borderRadius: "100%",
          padding: "10px",
        }}
      >
        <ul className="unordered" style={{ margin: "0px", padding: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="bullets">.</div>,
  };
  return (
    <Fragment>
      <div className="rts-client-review-area-h2 rts-section-gapBottom bg-testi">
        <Curv />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center">
                <div className="title-new">
                  <h1 className="title-tag">Testimonials</h1>
                </div>
                <h6 className="title skew-up text-white mb-0" style={{opacity: "1"}}>
                  <div
                    className="word-line"
                    style={{display: "block", textAlign: "center", width: "100%"}}
                  >
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      Words
                    </div>{" "}
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      from
                    </div>{" "}
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      Our
                    </div>{" "}
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      Solar
                    </div>{" "}
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      Roof-Top
                    </div>{" "}
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      System
                    </div>{" "}
                    <div
                      className="word"
                      style={{display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)"}}
                    >
                      Owners
                    </div>
                  </div>
                </h6>
              </div>
            </div>
          </div>
          <div className="row mt--30">
            <div className="col-lg-12">
              <div className="testimonials-review-main-wrapper">
                <div className="swiper mySwiper-testimonials-solari">
                  <Slider {...settings}>
                    <div className="swiper-slide">
                      <div className="single-review-area-soalri ">
                        <img
                          src="assets/images/testimonials/07.png"
                          alt="testimonaials"
                          className="quote"
                        />
                        <p className="dsic">
                          “With a smiling, patient leader and dedicated team,
                          EcoSoch Solar team work together to complete the
                          project as per commitment with total transparency.
                          They did not bother us with anything nor we had to
                          follow up with them. They were also helpful in getting
                          the permits for net-metering done without any hassles.
                          Great team, All the best”
                        </p>
                        <div className="author-area">
                          <img
                            src="img/c-3.jpg"
                            alt="imag"
                            className="authoe"
                          />
                          <h6 className="title">Susan & Neel</h6>
                          <div className="star-area">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="single-review-area-soalri">
                        <img
                          src="assets/images/testimonials/07.png"
                          alt="testimonaials"
                          className="quote"
                        />
                        <p className="dsic">
                          EcoSoch is one of the best professionally managed
                          organization. From the time I contacted them until it
                          was commissioned their communication, status updates,
                          and management of the whole project was very seamless
                          and we did not have to get involved in anything, they
                          managed from start to finish beautifully.
                        </p>
                        <div className="author-area">
                          <img
                            src="img/Kishore.jpeg"
                            alt="imag"
                            className="authoe"
                          />
                          <h6 className="title">Kishore Balasubramanya</h6>

                          <div className="star-area">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>

                  {/* <div
                    className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                    id="pagination"
                  >
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span className="swiper-pagination-bullet"></span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
