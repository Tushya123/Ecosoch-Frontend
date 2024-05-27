import React, { Fragment } from 'react'

function AboutUsBanner() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image about-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <span className="bg-text-stok">About us</span>
                  <div className="title">
                    <a href="/about">About us</a>
                  </div>
                  <div className="slug ">
                    <a href="#index.html">Ecosoch /</a>
                    <a className="active" href="#index.html">
                      About us
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

export default AboutUsBanner
