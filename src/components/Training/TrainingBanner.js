import React, { Fragment } from "react";

function TrainingBanner() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <div className="title">
                    <a href="/">Training</a>
                  </div>
                  <div className="slug ">
                    <a href="#index.html">HOME /</a>
                    <a className="active" href="#index.html">
                      Training{" "}
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

export default TrainingBanner;
