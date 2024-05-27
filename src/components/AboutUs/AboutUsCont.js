import React, { Fragment } from "react";
import './AboutUs.css'

function AboutUsCont() {
  return (
    <Fragment>
      <div className="rts-solar-solution-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-area-left-six">
                <h2 className="title">
                  EcoSoch Solar Company in Bangalore
                </h2>
                {/* <!-- <div className="engineer-experience-area">
                            <div className="authora-area">
                                <img src="assets/images/about/32.png" alt="about-thumba">
                                <div className="infor-mation">
                                    <p className="name">Mack Donor </p>
                                    <span>Solar Engineer </span>
                                </div>
                            </div>
                            <div className="experience-area">
                                <span className="expe-year">25+</span>
                                <p>Year <br>
                                    Work Experience </p>
                            </div>
                        </div> --> */}
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
      <div class="rts-call-to-action rts-section-gapBottom custom-new">
        <div class="container">
          <div class="row g-24">
            <div class="col-lg-6">
              <div class="vis-mis">
                {/* <!-- cta wrapper area start --> */}
                <div class="cta-main-wrapper-one">
                  <div class="til-up">
                    <h4 class="tile-h4">Vision</h4>
                    <p class="txt-clr">
                      Our vision is to offer solar energy solutions and promote
                      sustainable living for all. We identify opportunities to
                      enhance sustainability, competitiveness, and profitability
                      for homes and organizations, making them more valuable to
                      society. We aim to deliver decentralized rooftop solar and
                      energy-efficient solutions to encourage the use of solar
                      and other renewable energy sources in daily life.
                    </p>
                  </div>
                  {/* <!-- <div class="icon">
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4468 14.6191C16.8502 14.6854 16.4193 15.2489 16.4525 15.8787C16.5188 16.4753 17.0491 16.9393 17.712 16.873C18.3749 16.8068 19.0378 17.0056 19.5019 17.4697C19.9991 17.9669 20.1979 18.6298 20.1316 19.2927C20.0653 19.9556 20.5294 20.4859 21.126 20.5522C21.4906 20.5854 21.8221 20.4528 22.0541 20.2208C22.2198 20.055 22.3524 19.7899 22.3855 19.5578C22.5181 18.1657 22.0541 16.8399 21.0929 15.8787C20.1648 14.9506 18.839 14.4866 17.4468 14.6191ZM17.0159 10.1445C16.353 10.2108 15.9221 10.7743 15.9884 11.3709C16.0216 12.0006 16.5851 12.4315 17.2148 12.3984C19.2698 12.1995 21.2254 12.8956 22.6507 14.3208C24.0428 15.713 24.772 17.7017 24.5732 19.7567C24.5069 20.3533 24.9378 20.9168 25.5675 20.95C25.9321 20.9831 26.2304 20.8837 26.4625 20.6517C26.6613 20.4528 26.7608 20.2208 26.8271 19.9556C27.1254 17.2708 26.1973 14.6191 24.2748 12.6967C22.3524 10.7743 19.7339 9.87932 17.0159 10.1445ZM16.5851 5.66983C15.9553 5.70297 15.5244 6.26645 15.5575 6.89621C15.6238 7.49284 16.1542 7.95687 16.7839 7.92373C20.1648 7.59227 23.4793 8.71922 25.8658 11.1057C28.2192 13.459 29.3793 16.8068 29.0478 20.1876C29.0147 20.8174 29.4787 21.3477 30.0753 21.414C30.4399 21.4471 30.7714 21.3146 31.0034 21.0825C31.1691 20.9168 31.2686 20.6848 31.3017 20.3865C31.7326 16.3759 30.3405 12.3984 27.4568 9.51472C24.54 6.5979 20.6288 5.27208 16.5851 5.66983ZM12.8065 18.7955C13.1711 18.4972 13.3368 17.9337 13.1379 17.4697L11.4475 13.5916C11.2486 13.0613 10.652 12.7961 10.1548 12.8956L6.50878 13.7574C6.0116 13.8568 5.647 14.354 5.647 14.8843C5.647 23.9662 13.0385 31.3577 22.1204 31.3577C22.6507 31.3577 23.1479 30.9931 23.2473 30.4959L24.1091 26.8499C24.2085 26.3527 23.9434 25.7561 23.4131 25.5572L19.535 23.8668C19.071 23.6679 18.5075 23.8336 18.2092 24.1982L16.6182 26.1207C14.0991 24.9274 12.0772 22.9056 10.884 20.3865L12.8065 18.7955Z" fill="white" />
                            </svg>
                        </div>
                        <div class="info-area">
                            <span>
                                Call Us For Service
                            </span>
                            <a href="tel: (+91) 8123410101">
                                <h4 class="title">
                                    (+91) 8123410101
                                </h4>
                            </a>
                            <p>Call 24/7 Anytime For Your Problem</p>
                        </div> --> */}
                </div>
              </div>
              {/* <!-- cta wrapper area end --> */}
            </div>
            <div class="col-lg-6">
              <div class="vis-mis">
                {/* <!-- cta wrapper area start --> */}
                <div class="cta-main-wrapper-one cta_primary">
                  <div class="til-up">
                    <h4 class="tile-h4">Mission</h4>
                    <p class="txt-clr">
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
                  {/* <!-- <div class="icon">
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13.5C11.2031 13.5 10.4062 13.2656 9.75 12.75L0 5.15625V15.75C0 17.0156 0.984375 18 2.25 18H21.75C22.9688 18 24 17.0156 24 15.75V5.15625L14.2031 12.75C13.5469 13.2656 12.75 13.5 12 13.5ZM0.75 3.84375L10.6875 11.5781C11.4375 12.1406 12.5156 12.1406 13.2656 11.5781L23.2031 3.84375C23.6719 3.46875 24 2.85938 24 2.25C24 1.03125 22.9688 0 21.75 0H2.25C0.984375 0 0 1.03125 0 2.25C0 2.85938 0.28125 3.46875 0.75 3.84375Z" fill="#FD8F14" />
                            </svg>
                        </div>
                        <div class="info-area">
                            <span>
                                Mail Us Anytime
                            </span>
                            <a href="mailto:info@ecosoch.com">
                                <h4 class="title">
                                    info@ecosoch.com
                                </h4>
                            </a>
                            <p>Please click on the mail and mail us</p>
                        </div> --> */}
                </div>
              </div>
              {/* <!-- cta wrapper area end --> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUsCont;
