import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import "./BlogStyle.css";
import { BsTags } from "react-icons/bs";
import { TfiArrowTopRight } from "react-icons/tfi";
import axios from "axios";
import moment from "moment/moment";
import { Link } from "react-router-dom";

function BlogList() {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/blogs`
        );
        setBlog(response.data);
        // console.log("data", response.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Fragment>
      <div className="blog-post-area rts-section-gap">
        <div className="container">
          <div className="row g-24 mt--20">
            {blog?.map((b) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                {/* <!-- blog-single area start --> */}
                <div className="blog-single-one text-center">
                  <Link to={`/blogdesc/${b._id}`} className="thumbnail">
                    <div className="inner">
                      <img
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${b.blogImage}`}
                        alt="blog-image"
                      />
                    </div>
                  </Link>
                  <div className="head">
                    <div className="date-area single-info">
                      <MdOutlineCalendarMonth className="blogdatecal" />
                      <p>{moment(b.createdAt).format("DD MMMM YYYY")}</p>
                    </div>
                    <div className="tag-area single-info">
                      <BsTags className="blogdatecal" />
                      <p>{b.blogAuthor}</p>
                    </div>
                  </div>
                  <div className="body text-start">
                    <a href="blog-details.html">
                      <h5 className="title">
                        {/* Solar rooftop subsidy scheme from Central Govt for
                        residential consumers */}
                        {b.blogTitle}
                      </h5>
                    </a>
                    <Link
                      to={`/blogdesc/${b._id}`}
                      className="rts-btn btn-border radious-0"
                    >
                      Read Details &nbsp;
                      <TfiArrowTopRight />{" "}
                    </Link>
                  </div>
                </div>
                {/* <!-- blog-single area end --> */}
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12">
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
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
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
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BlogList;
