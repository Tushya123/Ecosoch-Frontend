import React from "react";
import { Fragment } from "react";
import OffGridBanner from "../components/OffGrid/OffGridBanner";
import OffGridCont from "../components/OffGrid/OffGridCont";
import OffGridProjects from "../components/OffGrid/OffGridProjects";

function OffGrid() {
  return (
    <Fragment>
      <OffGridBanner />
      <OffGridCont />
      <OffGridProjects />
    </Fragment>
  );
}

export default OffGrid;
