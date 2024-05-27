import React, { Fragment, useState } from "react";
import { Container, Modal, Dropdown } from "react-bootstrap";
import "../assets/css/VideoGallery.css";

import { useMediaQuery } from "react-responsive";
 
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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <Fragment>
      {isMobile ? (
        <div className="rts-case-studyes rts-section-gapBottom bg-white mt-5 mb-5">
          <div className="container con-vid mt-0  mb-0">
            <div className="row mt-3">
              <div className="col-lg-12 vid-cl">
                <div className="title-area-center ">
                  <div className="title-new">
                    <h1 className="title-tag">Video testimonials</h1>
                  </div>
                </div>
                <div
                  id="carouselExampleControls"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active ">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallery"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12 smallscreencaro"
                            data-src="https://youtu.be/N_dRddzD1xs?si=ohe9rFiAAQITQtgi?autoplay=1"
                          >
                            <div onClick={() => setShow(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video1.jpg"
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
                    </div>
                    <div className="carousel-item">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallery"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12 smallscreencaro"
                            data-src="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6"
                          >
                            <div onClick={() => setShow1(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video2.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show1}
                              fullscreen
                              onHide={() => setShow1(false)}
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
                                      <FacebookShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
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
                                  onClick={() => setShow1(false)}
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
                                        title="v2"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/PbqjgYB7V7Q?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>
                    <div className="carousel-item">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallery"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12 smallscreencaro"
                            data-src="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu"
                          >
                            <div onClick={() => setShow2(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video3.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show2}
                              fullscreen
                              onHide={() => setShow2(false)}
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
                                      <FacebookShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
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
                                  onClick={() => setShow2(false)}
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
                                        title="v3"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/EnopItwVi28?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>

                    <div className="carousel-item">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallerytwo"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12 smallscreencaro"
                            data-src="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo"
                          >
                            <div onClick={() => setShow3(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video4.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show3}
                              fullscreen
                              onHide={() => setShow3(false)}
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
                                      <FacebookShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
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
                                  onClick={() => setShow3(false)}
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
                                        title="v4"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/K9arlLXrWf0?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>
                    <div className="carousel-item">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallerytwo"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12 smallscreencaro"
                            data-src="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu"
                          >
                            <div onClick={() => setShow4(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video5.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show4}
                              fullscreen
                              onHide={() => setShow4(false)}
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
                                      <FacebookShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
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
                                  onClick={() => setShow4(false)}
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
                                        title="v5"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/LJqTjj0vOX4?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>
                    <div className="carousel-item">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallerytwo"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12 smallscreencaro"
                            data-src="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m"
                          >
                            <div onClick={() => setShow5(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video6.jpg"
                                  alt=""
                                />
                                <div className="demo-gallery-poster">
                                  <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show5}
                              fullscreen
                              onHide={() => setShow5(false)}
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
                                      <FacebookShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>

                                    <li>
                                      <EmailShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
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
                                  onClick={() => setShow5(false)}
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
                                        title="v6"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/XxwJpTeS6BU?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rts-case-studyes rts-section-gapBottom bg-white mt-5 mb-5">
          <div className="container con-vid mt-0  mb-0">
            <div className="row mt-3">
              <div className="col-lg-12 vid-cl">
                <div className="title-area-center ">
                  <div className="title-new">
                    <h1 className="title-tag">Video testimonials</h1>
                  </div>
                </div>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallery"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12"
                            data-src="https://youtu.be/N_dRddzD1xs?si=ohe9rFiAAQITQtgi?autoplay=1"
                          >
                            <div onClick={() => setShow(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video1.jpg"
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

                          <li
                            className="video col-lg-4 col-12"
                            data-src="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6"
                          >
                            <div onClick={() => setShow1(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video2.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show1}
                              fullscreen
                              onHide={() => setShow1(false)}
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
                                      <FacebookShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
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
                                  onClick={() => setShow1(false)}
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
                                        title="v2"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/PbqjgYB7V7Q?wmode=opaque&autoplay=1&enablejsapi=1"
                                        allowfullscreen
                                      ></iframe>
                                    </div>
                                  </div>
                                </Container>
                              </Modal.Body>
                            </Modal>
                          </li>

                          <li
                            className="video col-lg-4 col-12"
                            data-src="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu"
                          >
                            <div onClick={() => setShow2(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video3.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show2}
                              fullscreen
                              onHide={() => setShow2(false)}
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
                                      <FacebookShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
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
                                  onClick={() => setShow2(false)}
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
                                        title="v3"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/EnopItwVi28?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>

                    <div className="carousel-item">
                      <div className="demo-gallery">
                        <ul
                          id="lightgallerytwo"
                          className="list-unstyled row justify-content-center"
                        >
                          <li
                            className="video col-lg-4 col-12"
                            data-src="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo"
                          >
                            <div onClick={() => setShow3(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video4.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show3}
                              fullscreen
                              onHide={() => setShow3(false)}
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
                                      <FacebookShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
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
                                  onClick={() => setShow3(false)}
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
                                        title="v4"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/K9arlLXrWf0?wmode=opaque&autoplay=1&enablejsapi=1"
                                        allowfullscreen
                                      ></iframe>
                                    </div>
                                  </div>
                                </Container>
                              </Modal.Body>
                            </Modal>
                          </li>
                          <li
                            className="video col-lg-4 col-12"
                            data-src="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu"
                          >
                            <div onClick={() => setShow4(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video5.jpg"
                                />
                                <div className="demo-gallery-poster">
                                  <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show4}
                              fullscreen
                              onHide={() => setShow4(false)}
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
                                      <FacebookShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>
                                    <li>
                                      <EmailShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
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
                                  onClick={() => setShow4(false)}
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
                                        title="v5"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/LJqTjj0vOX4?wmode=opaque&autoplay=1&enablejsapi=1"
                                        allowfullscreen
                                      ></iframe>
                                    </div>
                                  </div>
                                </Container>
                              </Modal.Body>
                            </Modal>
                          </li>
                          <li
                            className="video col-lg-4 col-12"
                            data-src="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m"
                          >
                            <div onClick={() => setShow5(true)}>
                              <a>
                                <img
                                  className="img-responsive"
                                  src="assets/images/testimonials/video6.jpg"
                                  alt=""
                                />
                                <div className="demo-gallery-poster">
                                  <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                            <Modal
                              show={show5}
                              fullscreen
                              onHide={() => setShow5(false)}
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
                                      <FacebookShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <FacebookIcon /> &nbsp; Facebook
                                      </FacebookShareButton>
                                    </li>
                                    <li>
                                      <TwitterShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <TwitterIcon /> &nbsp; Twitter
                                      </TwitterShareButton>
                                    </li>

                                    <li>
                                      <EmailShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <EmailIcon /> &nbsp; email
                                      </EmailShareButton>
                                    </li>
                                    <li>
                                      <WhatsappShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                        <WhatsappIcon /> &nbsp; whatsapp
                                      </WhatsappShareButton>
                                    </li>
                                    <li>
                                      <PinterestShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
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
                                  onClick={() => setShow5(false)}
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
                                        title="v6"
                                        height="450px"
                                        className="lg-video-object lg-youtube lg-object"
                                        src="//www.youtube.com/embed/XxwJpTeS6BU?wmode=opaque&autoplay=1&enablejsapi=1"
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
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="rts-case-studyes rts-section-gapBottom bg-white mt-5 mb-5">
        <div className="container con-vid mt-0  mb-0">
          <div className="row mt-3">
            <div className="col-lg-12 vid-cl">
              <div className="title-area-center ">
                <div className="title-new">
                  <h1 className="title-tag">Video testimonials</h1>
                </div>
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="demo-gallery">
                      <ul
                        id="lightgallery"
                        className="list-unstyled row justify-content-center"
                      >
                        <li
                          className="video col-lg-4 col-12"
                          data-src="https://youtu.be/N_dRddzD1xs?si=ohe9rFiAAQITQtgi?autoplay=1"
                        >
                          <div onClick={() => setShow(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src="assets/images/testimonials/video1.jpg"
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

                        <li
                          className="video col-lg-4 col-12"
                          data-src="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6"
                        >
                          <div onClick={() => setShow1(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src="assets/images/testimonials/video2.jpg"
                              />
                              <div className="demo-gallery-poster">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={show1}
                            fullscreen
                            onHide={() => setShow1(false)}
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
                                    <FacebookShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <EmailShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url="https://youtu.be/PbqjgYB7V7Q?si=rgpKg_1s6jffYYp6">
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
                                onClick={() => setShow1(false)}
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
                                      title="v2"
                                      height="450px"
                                      className="lg-video-object lg-youtube lg-object"
                                      src="//www.youtube.com/embed/PbqjgYB7V7Q?wmode=opaque&autoplay=1&enablejsapi=1"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                              </Container>
                            </Modal.Body>
                          </Modal>
                        </li>

                        <li
                          className="video col-lg-4 col-12"
                          data-src="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu"
                        >
                          <div onClick={() => setShow2(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src="assets/images/testimonials/video3.jpg"
                              />
                              <div className="demo-gallery-poster">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={show2}
                            fullscreen
                            onHide={() => setShow2(false)}
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
                                    <FacebookShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <EmailShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url="https://youtu.be/EnopItwVi28?si=fAWYflDVr20QAEIu">
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
                                onClick={() => setShow2(false)}
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
                                      title="v3"
                                      height="450px"
                                      className="lg-video-object lg-youtube lg-object"
                                      src="//www.youtube.com/embed/EnopItwVi28?wmode=opaque&autoplay=1&enablejsapi=1"
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
                  </div>

                  <div className="carousel-item">
                    <div className="demo-gallery">
                      <ul
                        id="lightgallerytwo"
                        className="list-unstyled row justify-content-center"
                      >
                        <li
                          className="video col-lg-4 col-12"
                          data-src="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo"
                        >
                          <div onClick={() => setShow3(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src="assets/images/testimonials/video4.jpg"
                              />
                              <div className="demo-gallery-poster">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={show3}
                            fullscreen
                            onHide={() => setShow3(false)}
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
                                    <FacebookShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <EmailShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url="https://youtu.be/K9arlLXrWf0?si=ZQHQNq1nZTrIG4jo">
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
                                onClick={() => setShow3(false)}
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
                                      title="v4"
                                      height="450px"
                                      className="lg-video-object lg-youtube lg-object"
                                      src="//www.youtube.com/embed/K9arlLXrWf0?wmode=opaque&autoplay=1&enablejsapi=1"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                              </Container>
                            </Modal.Body>
                          </Modal>
                        </li>
                        <li
                          className="video col-lg-4 col-12"
                          data-src="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu"
                        >
                          <div onClick={() => setShow4(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src="assets/images/testimonials/video5.jpg"
                              />
                              <div className="demo-gallery-poster">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png" />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={show4}
                            fullscreen
                            onHide={() => setShow4(false)}
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
                                    <FacebookShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <EmailShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url="https://youtu.be/LJqTjj0vOX4?si=eu1giNZQYf8LFcDu">
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
                                onClick={() => setShow4(false)}
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
                                      title="v5"
                                      height="450px"
                                      className="lg-video-object lg-youtube lg-object"
                                      src="//www.youtube.com/embed/LJqTjj0vOX4?wmode=opaque&autoplay=1&enablejsapi=1"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                              </Container>
                            </Modal.Body>
                          </Modal>
                        </li>
                        <li
                          className="video col-lg-4 col-12"
                          data-src="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m"
                        >
                          <div onClick={() => setShow5(true)}>
                            <a>
                              <img
                                className="img-responsive"
                                src="assets/images/testimonials/video6.jpg"
                                alt=""
                              />
                              <div className="demo-gallery-poster">
                                <img
                                  src="https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <Modal
                            show={show5}
                            fullscreen
                            onHide={() => setShow5(false)}
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
                                    <FacebookShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                      <FacebookIcon /> &nbsp; Facebook
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                      <TwitterIcon /> &nbsp; Twitter
                                    </TwitterShareButton>
                                  </li>

                                  <li>
                                    <EmailShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                      <EmailIcon /> &nbsp; email
                                    </EmailShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
                                      <WhatsappIcon /> &nbsp; whatsapp
                                    </WhatsappShareButton>
                                  </li>
                                  <li>
                                    <PinterestShareButton url="https://youtu.be/XxwJpTeS6BU?si=kE5-jLVbo0Lhtm0m">
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
                                onClick={() => setShow5(false)}
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
                                      title="v6"
                                      height="450px"
                                      className="lg-video-object lg-youtube lg-object"
                                      src="//www.youtube.com/embed/XxwJpTeS6BU?wmode=opaque&autoplay=1&enablejsapi=1"
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
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default VideoGallery;
