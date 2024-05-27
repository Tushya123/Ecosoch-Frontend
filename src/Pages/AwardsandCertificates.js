import React from "react";
import { Fragment } from "react";

function AwardsandCertificates() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <span className="bg-text-stok">Certificates</span>
                  <div className="title ">
                    <a href="/">Awards and Certificates</a>
                  </div>
                  <div className="slug">
                    <a href="#index.html">Eco Soch /</a>
                    <a className="active" href="#index.html">
                      Awards and Certificates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-project-page-project rts-section-gap">
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="project-one-wrapper">
                {/* <!-- <div className="shape"><img src="img/shap.png" alt="shape"></div> --> */}
                <a href="/" className="thumbnail">
                  <img src="img/certificate-1.webp" alt="project" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="project-one-wrapper">
                {/* <!-- <div className="shape"><img src="img/shap.png" alt="shape"></div> --> */}
                <a href="/" className="thumbnail">
                  <img src="img/certificate-2.webp" alt="project" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="project-one-wrapper">
                {/* <!-- <div className="shape"><img src="img/shap.png" alt="shape"></div> --> */}
                <a href="/" className="thumbnail">
                  <img src="img/certificate-4.webp" alt="project" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="project-one-wrapper">
                {/* <!-- <div className="shape"><img src="img/shap.png" alt="shape"></div> --> */}
                <a href="/" className="thumbnail">
                  <img src="img/certificate-5.webp" alt="project" />
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-6 col-12">
              <div className="project-one-wrapper">
                {/* <!-- <div className="shape"><img src="img/shap.png" alt="shape"></div> --> */}
                <a href="/" className="thumbnail">
                  <img src="img/certificate-3.webp" alt="project" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AwardsandCertificates;
