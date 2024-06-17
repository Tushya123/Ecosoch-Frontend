import React, { Fragment, useEffect, useState } from "react";
import Curv from "./Curv";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Testimonials.css";
import axios from "axios";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";

register();
function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/CustomerTestimonial`
        );
        setTestimonials(response.data);
        console.log("Testimonials", response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchTestimonials();
  }, []);

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
                <h6 className="title text-white mb-0">
                  Words from Our Solar Roof-Top System Owners
                </h6>
              </div>
            </div>
          </div>
          <div className="row mt--30">
            <div className="col-lg-12">
              <div className="testimonials-review-main-wrapper">
                <div className="swiper mySwiper-testimonials-solari">
                  <Slider {...settings}>
                    {testimonials?.map((testimonial) => (
                      <div className="swiper-slide">
                        <div className="single-review-area-soalri ">
                          <img
                            src="assets/images/testimonials/07.png"
                            alt="testimonaials"
                            className="quote"
                          />
                          <p className="dsic">{testimonial.description}</p>{" "}
                          <div className="author-area">
                            <img
                              src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${testimonial.newImage}`}
                              alt="imag"
                              className="authoe"
                            />
                            <h6 className="title">{testimonial.Name}</h6>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <div className="swiper-slide">
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
                        </div>
                      </div>
                    </div> */}
                  </Slider>
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
