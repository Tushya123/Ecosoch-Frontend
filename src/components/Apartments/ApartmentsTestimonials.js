import React, { Fragment } from "react";
import Slider from "react-slick";

function ApartmentsTestimonials() {
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
      <div className="rts-client-review-area-h2 rts-section-gapBottom">
        <span className="stok-bg images-r">Testimonials</span>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center">
                <p className="title-tag">
                  <span> Testimonials from our Appartment customers</span>
                </p>
                <h2 className="title skew-up">
                  our Commercial and Industrial Customers
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt--30">
            <div className="col-lg-12">
              <div className="testimonials-review-main-wrapper testimonials-bg">
                <Slider {...settings}>
                  <div className="swiper-slide">
                    {/* <!-- single review area start --> */}
                    <div className="single-review-area-soalri">
                      <img
                        src="img/Transit-Survey-logo.jpg"
                        alt="testimonaials"
                        className="quote"
                      />
                      <p className="dsic txt-ent">
                        The installation and safety standards followed during
                        the project execution and commissioning are quite
                        satisfactory and after-sales provided by their team is
                        equally good.
                      </p>
                      <div className="author-area">
                        <h6 className="title">Mr. I S Rao</h6>
                        <span>GM, Transit Survey</span>
                        <div className="star-area">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single review area end --> */}
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- single review area start --> */}
                    <div className="single-review-area-soalri">
                      <img
                        src="img/test-19.jpg"
                        alt="testimonaials"
                        className="quote"
                      />
                      <p className="dsic txt-ent">
                        “The service and quality of installation done by EcoSoch
                        Solar team was excellent. I have installed Solar PV
                        Systems for my home and business.
                      </p>
                      <div className="author-area">
                        <h6 className="title">Mr. Rishi Venugopal</h6>
                        <span> MD, Mango Mist Resort</span>
                        <div className="star-area">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single review area end --> */}
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- single review area start --> */}
                    <div className="single-review-area-soalri">
                      <img
                        src="img/Mr.-Arun-Bhat.jpg"
                        alt="testimonaials"
                        className="quote"
                      />
                      <p className="dsic txt-ent">
                        Highly recommend getting in touch with the team at
                        EcoSoch for any solar installation you plan to go for.
                        Highly professional team and transparent. Super happy
                        with teams’ works ethics.{" "}
                      </p>
                      <div className="author-area">
                        <h6 className="title">Mr. Arun Bhat</h6>
                        <span>Director, Krishi Polymers</span>
                        <div className="star-area">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single review area end --> */}
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-author-img images"></div>
        <div className="shape-author-img-2 images-r"></div>
      </div>
    </Fragment>
  );
}

export default ApartmentsTestimonials;
