import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function HybridProjects() {
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
      <div className="title-area-center ptb--50">
        <p className="title-tag mb-4">Related Projects</p>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="gallery sets">
            {ourProjects?.map((project, index) => (
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
    </Fragment>
  );
}

export default HybridProjects;
