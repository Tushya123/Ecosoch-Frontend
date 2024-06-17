import React, { Fragment } from "react";
import "./AboutUs.css";

function AboutUsCont() {
  return (
    <Fragment>
      <div className="rts-solar-solution-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-area-left-six">
                <h2 className="title">EcoSoch Solar Company in Bangalore</h2>

                <p className="disc">
                  EcoSoch™, a leading solar company in Bangalore, is committed
                  to providing sustainable energy solutions, including solar
                  rooftop systems. Established in 2011 and incubated from Sunlit
                  Future, Auroville, we’ve evolved into EcoSoch Solar Pvt. Ltd.
                  Our comprehensive services cover solar rooftop installations,
                  operation, maintenance, energy consultancy, and electric
                  mobility infrastructure. We strive to address rising
                  electricity costs and climate change by leveraging advanced
                  technologies and rigorous testing on our rooftops. Contact us
                  for all your solar rooftop needs and subsidies in Bangalore.
                </p>
                {/* <!-- <a className="button-circle-text" href="#">
                            <i className="fa-solid fa-arrow-up-right"></i>
                            Learn More
                        </a> --> */}
              </div>
            </div>
            <div className="col-lg-6 justify-content-xl-end justify-content-lg-end justify-content-start mt_md--50 mt_sm--50 d-flex justify-content-md-start justify-content-sm-start">
              <div className="thumbnail-about-six">
                <img src="assets/images/about/31.png" alt="about-area" />
                <img
                  className="about-move images"
                  src="assets/images/about/33.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-call-to-action rts-section-gapBottom custom-new">
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-6">
              <div className="vis-mis">
                <div className="cta-main-wrapper-one">
                  <div className="til-up">
                    <h4 className="tile-h4">Vision</h4>
                    <p className="txt-clr">
                      Our vision is to offer solar energy solutions and promote
                      sustainable living for all. We identify opportunities to
                      enhance sustainability, competitiveness, and profitability
                      for homes and organizations, making them more valuable to
                      society. We aim to deliver decentralized rooftop solar and
                      energy-efficient solutions to encourage the use of solar
                      and other renewable energy sources in daily life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vis-mis">
                <div className="cta-main-wrapper-one cta_primary">
                  <div className="til-up">
                    <h4 className="tile-h4">Mission</h4>
                    <p className="txt-clr">
                      Our mission is to design and integrate decentralized solar
                      rooftop systems on buildings and farms to bring ecological
                      and economical benefits to our clients and the world. We
                      provide fully customized solar rooftop solutions with the
                      utmost quality, safety, and aesthetics. Additionally, we
                      ensure our systems are fully monitored and remotely
                      maintainable to maximize their lifespan. Our team achieves
                      this by prioritizing cutting-edge technology, installation
                      quality, and system safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUsCont;
