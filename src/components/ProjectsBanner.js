import React, { Fragment } from "react";

function ProjectsBanner() {
  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <span className="bg-text-stok">Our Project</span>
                  <div className="title">
                    <a href="/">Our Project</a>
                  </div>
                  <div className="slug ">
                    <a href="/">HOME /</a>
                    <a className="active" href="/project">
                      PROJECT
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

export default ProjectsBanner;
