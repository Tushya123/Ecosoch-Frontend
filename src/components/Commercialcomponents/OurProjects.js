import React, { Fragment } from "react";

function OurProjects() {
  return (
    <Fragment>
      <div className="rts-Product-area rts-section-gap">
        <div className="container">
          <div className="row mb--70">
            <div className="col-12 text-center">
              <p className="title-tag text-center">
                <span>Our</span> Projects
              </p>
            </div>
            <br />
            <br />
            <div className="col-lg-12">
              {/* <!-- project title btn main wrapper --> */}
              <div className="project-soalr-wrapper">
                <div className="title-area">
                  <div className="title-area-left">
                    <h2 className="xxx title">
                      Commercial and Industrial Solar Projects
                    </h2>
                  </div>
                </div>
                <a href="#" className="rts-btn btn-primary">
                  View All Projects
                </a>
              </div>
              {/* <!-- project title btn main wrapper end --> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="rts-solar-single-product-one">
                <a href="#" className="thumbnail">
                  <img src="img/x-1.jpg" alt="project" />
                </a>
                <div className="inner-content">
                  <a href="#">
                    <h5 className="xxx title">Manyata embassy business park</h5>
                  </a>
                  <span>Commercial, Industrial, On-Grid</span>
                </div>
              </div>
              {/* <!-- single product area end --> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rts-solar-single-product-one">
                <a href="#" className="thumbnail">
                  <img src="img/SCR-20230724-nsq.jpg" alt="project" />
                </a>
                <div className="inner-content">
                  <a href="#">
                    <h5 className="xxx title">Geetham shares and Securities</h5>
                  </a>
                  <span>Commercial, Industrial, On-Grid</span>
                </div>
              </div>
              {/* <!-- single product area end -->/ */}
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rts-solar-single-product-one">
                <a href="#" className="thumbnail">
                  <img src="img/Solar-for-MSME.jpg" alt="project" />
                </a>
                <div className="inner-content">
                  <a href="#">
                    <h5 className="xxx title">Krishi polymar</h5>
                  </a>
                  <span>Make Your House Lighten</span>
                </div>
              </div>
              {/* <!-- single product area end --> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rts-solar-single-product-one">
                <a href="#" className="thumbnail">
                  <img src="img/1-5.jpg" alt="project" />
                </a>
                <div className="inner-content">
                  <a href="#">
                    <h5 className="xxx title">Solar for Institution</h5>
                  </a>
                  <span>Commercial, Institutes</span>
                </div>
              </div>
              {/* <!-- single product area end --> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rts-solar-single-product-one">
                <a href="#" className="thumbnail">
                  <img src="img/Home_5.jpg" alt="project" />
                </a>
                <div className="inner-content">
                  <a href="#">
                    <h5 className="xxx title">Solar rooftop system-AKR</h5>
                  </a>
                  <span>Commerical</span>
                </div>
              </div>
              {/* <!-- single product area end --> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rts-solar-single-product-one">
                <a href="#" className="thumbnail">
                  <img
                    src="img/rsz_112_img_20160805_121703177-1.jpg"
                    alt="project"
                  />
                </a>
                <div className="inner-content">
                  <a href="#">
                    <h5 className="xxx title">Solar machine for hospital</h5>
                  </a>
                  <span>Commercial, On-Grid</span>
                </div>
              </div>
              {/* <!-- single product area end --> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OurProjects;
