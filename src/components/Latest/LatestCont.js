import React, { Fragment } from "react";
import "./Latest.css";

function LatestCont() {
  return (
    <Fragment>
      <div className="container">
        <ul className="nav nav-tabs latestul" id="myTab" role="tablist">
          <li className="" role="presentation">
            <button
              className="latestlibtn"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
              autoFocus
            >
              News
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="latestlibtn"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Events
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <div className="row g-24 mt--30">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="single-blog-solaric-sm">
                  <a href="blog-details.html" className="thumbnail">
                    <img src="img/3-700x441 (Custom).jpeg" alt="blog-area" />
                  </a>
                  <div className="inner-content-solari-blog">
                    <div className="head">
                      <div className="single">
                        <i className="fa-regular fa-clock"></i>
                        <span>21 April</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-user"></i>
                        <span>O Comments</span>
                      </div>
                    </div>
                    <div className="body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Lockdown Due To Covid-19 as Force Majeure
                        </h5>
                      </a>
                      <a
                        href="blog-details.html"
                        className="rts-btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-blog-solaric-sm">
                  <a href="blog-details.html" className="thumbnail">
                    <img
                      src="img/WhatsApp-Image-2020-04-11-at-2.26.20-PM-700x441 (Custom).jpeg"
                      alt="blog-area"
                    />
                  </a>
                  <div className="inner-content-solari-blog">
                    <div className="head">
                      <div className="single">
                        <i className="fa-regular fa-clock"></i>
                        <span>21 April</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-user"></i>
                        <span>0 Comments</span>
                      </div>
                    </div>
                    <div className="body">
                      <a href="blog-details.html">
                        <h5 className="title">EcoSoch and Electric Mobility</h5>
                      </a>
                      <a
                        href="blog-details.html"
                        className="rts-btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="single-blog-solaric-sm">
                  <a href="#" className="thumbnail">
                    <img
                      src="img/rsz_112_img_20160805_121703177-1 (1) (Custom).jpg"
                      alt="blog-area"
                    />
                  </a>
                  <div className="inner-content-solari-blog">
                    <div className="head">
                      <div className="single">
                        <i className="fa-regular fa-clock"></i>
                        <span>21st April</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-user"></i>
                        <span>0 comments</span>
                      </div>
                    </div>
                    <div className="body">
                      <a href="#">
                        <h5 className="title">
                          Karnataka(BESCOM) Solar Rooftop Policy{" "}
                        </h5>
                      </a>
                      <a href="#" className="rts-btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-blog-solaric-sm">
                  <a href="blog-details.html" className="thumbnail">
                    <img
                      src="img/12055-01-700x441 (Custom).jpeg"
                      alt="blog-area"
                    />
                  </a>
                  <div className="inner-content-solari-blog">
                    <div className="head">
                      <div className="single">
                        <i className="fa-regular fa-clock"></i>
                        <span>1st june, 2021</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-user"></i>
                        <span>0 comments</span>
                      </div>
                    </div>
                    <div className="body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Bengaluru BESCOM hiked the electricity
                        </h5>
                      </a>
                      <a
                        href="blog-details.html"
                        className="rts-btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade cnnt"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="single-blog-solaric-sm">
                <a href="blog-details.html" className="thumbnail">
                  <img src="img/3-700x441 (Custom).jpeg" alt="blog-area" />
                </a>
                <div className="inner-content-solari-blog">
                  <div className="head">
                    <div className="single">
                      <i className="fa-regular fa-clock"></i>
                      <span>21 April</span>
                    </div>
                    <div className="single">
                      <i className="fa-regular fa-user"></i>
                      <span>O Comments</span>
                    </div>
                  </div>
                  <div className="body">
                    <a href="blog-details.html">
                      <h5 className="title">Events comming soon</h5>
                    </a>
                    <a href="blog-details.html" className="rts-btn btn-primary">
                      Read More
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

export default LatestCont;
