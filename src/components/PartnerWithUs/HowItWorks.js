import React, { Fragment, useState } from "react";
import { Container, Modal } from "react-bootstrap";
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
import { Dropdown } from "react-bootstrap";

function HowItWorks() {
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
  const [showv1, setShowv1] = useState(false);
  return (
    <Fragment>
      <div className="faq-section-start-solar rts-section-gapBottom">
        <span className="stok-bg images-r left">FAQ'S</span>
        <div className="container">
          <div className="row g-24 align-items-start">
            <div className="col-lg-6">
              <div className="title-area-left mobcenter">
                <p className="pre">
                  <span>How It </span> Works?
                </p>
                <h2 className="title "> Question?</h2>
              </div>
              <div className="accordion-solar-faq">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Eligibility
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You must have a strong network of contacts who would be
                        interested. You must be able to generate leads and help
                        in close deals. You must be able to work independently
                        and as part of a team.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Assessment{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Once you contact us and express your interest, our team
                        will review your application and assess your suitability
                        as an associate partner. We look for individuals and
                        organizations with a passion for solar energy, a strong
                        network, and a commitment to delivering exceptional
                        customer service. Once we find you suitable, sign our
                        partnership contract and we will share all the marketing
                        materials with you.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Onboarding{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Once accepted, you will undergo an onboarding process
                        where we will provide you with training, sales
                        resources, and detailed information about our solar
                        solutions. We want you to feel confident and equipped to
                        promote EcoSoch Solar effectively. We provide on-going
                        support to help you be successful by assigning a
                        dedicated speaking partner.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Lead Generation{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Utilize your network, marketing channels, and industry
                        connections to generate leads for solar rooftop
                        projects. You can tap into residential, commercial, and
                        institutional sectors to identify potential customers
                        interested in switching to solar energy.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Earn Commissions
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        As projects are successfully executed, you will earn
                        generous commissions based on the agreed-upon commission
                        structure. Your efforts in bringing leads and supporting
                        project execution will be rewarded fairly and promptly.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl--40">
              <div onClick={() => setShowv1(true)}>
                <div className="faq-solari-image-area">
                  <div className="thumbnail-small">
                    <img src="img/A-2new.jpg" alt="solar" />
                    <div className="video-area-start">
                      <div className="vedio-icone">
                        <a className="video-play-button play-video">
                          <span></span>
                          <p className="text">Watch Our Intro</p>
                        </a>
                        <div className="video-overlay">
                          <a className="video-overlay-close">×</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumbnail-large-bottom">
                <img src="img/partner-1.png" alt="solar" />
              </div>
              <Modal
                show={showv1}
                fullscreen
                onHide={() => setShowv1(false)}
                className="vdmodal"
              >
                <Modal.Header>
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                      <IoShareSocial />{" "}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li>
                        <FacebookShareButton url="https://youtu.be/Giek094C_l4">
                          <FacebookIcon /> &nbsp; Facebook
                        </FacebookShareButton>
                      </li>
                      <li>
                        <TwitterShareButton url="https://youtu.be/Giek094C_l4">
                          <TwitterIcon /> &nbsp; Twitter
                        </TwitterShareButton>
                      </li>
                      <li>
                        <EmailShareButton url="https://youtu.be/Giek094C_l4">
                          <EmailIcon /> &nbsp; email
                        </EmailShareButton>
                      </li>
                      <li>
                        <WhatsappShareButton url="https://youtu.be/Giek094C_l4">
                          <WhatsappIcon /> &nbsp; whatsapp
                        </WhatsappShareButton>
                      </li>
                      <li>
                        <PinterestShareButton url="https://youtu.be/Giek094C_l4">
                          <PinterestIcon /> &nbsp; Pintrest
                        </PinterestShareButton>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                  <span
                    className="modalcontrols"
                    onClick={() =>
                      toggleFullScreen(document.querySelector(".modal-content"))
                    }
                  >
                    <RiFullscreenFill />{" "}
                  </span>

                  <span
                    className="modalcontrols"
                    onClick={() => setShowv1(false)}
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
                          title=""
                          height="450px"
                          className="lg-video-object lg-youtube lg-object"
                          src="https://www.youtube.com/embed/Giek094C_l4"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HowItWorks;
