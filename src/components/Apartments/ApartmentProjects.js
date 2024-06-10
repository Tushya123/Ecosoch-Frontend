import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function ApartmentProjects() {
  const [ourProjects, setOurProjects] = useState([]);
  useEffect(() => {
    const fetchOurProjects = async () => {
      try {
        const allProjects = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/projectdetail`
        );
        setOurProjects(allProjects.data);
        console.log("all", allProjects.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchOurProjects();
    // console.log("Projects", projectDetails);
  }, []);
  return (
    <Fragment>
      <div className="rts-Product-area rts-section-gap">
        <div className="container">
          <div className="row mb--70">
            <div className="col-12 text-center">
              <p className="title-tag text-center">
                <span>Our</span> Projects
              </p>
            </div>
            <br />
            <br />
            <div className="col-lg-12">
              {/* <!-- project title btn main wrapper --> */}
              <div className="project-soalr-wrapper">
                <div className="title-area">
                  <div className="title-area-left">
                    <h2 className="xxx title">Apartments Solar Projects</h2>
                  </div>
                </div>
                <a href="#" className="rts-btn btn-primary">
                  View All Projects
                </a>
              </div>
              {/* <!-- project title btn main wrapper end --> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="gallery sets">
              {ourProjects
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ApartmentProjects;
