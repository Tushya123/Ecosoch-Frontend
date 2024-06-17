import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function AboutCompany() {
  const isMobile = useMediaQuery({ maxWidth: 990 });
  const [about, setabout] = useState([]);
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/HomeAboutUs`
        );
        // console.log(res.data);
        setabout(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchAbout();
  }, []);

  return (
    <Fragment>
      {isMobile ? (
        <div className="rts-about-area rts-section-gapBottom position-relative padding-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {about?.map((data, index) => (
                  <div key={index} className="solari-about-left-content">
                    <div className="">
                      <h1 className="title-tag-two">About Company</h1>
                    </div>
                    <div className="title-area-left mt">
                      <h2 className="title title-big">
                        {/* Our mission is to make solar energy accessible */}
                        {data.Title}
                      </h2>
                    </div>

                    <div className="content-inner">
                      <p
                        className="disc"
                        dangerouslySetInnerHTML={{ __html: data.Desc }}
                      >
                        {/* we are passionate about transforming the way we power
                        our world. As a leading provider of renewable energy
                        solutions, we are committed to driving the transition to
                        a cleaner, more sustainable future. */}
                        {/* {data.Desc} */}
                      </p>
                      <div className="col-lg-6 mt_md--50 mt_sm--40">
                        <div className="thumbnail-solari-about">
                          <img
                            src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${data.AboutUsImage}`}
                            alt="about"
                          />
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="row num-rw pt-0 w-100 ml--0">
                        <div className="col-4">
                          <div className="number-txt">
                            <p className="num-txt">{data.Experience}</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="num-de">
                            <p className="number-des">
                              YEARS
                              <br />
                              EXPERIENCE
                              <br />
                              IN IT
                            </p>
                          </div>
                        </div>

                        <div className="col-4">
                          <img
                            src="img/experience-tag.png"
                            alt="Experience"
                            className="num-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rts-about-area rts-section-gapBottom position-relative padding-sec">
          <div className="container">
            {about.map((data, index) => (
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div key={index} className="solari-about-left-content">
                    <div className="">
                      <h1 className="title-tag-two">About Company</h1>
                    </div>
                    <div className="title-area-left mt">
                      <h2 className="title title-big">
                        {/* Our mission is to make solar energy accessible */}
                        {data.Title}
                      </h2>
                    </div>

                    <div className="content-inner">
                      <p
                        className="disc"
                        dangerouslySetInnerHTML={{ __html: data.Desc }}
                      >
                        {/* we are passionate about transforming the way we power
                        our world. As a leading provider of renewable energy
                        solutions, we are committed to driving the transition to
                        a cleaner, more sustainable future. */}
                      </p>
                      <div className="row num-rw pt-0">
                        <div className="col-4">
                          <div className="number-txt">
                            <p className="num-txt">{data.Experience}</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="num-de">
                            <p className="number-des">
                              YEARS
                              <br />
                              EXPERIENCE
                              <br />
                              IN IT
                            </p>
                          </div>
                        </div>

                        <div className="col-4">
                          <img
                            src="img/experience-tag.png"
                            alt="Experience"
                            className="num-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt_md--50 mt_sm--40">
                  <div className="thumbnail-solari-about">
                    <img
                      src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${data.AboutUsImage}`}
                      alt="about"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default AboutCompany;
