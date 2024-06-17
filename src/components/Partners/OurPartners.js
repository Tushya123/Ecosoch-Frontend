import React from "react";
import { Table } from "react-bootstrap";

const OurPartners = () => {
  return (
    <>
      <section className="techn-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt_md--30 mt_sm--40 aglis">
              <div className="about-right-content-area-solar-energy">
                <div className="title-area-center">
                  <p className="title-tag mb-4">
                    <span>Our Partners </span>
                  </p>
                </div>
                <ul
                  className="nav custom-nav-soalr-about nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item partners-pill" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-business"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Business Partners
                    </button>
                  </li>
                  <li className="nav-item partners-pill" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-technology"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Technology Partners
                    </button>
                  </li>
                  <li className="nav-item partners-pill" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-financial"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Financial Partners
                    </button>
                  </li>
                  <li className="nav-item partners-pill" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-digital"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Digital Solar Partners
                    </button>
                  </li>
                </ul>

                <div
                  className="tab-content"
                  id="pills-tabContent"
                  style={{
                    border: "1px solid black",
                    borderRadius: "15px",
                    padding: "15px",
                    margin: "10px",
                  }}
                >
                  <div
                    className="tab-pane fade show active"
                    id="pills-business"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="single-about-content-solar">
                      <img
                        src="assets/images/Partners/Sunlit-1.png"
                        alt="about"
                      />
                      <p className="disc" style={{ padding: "20px" }}>
                        <b>Sunlit Future</b>, (www.sunlitfuture.in), Auroville.
                        Auroville is a self sustainable living township with
                        people from more than 14 countries. EcoSoch & Sunlit
                        Future work together as partners on Co-R&D, emerging
                        technologies, supply chain etc.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-technology"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="single-about-content-solar">
                      <Table>
                        <tbody>
                          <tr style={{ borderBottom: "1px solid lightgrey" }}>
                            <td colSpan={5} className="fin-com-type">
                              <h6>Optimizers</h6>
                            </td>
                            <td colSpan={5} className="fin-com-logo">
                              <img
                                src="assets\images\partners\solaredge-logo-vector.png"
                                alt="solar Edge"
                                style={{ width: "30%" }}
                              />
                            </td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid lightgrey" }}>
                            <td colSpan={5} className="fin-com-type">
                              <h6>Micro Inverters</h6>
                            </td>
                            <td colSpan={5} className="fin-com-logo">
                              <img
                                src="assets\images\partners\Enphase_Logo_Standard_orange_gray_RGB.png"
                                alt="solar Edge"
                                style={{ width: "30%" }}
                              />
                            </td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid lightgrey" }}>
                            <td colSpan={5} className="fin-com-type">
                              <h6>Hybrid Investers</h6>
                            </td>
                            <td colSpan={5} className="fin-com-logo">
                              <img
                                src="assets\images\partners\logo_studer_bleu_rvb.jpg"
                                alt="solar Edge"
                                style={{ width: "30%" }}
                              />
                            </td>
                          </tr>
                          <tr style={{ borderBottom: "1px solid lightgrey" }}>
                            <td colSpan={5} className="fin-com-type">
                              <h6>Off-Grid Investers</h6>
                            </td>
                            <td colSpan={5} className="fin-com-logo">
                              <img
                                src="assets\images\partners\unipar-logo-new.png"
                                alt="solar Edge"
                                style={{ width: "30%" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={5} className="fin-com-type">
                              <h6>Li-ion Batteries</h6>
                            </td>
                            <td colSpan={5} className="fin-com-logo">
                              <img
                                src="assets\images\partners\Screenshot-2023-07-28-121459.png"
                                alt="solar Edge"
                                style={{ width: "30%" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-financial"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div
                      className="single-about-content-solar"
                      style={{ borderBottom: "1px solid black" }}
                    >
                      <div className="row txt-alg">
                        <div className="col-lg-12 technologies-img-wrapper">
                          <div className="left-area-wrapper">
                            <img
                              src="assets/images/Partners/efl.jpg"
                              alt="about"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="disc">
                        Electronica Finance Ltd, incorporated in 1990, is a part
                        of the SRP Electronica Group and a pioneer in the field
                        of Machine Finance. After an eventful journey of close
                        to 3 decades, EFL today has more than 50 offices across
                        the country, has served more than 7500 customers and has
                        an AUM in excess of Rs.1250 crores.
                      </p>
                      <p className="disc">
                        EcoSoch has tied up with EFL to offer Rooftop Solar
                        Loans exclusively for MSME sector
                      </p>
                    </div>
                    <hr />
                    <div className="single-about-content-solar">
                      <div className="row txt-alg">
                        <div className="col-lg-12 technologies-img-wrapper">
                          <div className="left-area-wrapper">
                            <img
                              className="ptb--10"
                              src="assets/images/Partners/logo.jpg"
                              alt="about"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="disc">
                        CreditFair connects personal loan borrowers with
                        investors. They makes entire borrowing process simple
                        and user friendly and you can get your solar loan funded
                        in as little as 48 hours.
                      </p>
                      <p className="disc">
                        EcoSoch has tied up with CreditFair to offer Rooftop
                        Solar Loans exclusively for residential sector
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="pills-digital"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="single-about-content-solar">
                      <img src="assets/images/Partners/Logo.png" alt="about" />
                      <p className="disc" style={{ padding: "20px" }}>
                        SundayGrids is a Digital Solar Platform that enables
                        users to reserve solar from community solar projects to
                        offset their power bills. They believe that making clean
                        energy accessible and convenient is fundamental to
                        accelerate our transition for a sustainable future.
                      </p>
                      <p className="disc" style={{ padding: "20px" }}>
                        EcoSoch has tied up with SundayGrids to help users
                        interested to put up a solar rooftop plant in an
                        alternate manner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
