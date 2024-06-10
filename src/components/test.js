import React, { Fragment, useEffect, useState } from "react";
import { Container, Modal, Dropdown } from "react-bootstrap";
import "../assets/css/VideoGallery.css";

// import { useMediaQuery } from "react-responsive";

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

function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
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
  const [vId, setvId] = useState(null);

  useEffect(() => {
    const fetchAllVg = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/Testimonials`
        );
        setVg(response.data); // Ensure you are setting the state with the correct data
      } catch (error) {
        console.log("Error fetching testimonials: ", error);
      }
    };
    fetchAllVg().then(console.log(vg));
    console.log(vg);
  }, []);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  // const isMobile = useMediaQuery({ maxWidth: 1000 });
  var settings = {
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
      <div className="rts-case-studyes rts-section-gapBottom bg-white mt-5 mb-5">
        <div className="container con-vid mt-0  mb-0">
          <div className="row mt-3">
            <div className="col-lg-12 vid-cl">
              <div className="title-area-center ">
                <div className="title-new">
                  <h1 className="title-tag">Video testimonials</h1>
                </div>
              </div>
              <Container fluid style={{ width: "95%" }}>
                <Slider {...settings}>
                  {vg?.map((video, index) => (
                    <div className="demo-gallery">
                      <h1>{vg.Title}</h1>
                      <ul
                        id="lightgallery"
                        className="list-unstyled row justify-content-center"
                      >
                        <li className="video col-lg-4 col-12 smallscreencaro">
                          <div onClick={() => setShow(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${vg.Image}`}
                              />

                              <div className="demo-gallery-poster">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={show}
                            fullscreen
                            onHide={() => setShow(false)}
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
                                    <FacebookShareButton url="https://youtu.be/N_dRddzD1xs">
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url="https://youtu.be/N_dRddzD1xs">
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <EmailShareButton url="https://youtu.be/N_dRddzD1xs">
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url="https://youtu.be/N_dRddzD1xs">
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url="https://youtu.be/N_dRddzD1xs">
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
                                onClick={() => setShow(false)}
                              >
                                <RiCloseLargeLine />{" "}
                              </span>
                            </Modal.Header>

                            <Modal.Body>
                              <Container fluid style={{ width: "80%" }}>
                                <div
                                  className="lg-video-cont "
                                  //   style={{ maxWidth: "855px"}}
                                >
                                  <div className="lg-video">
                                    <iframe
                                      title="v1"
                                      height="450px"
                                      className="lg-video-object lg-youtube lg-object"
                                      src="//www.youtube.com/embed/N_dRddzD1xs?wmode=opaque&amp;autoplay=1&amp;enablejsapi=1"
                                      allowfullscreen
                                    ></iframe>
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
