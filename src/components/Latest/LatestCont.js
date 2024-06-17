import React, { Fragment, useEffect, useState } from "react";
import "./Latest.css";
import axios from "axios";

function LatestCont() {
  const [disp, setdisp] = useState("news");
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const news = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/LatestNews`
        );
        const events = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/LatestEvents`
        );
        setNews(news.data);
        setEvents(events.data);

        // console.log("news", events.data);
      } catch (error) {
        console.log("News", error);
      }
    };
    fetchLatest();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <ul className="nav nav-tabs latestul" id="myTab" role="tablist">
          <li className="" role="presentation">
            <button
              className={`latestlibtn ${disp === "news" && "active"}`}
              onClick={() => {
                setdisp("news");
              }}
            >
              News
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`latestlibtn ${disp === "events" && "active"}`}
              onClick={() => {
                setdisp("events");
              }}
            >
              Events
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className={`tab-pane fade show ${disp === "news" && "active"}`}>
            <div className="row g-24 mt--30">
              {news?.map((news, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                  <div className="single-blog-solaric-sm">
                    <a href="blog-details.html" className="thumbnail">
                      <img
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${news.NewsImage} `}
                        alt="blog-area"
                        style={{ width: "240px", height: "130px" }}
                      />
                    </a>
                    <div className="inner-content-solari-blog">
                      <div className="head">
                        <div className="single">
                          <i className="fa-regular fa-clock"></i>
                          <span>{news.NewsDate}</span>
                        </div>
                        {/* <div className="single">
                          <i className="fa-regular fa-user"></i>
                          <span>O Comments</span>
                        </div> */}
                      </div>
                      <div className="body">
                        <a href="blog-details.html">
                          <h5 className="title">
                            {/* Lockdown Due To Covid-19 as Force Majeure */}
                            {news.Title}
                          </h5>
                        </a>
                        <a
                          href={`/newnews/${news._id}`}
                          className="rts-btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-lg-6 col-md-6 col-sm-12">
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
              </div> */}
              {/* <div className="col-lg-6 col-md-6 col-sm-12">
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
              </div> */}

              {/* <div className="col-lg-6 col-md-6 col-sm-12">
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
              </div> */}
            </div>
          </div>
          <div
            className={`tab-pane fade show ${disp === "events" && "active"}`}
            // id="profile-tab-pane"
            // role="tabpanel"
            // aria-labelledby="profile-tab"
            // tabindex="0"
          >
            {events?.map((event, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                <div className="single-blog-solaric-sm">
                  <a href="blog-details.html" className="thumbnail">
                    <img
                      src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${event.EventsImage}`}
                      style={{ width: "240px", height: "130px" }}
                      alt="blog-area"
                    />
                  </a>
                  <div className="inner-content-solari-blog">
                    <div className="head">
                      <div className="single">
                        <i className="fa-regular fa-clock"></i>
                        <span>{event.EventsDate}</span>
                      </div>
                      {/* <div className="single">
                        <i className="fa-regular fa-user"></i>
                        <span>O Comments</span>
                      </div> */}
                    </div>
                    <div className="body">
                      <a href="blog-details.html">
                        <h5 className="title">{event.Title}</h5>
                      </a>
                      <a
                        href={`/newevent/${event._id}`}
                        className="rts-btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-6 col-md-6 col-sm-12">
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
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LatestCont;
