import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function RecentWork() {
  const [disp, setDisp] = useState("all");
  const [projectDetails, setProjectDetails] = useState(null);
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const allProjects = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/projectdetail`
        );
        setProjectDetails(allProjects.data);
        // console.log("all", allProjects.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchAllProjects();
    // console.log("Projects", projectDetails);
  }, []);

  function handleClick(filter) {
    setDisp(filter);
  }

  return (
    <Fragment>
      <div
        className="rts-client-review-area-h2 rts-section-gapBottom "
        style={{ marginTop: "70px", zIndex: "1" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center">
                <div className="title-new">
                  <h1 className="title-tag">EXPLORE RECENT WORKS</h1>
                </div>

                <h6 className="title skew-up" style={{ opacity: "1" }}>
                  <div
                    className="word-line"
                    style={{
                      display: "block",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      EcoSoch
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      Solar
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      offers
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      unparalleled
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      service,
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      quality,
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      and
                    </div>{" "}
                    <div
                      className="word"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      efficiency.
                    </div>
                  </div>
                </h6>
              </div>
            </div>
          </div>

          <div id="btncontainer" className="filter">
            <a
              className="btn tab-btn btn-active"
              onClick={() => handleClick("all")}
            >
              ALL
            </a>
            <a
              className="btn tab-btn"
              onClick={() => handleClick("apartments")}
            >
              Apartments
            </a>
            <a
              className="btn tab-btn"
              onClick={() => handleClick("commercial")}
            >
              Commercial
            </a>
            <a
              className="btn tab-btn"
              onClick={() => handleClick("industrial")}
            >
              Industrial
            </a>
            <a
              className="btn tab-btn"
              onClick={() => handleClick("residential")}
            >
              Residential
            </a>
          </div>
          {disp === "all" ? (
            <div className="gallery sets">
              {projectDetails?.map((project, index) => (
                <div className="card-new" key={index}>
                  <a href="/" className="all Residential">
                    <img
                      alt=""
                      src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                    />
                  </a>
                  <div className="card-text">
                    <h6>{project.title}</h6>
                    <p> {project.subtitle}</p>
                  </div>
                </div>
              ))}
              {/* <div className="card-new">
                <a href="/" className="all Residential">
                  <img alt="" src="img/work/work-1.jpeg" />
                </a>
                <div className="card-text">
                  <h6>On Grid Residential</h6>
                  <p> 3.56 kWp On-Grid Solar System, JP Nagar</p>
                </div>
              </div> */}
              {/* <div className="card-new">
                <a href="/" className="all Industrial Commercial">
                  <img alt="" src="img/work/work-2.jpeg" />
                </a>
                <div className="card-text">
                  <h6>Commercial, On Grid</h6>
                  <p>
                    Geetham Shares and Securities- 34.78KWP Solar On Grid System
                    at Yelahanka
                  </p>
                </div>
              </div>
              <div className="card-new">
                <a href="/" className="all Commercial">
                  <img alt="" src="img/work/work-4.jpg" />
                </a>
                <div className="card-text">
                  <h6>Appartment, On Grid</h6>
                  <p>Brigade Millennium Jacaranda Apartments, Bangalore</p>
                </div>
              </div>
              <div className="card-new">
                <a href="/" className="all Apartments">
                  <img alt="" src="img/work/work-3.jpeg" />
                </a>
                <div className="card-text">
                  <h6>On Grid,Residential</h6>
                  <p> 5.34 kWp On-Grid Solar System, JP Naga.</p>
                </div>
              </div>
              <div className="card-new">
                <a href="/" className="all Industrial Commercial">
                  <img alt="" src="img/work/work-5.jpeg" />
                </a>
                <div className="card-text">
                  <h6>Appartment, On Grid</h6>
                  <p>Brigade Millennium Jacaranda Apartments, Bangalore</p>
                </div>
              </div>
              <div className="card-new">
                <a href="/" className="all Apartments">
                  <img alt="" src="img/work/work-6.jpg" />
                </a>
                <div className="card-text">
                  <h6>Commercial, On Grid</h6>
                  <p>
                    Geetham Shares and Securities- 34.78KWP Solar On Grid System
                    at Yelahanka
                  </p>
                </div>
              </div> */}
            </div>
          ) : null}
          {disp === "apartments" ? (
            <div className="gallery sets">
              {projectDetails
                ?.filter(
                  (project) => project.areaTypeDetails[0].types === "Apartments"
                )
                .map((project, index) => (
                  <div key={index} className="card-new">
                    <a href="" className="all Residential">
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </a>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
              {/* <div className="card-new">
                <a href="/" className="all Apartments">
                  <img alt="" src="img/work/work-3.jpeg" />
                </a>
                <div className="card-text">
                  <h6>On Grid,Residential</h6>
                  <p> 5.34 kWp On-Grid Solar System, JP Naga.</p>
                </div>
              </div>

              <div className="card-new">
                <a href="/" className="all Apartments">
                  <img alt="" src="img/work/work-6.jpg" />
                </a>
                <div className="card-text">
                  <h6>Commercial, On Grid</h6>
                  <p>
                    Geetham Shares and Securities- 34.78KWP Solar On Grid System
                    at Yelahanka
                  </p>
                </div>
              </div> */}
            </div>
          ) : null}
          {disp === "commercial" ? (
            <div className="gallery sets">
              {projectDetails
                ?.filter(
                  (project) => project.areaTypeDetails[0].types === "Commercial"
                )
                .map((project, index) => (
                  <div key={index} className="card-new">
                    <a href="/" className="all Residential">
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </a>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
              {/* <div className="card-new">
                <a href="/" className="all Industrial Commercial">
                  <img alt="" src="img/work/work-2.jpeg" />
                </a>
                <div className="card-text">
                  <h6>Commercial, On Grid</h6>
                  <p>
                    Geetham Shares and Securities- 34.78KWP Solar On Grid System
                    at Yelahanka
                  </p>
                </div>
              </div>
              <div className="card-new">
                <a href="/" className="all Commercial">
                  <img alt="" src="img/work/work-4.jpg" />
                </a>
                <div className="card-text">
                  <h6>Appartment, On Grid</h6>
                  <p>Brigade Millennium Jacaranda Apartments, Bangalore</p>
                </div>
              </div>

              <div className="card-new">
                <a href="/" className="all Industrial Commercial">
                  <img alt="" src="img/work/work-5.jpeg" />
                </a>
                <div className="card-text">
                  <h6>Appartment, On Grid</h6>
                  <p>Brigade Millennium Jacaranda Apartments, Bangalore</p>
                </div>
              </div> */}
            </div>
          ) : null}
          {disp === "industrial" ? (
            <div className="gallery sets">
              {projectDetails
                ?.filter(
                  (project) => project.areaTypeDetails[0].types === "Industrial"
                )
                .map((project, index) => (
                  <div key={index} className="card-new">
                    <a href="/" className="all Residential">
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </a>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
              {/* <div className="card-new">
                <a href="/" className="all Industrial Commercial">
                  <img alt="" src="img/work/work-5.jpeg" />
                </a>
                <div className="card-text">
                  <h6>Appartment, On Grid</h6>
                  <p>Brigade Millennium Jacaranda Apartments, Bangalore</p>
                </div>
              </div>
              <div className="card-new">
                <a href="/" className="all Apartments">
                  <img alt="" src="img/work/work-6.jpg" />
                </a>
                <div className="card-text">
                  <h6>Commercial, On Grid</h6>
                  <p>
                    Geetham Shares and Securities- 34.78KWP Solar On Grid System
                    at Yelahanka
                  </p>
                </div>
              </div> */}
            </div>
          ) : null}
          {disp === "residential" ? (
            <div className="gallery sets">
              {projectDetails
                ?.filter(
                  (project) =>
                    project.areaTypeDetails[0].types === "Residential"
                )
                .map((project, index) => (
                  <div key={index} className="card-new">
                    <a href="/" className="all Residential">
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </a>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
              {/* <div className="card-new">
                <a href="/" className="all Residential">
                  <img alt="" src="img/work/work-1.jpeg" />
                </a>
                <div className="card-text">
                  <h6>On Grid Residential</h6>
                  <p> 3.56 kWp On-Grid Solar System, JP Nagar</p>
                </div>
              </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default RecentWork;
