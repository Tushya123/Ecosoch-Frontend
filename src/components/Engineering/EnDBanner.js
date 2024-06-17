import React, { Fragment } from "react";

function EnDBanner() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <span className="bg-text-stok">Engineering and Design</span>
                  <div className="title">
                    <a href="#">Engineering and Design</a>
                  </div>
                  <div className="slug ">
                    <a href="#index.html">SOLAR /</a>
                    <a className="active" href="#index.html">
                      Engineering and Design{" "}
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

export default EnDBanner;
