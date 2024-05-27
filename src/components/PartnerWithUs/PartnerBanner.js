import React, { Fragment } from "react";

function PartnerBanner() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <span className="bg-text-stok">Partner</span>
                  <div className="title ">
                    <a href="/partnerwithus">Partner with Us</a>
                  </div>
                  <div className="slug ">
                    <a href="#index.html">Eco Soch /</a>
                    <a className="active" href="#index.html">
                      Partner with us
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

export default PartnerBanner;
