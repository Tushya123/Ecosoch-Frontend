import React, { Fragment } from "react";
import ProjectDescBanner from "./ProjectDescBanner";
import { Container } from "react-bootstrap";

function ProjectDesc() {
  return (
    <Fragment>
      <ProjectDescBanner />
      <Container fluid style={{ width: "85%" }} className="ptb--50">
        <h6>Project title</h6>
        <div className="photogllery">Images</div>
        <div className="projectdetails row">
          <div className="col-8">Description Here</div>
          <div className="col-4">Project details here</div>
        </div>
        <div className="related-projects">Related Projects Here</div>
      </Container>
    </Fragment>
  );
}

export default ProjectDesc;
