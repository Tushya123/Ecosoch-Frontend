import React, { Fragment, useEffect, useState } from "react";
import { Container, Modal, Dropdown } from "react-bootstrap";
import "../assets/css/VideoGallery.css";

import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { RiCloseLargeLine, RiFullscreenFill } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import axios from "axios";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Slider from "react-slick";
import ReactPlayer from "react-player";

function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch((err) => {
      alert(
        Error`attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
}
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    className="modalcontrols"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));

function VideoGallery() {
  const [vg, setVg] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchAllVg = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/Testimonials`
        );
        setVg(response.data); // Ensure you are setting the state with the correct data
        // console.log(response.data);
      } catch (error) {
        console.log("Error fetching testimonials: ", error);
      }
    };
    fetchAllVg();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <TfiAngleRight />,
    prevArrow: <TfiAngleLeft />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="rts-case-studyes rts-section-gapBottom bg-white mt-5 mb-5">
        <div className="container con-vid mt-0 mb-0">
          <div className="row mt-3">
            <div className="col-lg-12 vid-cl">
              <div className="title-area-center">
                <div className="title-new">
                  <h1 className="title-tag">Video testimonials</h1>
                </div>
              </div>
              <Container fluid style={{ width: "95%" }}>
                <Slider {...settings}>
                  {vg?.map((video, index) => (
                    <div className="demo-gallery" key={index}>
                      <ul
                        id="lightgallery"
                        className="list-unstyled row justify-content-center"
                      >
                        <li className="video col-lg-4 col-12 smallscreencaro">
                          <div onClick={() => setActiveIndex(index)}>
                            <a>
                              <img
                                className="img-responsive"
                                src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${video.Image}`}
                                alt="Video Thumbnail"
                              />
                              <div className="demo-gallery-poster">
                                <img
                                  src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png"
                                  alt="Play Button"
                                />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={activeIndex === index}
                            fullscreen
                            onHide={() => setActiveIndex(null)}
                            className="vdmodal"
                          >
                            <Modal.Header>
                              <Dropdown>
                                <Dropdown.Toggle
                                  as={CustomToggle}
                                  id="dropdown-basic"
                                >
                                  <IoShareSocial />{" "}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <li>
                                    <FacebookShareButton url={video.Link}>
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url={video.Link}>
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <EmailShareButton url={video.Link}>
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url={video.Link}>
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url={video.Link}>
                                      <PinterestIcon /> &nbsp; Pintrest
                                    </PinterestShareButton>
                                  </li>
                                </Dropdown.Menu>
                              </Dropdown>
                              <span
                                className="modalcontrols"
                                onClick={() =>
                                  toggleFullScreen(
                                    document.querySelector(".modal-content")
                                  )
                                }
                              >
                                <RiFullscreenFill />{" "}
                              </span>

                              <span
                                className="modalcontrols"
                                onClick={() => setActiveIndex(null)}
                              >
                                <RiCloseLargeLine />{" "}
                              </span>
                            </Modal.Header>

                            <Modal.Body>
                              <Container
                                fluid
                                style={{ width: "80%", top: "0px" }}
                              >
                                <div className="lg-video-cont">
                                  <div className="lg-video">
                                    <ReactPlayer
                                      height={"450px"}
                                      width={"100%"}
                                      url={video.Link}
                                    />
                                  </div>
                                </div>
                              </Container>
                            </Modal.Body>
                          </Modal>
                        </li>
                      </ul>
                    </div>
                  ))}
                </Slider>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default VideoGallery;
