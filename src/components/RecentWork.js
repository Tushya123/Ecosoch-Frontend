import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        console.log("all", allProjects.data);
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
                <h6 className="title">
                  EcoSoch Solar offers unparalleled service, quality, and
                  efficiency.
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
                  <Link
                    to={`/projectdesc/${project._id}`}
                    className="all Residential"
                  >
                    <img
                      alt=""
                      src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                    />
                  </Link>
                  <div className="card-text">
                    <h6>{project.title}</h6>
                    <p> {project.subtitle}</p>
                  </div>
                </div>
              ))}
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
                    <Link
                      to={`/projectdesc/${project._id}`}
                      className="all Residential"
                    >
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </Link>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
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
                    <Link
                      to={`/projectdesc/${project._id}`}
                      className="all Residential"
                    >
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </Link>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
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
                    <Link
                      to={`/projectdesc/${project._id}`}
                      className="all Residential"
                    >
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </Link>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
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
                    <Link
                      to={`/projectdesc/${project._id}`}
                      className="all Residential"
                    >
                      <img
                        alt=""
                        src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${project.imageURL}`}
                      />
                    </Link>
                    <div className="card-text">
                      <h6>{project.title}</h6>
                      <p> {project.subtitle}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default RecentWork;
