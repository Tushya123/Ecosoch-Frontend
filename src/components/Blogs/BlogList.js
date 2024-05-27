import React, { Fragment } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import "./BlogStyle.css";
import { BsTags } from "react-icons/bs";
import { RxArrowTopRight } from "react-icons/rx";
import { TfiArrowTopRight } from "react-icons/tfi";

function BlogList() {
  return (
    <Fragment>
      <div className="blog-post-area rts-section-gap">
        <div className="container">
          <div className="row g-24 mt--20">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              {/* <!-- blog-single area start --> */}
              <div className="blog-single-one text-center">
                <a href="blog-details.html" className="thumbnail">
                  <div className="inner">
                    <img src="img/IMG_0299 (1).jpg" alt="blog-image" />
                  </div>
                </a>
                <div className="head">
                  <div className="date-area single-info">
                    <MdOutlineCalendarMonth className="blogdatecal" />
                    <p>1st February,2024</p>
                  </div>
                  <div className="tag-area single-info">
                    <BsTags className="blogdatecal" />
                    <p>Enery,Govt Policy</p>
                  </div>
                </div>
                <div className="body text-start">
                  <a href="blog-details.html">
                    <h5 className="title">
                      Solar rooftop subsidy scheme from Central Govt for
                      residential consumers
                    </h5>
                  </a>
                  <a
                    href="blog-details.html"
                    className="rts-btn btn-border radious-0"
                  >
                    Read Details &nbsp;
                    <TfiArrowTopRight />{" "}
                  </a>
                </div>
              </div>
              {/* <!-- blog-single area end --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              {/* <!-- blog-single area start --> */}
              <div className="blog-single-one text-center">
                <a href="blog-details.html" className="thumbnail">
                  <div className="inner">
                    <img src="img/servo-stabilizer2.png" alt="blog-image" />
                  </div>
                </a>
                <div className="head">
                  <div className="date-area single-info">
                    <MdOutlineCalendarMonth className="blogdatecal" />
                    <p> 8th July,2023</p>
                  </div>
                  <div className="tag-area single-info">
                    <BsTags className="blogdatecal" />
                    <p> By Newil Antony</p>
                  </div>
                </div>
                <div className="body text-start">
                  <a href="blog-details.html">
                    <h5 className="title">
                      Apartments,Building,Energy,Engineering,Off-Grid
                      System,Solar systems
                    </h5>
                  </a>
                  <a
                    href="blog-details.html"
                    className="rts-btn btn-border radious-0"
                  >
                    Read Details &nbsp;
                    <TfiArrowTopRight />{" "}
                  </a>
                </div>
              </div>
              {/* <!-- blog-single area end --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              {/* <!-- blog-single area start --> */}
              <div className="blog-single-one text-center">
                <a href="blog-details.html" className="thumbnail">
                  <div className="inner">
                    <img
                      src="img/How-to-connect-400x335.png"
                      alt="blog-image"
                    />
                  </div>
                </a>
                <div className="head">
                  <div className="date-area single-info">
                    <MdOutlineCalendarMonth className="blogdatecal" />
                    <p>March 15, 2022</p>
                  </div>
                  <div className="tag-area single-info">
                    <BsTags className="blogdatecal" />
                    <p>Clean, Service</p>
                  </div>
                </div>
                <div className="body text-start">
                  <a href="blog-details.html">
                    <h5 className="title">
                      Pre-Charge Resistors: Essential for Dependable and Safe
                      Battery Operation
                    </h5>
                  </a>
                  <a
                    href="blog-details.html"
                    className="rts-btn btn-border radious-0"
                  >
                    Read Details &nbsp;
                    <TfiArrowTopRight />
                  </a>
                </div>
              </div>
              {/* <!-- blog-single area end --> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BlogList;
