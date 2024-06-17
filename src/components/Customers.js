import React, { Fragment, useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Container } from "react-bootstrap";
import axios from "axios";

function Customers() {
  const [images, setimages] = useState([]);
  useEffect(() => {
    const fetchimages = async () => {
      try {
        const allImages = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/commercialcustomer`
        );
        // console.log("images", allImages);
        setimages(allImages.data.data);
        // console.log(images);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchimages();
    // console.log(images);
  }, []);

  // const isMobile = useMediaQuery({ maxWidth: 800 });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    nextArrow: <TfiAngleRight />,
    prevArrow: <TfiAngleLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Fragment>
      <section className="showcase-7 mb-5">
        <div className="container">
          <div className="title-new">
            <h1 className="title-tag">Customers</h1>
          </div>
          <div className="title-area-center">
            <h6 className="title" style={{ opacity: "1" }}>
              <div
                className="word-line"
                style={{ display: "block", textAlign: "center", width: "100%" }}
              >
                <div
                  className="word"
                  style={{
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Our
                </div>
                <div
                  className="word"
                  style={{
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Valued
                </div>
                <div
                  className="word"
                  style={{
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Customers
                </div>
              </div>
            </h6>
          </div>
          <Container fluid style={{ width: "90%" }}>
            <div className="slider-container">
              <Slider {...settings}>
                {images.length > 0 &&
                  images?.map((img, index) => (
                    <div key={index} className="customerimages">
                      <img
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${img.bannerImage}`}
                        alt=""
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </Container>
        </div>
      </section>
    </Fragment>
  );
}

export default Customers;
