import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";

function ApartmentFeatures() {
  return (
    <Fragment>
      <div className="rts-service-area-height -solari rts-section-gap position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center">
                <p className="title-tag">
                  <span>Features for </span> Commercial and Industrial sector
                </p>
              </div>
            </div>
          </div>
          <div className="row g-24 mt--20">
            <div className="col-xl-3 col-lg-4 col-sm-6 col-sm-6 col-12">
              <div className="single-solari-service-start">
                <div className="icon-area">
                  <img src="img/no-funds-3350251-2787544.png" alt="" />
                </div>
                <a href="/">
                  <h5 className="title">Zero-Investment</h5>
                </a>
                <p className="disc">
                  We have tied up with investors to offer the standard RESCO and
                  Co-RESCO model in Karnataka for Commercial and Industrial
                  units.
                </p>
                <a href="/" className="read-more-btn">
                  Read More &nbsp;
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-sm-6 col-12">
              <div className="single-solari-service-start two">
                <div className="icon-area">
                  <img src="img/cashback-200x200.png" alt="" />
                </div>
                <a href="/">
                  <h5 className="title">Easy Finance</h5>
                </a>
                <p className="disc">
                  Avail collateral free finance from our financial partners for
                  your rooftop solar plant. We will take care of all the
                  paperwork and the loan can be sanctioned in 7 days
                </p>
                <a href="/" className="read-more-btn">
                  Read More &nbsp;
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-sm-6 col-12">
              <div className="single-solari-service-start four">
                <div className="icon-area">
                  <img
                    src="img/money-and-finance-company-svgrepo-com-300x300.png"
                    alt=""
                  />
                </div>
                <a href="/">
                  <h5 className="title">Govt Subsidy</h5>
                </a>
                <p className="disc">
                  Additionally, government subsidies (PM Surya Ghar Muft Bijli
                  Yojana) for rooftop solar installations can further lower
                  upfront costs and accelerate the payback period for apartment
                  complexes.
                </p>
                <a href="/" className="read-more-btn">
                  Read More &nbsp;
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-sm-6 col-12">
              <div className="single-solari-service-start three">
                <div className="icon-area">
                  <img src="img/tax-200x200.png" alt="" />
                </div>
                <a href="/">
                  <h5 className="title">Tax Benefits</h5>
                </a>
                <p className="disc">
                  40% Accelerated Depreciation benefit is available for
                  Companies and up to 60% Depreciation benefit is available for
                  Manufacturers.
                </p>
                <a href="/" className="read-more-btn">
                  Read More &nbsp;
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 col-sm-6 col-12">
              <div className="single-solari-service-start four">
                <div className="icon-area">
                  <img src="img/India_rupee_bag-200x200.png" alt="" />
                </div>
                <a href="/">
                  <h5 className="title">Assured Returns</h5>
                </a>
                <p className="disc">
                  The payback period is only 3-4 years for your investment and
                  you can enjoy returns of around 25-30% (IRR). The cost of
                  producing 1 unit 2 rupee
                </p>
                <a href="/" className="read-more-btn">
                  Read More &nbsp;
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ApartmentFeatures;
