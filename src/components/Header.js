import React, { Fragment, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
import axios from "axios";
function Header() {
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/companyDetails`
        );
        setLogo(response.data[0].Logo);
        // console.log("data", response.data[0].Logo);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchDetails();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <div className="header-header-two">
        {/* <!-- header- solaric two --> */}

        {/* <!-- header- solaric two end --> */}
        {/* <!-- header man start --> */}
        <div className="header-main-h2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-haeder-wrapper-h2">
                  <a href="/" className="logo-area">
                    <img
                      //
                      src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${logo}`}
                      alt="logo"
                    />
                  </a>

                  <Button onClick={handleShow} className="d-lg-none navbtn">
                    <IoMenu />
                  </Button>

                  <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    backdrop="true"
                    scroll="false"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <a href="/" className="logo-area">
                        <img src="img/logo.png" alt="logo" />
                      </a>
                      <div className="accordion-solar-faq">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item headaccord">
                            <h2 className="accordion-header" id="headingOne">
                              <a href="/" className="nodrpdwn">
                                Home
                              </a>
                            </h2>
                          </div>
                          <div className="accordion-item headaccord">
                            <h2 className="accordion-header" id="headingTwo">
                              <a href="/projects" className="nodrpdwn">
                                Projects
                              </a>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body"></div>
                            </div>
                          </div>
                          <div className="accordion-item headaccord">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed drpdwn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Solar{" "}
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="submenu">
                                  <li className="nav-list">
                                    <a href="/subsidy">Subsidy Scheme</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/commercial">Commercial</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/apartments">Apartments</a>
                                  </li>
                                  <li className="nav-list">
                                    {/* <a href="/">Systems</a> */}
                                    <div className="dropdown menu-sub-drops">
                                      <button
                                        className="btn btn-secondary dropdown-toggle small-drop-btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Systems{" "}
                                      </button>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/ongrid"
                                          >
                                            On Grid Solar PV System
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/offgrid"
                                          >
                                            Off-Grid System
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/hybrid"
                                          >
                                            Hybrid System
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/pump"
                                          >
                                            Solar Water Pump
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="nav-list">
                                    {/* <a href="/">Consultancy</a> */}
                                    <div className="dropdown menu-sub-drops">
                                      <button
                                        className="btn btn-secondary dropdown-toggle small-drop-btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Consultancy{" "}
                                      </button>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/projectdevelopment"
                                          >
                                            Project Development
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/engineering"
                                          >
                                            Engg. & Design
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/solarcare"
                                          >
                                            Operations & Maintanence
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/training"
                                          >
                                            Training
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="nav-list">
                                    {/* <a href="/">Solutions</a> */}
                                    <div className="dropdown menu-sub-drops">
                                      <button
                                        className="btn btn-secondary dropdown-toggle small-drop-btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Solutions{" "}
                                      </button>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Reduce Power Bills
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Relief From PowerCuts
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Finance
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Elevated Structures
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Tiled Roofs
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Non Penetrating Structures
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Anti Theft
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="nav-list">
                                    {/* <a href="/">SolarCare</a> */}
                                    <div className="dropdown menu-sub-drops">
                                      <button
                                        className="btn btn-secondary dropdown-toggle small-drop-btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Solar Care{" "}
                                      </button>
                                      <ul className="dropdown-menu menu-sub-drops">
                                        <li>
                                          <a
                                            className="sub-sub-links"
                                            href="/solarcare"
                                          >
                                            Introduction
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Module Cleaning
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Upgrade / Revamp
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Third-Party Inspection
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Thermal Inspection
                                          </a>
                                        </li>
                                        <li>
                                          <a className="sub-sub-links" href="/">
                                            Solar Maintenance of Rooftop Plants
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item headaccord">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed drpdwn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                Knowledge Center{" "}
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="submenu">
                                  <li className="nav-list">
                                    <a href="/solarCalculator">
                                      Solar Calculator
                                    </a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/whysolar">Why Solar?</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/howsolarworks">
                                      How Solar Works?
                                    </a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/Blogs">Blogs</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/solarmonitoring">
                                      Solar Monitoring
                                    </a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/faq">FAQ</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/LatestNewsAndEvents">Latest</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item headaccord">
                            <h2 className="accordion-header" id="headingOne">
                              <a href="/partnerwithus" className="nodrpdwn">
                                Partner With Us
                              </a>
                            </h2>
                          </div>
                          <div className="accordion-item headaccord">
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-button collapsed drpdwn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                About Us
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="submenu">
                                  <li className="nav-list">
                                    <a href="/about">About Company</a>
                                  </li>

                                  <li className="nav-list">
                                    <a href="/ourjourney">Our Journey</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/partners">Partners</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/awadrsandcertificate">
                                      Awards and certifications
                                    </a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/referral">
                                      Customer Referral Policy
                                    </a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/testimonial">
                                      Customer Testimonials
                                    </a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/media">Media Coverage</a>
                                  </li>
                                  <li className="nav-list">
                                    <a href="/privacy">Privacy Policy</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                  {/* <!-- navigation area start --> */}
                  <div className="header-nav main-nav-one">
                    <nav>
                      <ul>
                        <li className="">
                          <a className="nav-link" href="/">
                            Home
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/projects">
                            Projects
                          </a>
                        </li>

                        <li className="has-dropdown">
                          <a className="nav-link" href="/">
                            Solar <FaAngleDown />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/subsidy">Subsidy Scheme</a>
                            </li>
                            <li>
                              <a href="/commercial">Commercial</a>
                            </li>
                            <li>
                              <a href="/apartments">Apartments</a>
                            </li>
                            <li className="li-dropend">
                              {/* <a href="/">Systems</a> */}
                              <div className="btn-group dropend">
                                <button
                                  type="button"
                                  className="btn btn-secondary dropdown-toggle sub-drop-btn"
                                  aria-expanded="false"
                                >
                                  Systems
                                </button>
                                <ul className="dropdown-menu sub-drops">
                                  <li>
                                    <a className="sub-sub-links" href="/ongrid">
                                      On Grid Solar PV System
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="sub-sub-links"
                                      href="/offgrid"
                                    >
                                      Off-Grid System
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/hybrid">
                                      Hybrid System
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/pump">
                                      Solar Water Pump
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="li-dropend">
                              {/* <a href="/">Consultancy</a> */}
                              <div className="btn-group dropend">
                                <button
                                  type="button"
                                  className="btn btn-secondary dropdown-toggle sub-drop-btn"
                                  aria-expanded="false"
                                >
                                  Consultancy
                                </button>
                                <ul className="dropdown-menu sub-drops">
                                  <li>
                                    <a
                                      className="sub-sub-links"
                                      href="/projectdevelopment"
                                    >
                                      Project Development
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="sub-sub-links"
                                      href="/engineering"
                                    >
                                      Engg. & Design
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="sub-sub-links"
                                      href="/solarcare"
                                    >
                                      Operations & Maintanence
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="sub-sub-links"
                                      href="/training"
                                    >
                                      Training
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="li-dropend">
                              {/* <a href="/">Solutions</a> */}
                              <div className="btn-group dropend">
                                <button
                                  type="button"
                                  className="btn btn-secondary dropdown-toggle sub-drop-btn"
                                  aria-expanded="false"
                                >
                                  Solutions
                                </button>
                                <ul className="dropdown-menu sub-drops">
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Reduce Power Bills
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Relief From PowerCuts
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Finance
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Elevated Structures
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Tiled Roofs
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Non Penetrating Structures
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Anti Theft
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="li-dropend">
                              {/* <a href="/">SolarCare</a> */}
                              <div className="btn-group dropend">
                                <button
                                  type="button"
                                  className="btn btn-secondary dropdown-toggle sub-drop-btn"
                                  aria-expanded="false"
                                >
                                  Solar Care
                                </button>
                                <ul className="dropdown-menu sub-drops">
                                  <li>
                                    <a
                                      className="sub-sub-links"
                                      href="/solarcare"
                                    >
                                      Introduction
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Module Cleaning
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Upgrade / Revamp
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Third-Party Inspection
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Thermal Inspection
                                    </a>
                                  </li>
                                  <li>
                                    <a className="sub-sub-links" href="/">
                                      Solar Maintenance of Rooftop Plants
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a className="nav-link" href="/">
                            Knowledge Center <FaAngleDown />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/solarCalculator">Solar Calculator</a>
                            </li>
                            <li>
                              <a href="/whysolar">Why Solar?</a>
                            </li>
                            <li>
                              <a href="/howsolarworks">How Solar Works?</a>
                            </li>
                            <li>
                              <a href="/Blogs">Blogs</a>
                            </li>
                            <li>
                              <a href="/solarmonitoring">Solar Monitoring</a>
                            </li>
                            <li>
                              <a href="/faq">FAQ</a>
                            </li>
                            <li>
                              <a href="/LatestNewsAndEvents">Latest</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="nav-link" href="/partnerwithus">
                            Partner with Us
                          </a>
                        </li>
                        <li className="has-dropdown">
                          <a className="nav-link" href="/about">
                            About Us <FaAngleDown />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/about">About Company</a>
                            </li>
                            <li>
                              <a href="/ourjourney">Our Journey</a>
                            </li>
                            <li>
                              <a href="/partners">Partners</a>
                            </li>
                            <li>
                              <a href="/awadrsandcertificate">
                                Awards and certifications
                              </a>
                            </li>
                            <li>
                              <a href="/referral">Customer Referral Policy</a>
                            </li>
                            <li>
                              <a href="/testimonial">Customer Testimonials</a>
                            </li>
                            <li>
                              <a href="/media">Media Coverage</a>
                            </li>
                            <li>
                              <a href="/privacy">Privacy Policy</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- navigation area end --> */}
                  <div className="actions-area">
                    {/* <!-- <div className="search-btn" id="search">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.75 14.7188C16.0625 15.0312 16.0625 15.5 15.75 15.7812C15.625 15.9375 15.4375 16 15.25 16C15.0312 16 14.8438 15.9375 14.6875 15.7812L10.5 11.5938C9.375 12.5 7.96875 13 6.46875 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.875 0 6.46875 0C10.0312 0 12.9688 2.9375 12.9688 6.5C12.9688 8.03125 12.4688 9.4375 11.5625 10.5312L15.75 14.7188ZM1.5 6.5C1.5 9.28125 3.71875 11.5 6.5 11.5C9.25 11.5 11.5 9.28125 11.5 6.5C11.5 3.75 9.25 1.5 6.5 1.5C3.71875 1.5 1.5 3.75 1.5 6.5Z"
                                            fill="#f69322" />
                                    </svg>
                                </div> --> */}

                    <a href="tel:+918123410101" className="rts-btn btn-primary">
                      Reach us : (+91) 8123410101
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header man end --> */}
      </div>
    </Fragment>
  );
}

export default Header;
