import React, { Fragment } from "react";

function BoxImage({ Title, url, key }) {
  return (
    <Fragment id={key}>
      <div id="box-with-image" className="col-md-12 position-relative">
        <div className="banner-solari-2-content ptb--200 ">
          <h1>{Title}</h1>
          <div className="button-container position-absolute top-50 start-50 translate-middle1">
            <a href="/" className="btn rts-btn btn-primary m-3 ">
              Get a Quote
            </a>
            <a href="/" className="btn rts-btn btn-primary m-3 custom-btn">
              Explore More
            </a>
          </div>
        </div>
        <img src={url} alt="" />
      </div>
    </Fragment>
  );
}

export default BoxImage;
