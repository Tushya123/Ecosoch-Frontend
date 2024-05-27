import React, { Fragment } from "react";

function FAQBanner() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <span className="bg-text-stok">FAQs</span>
                  <div className="title">
                    <a href="#">FAQs</a>
                  </div>
                  <div className="slug ">
                    <a href="#index.html">SOLAR /</a>
                    <a className="active" href="#index.html">
                      FAQs
                    </a>
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

export default FAQBanner;
