import React, { Fragment } from "react";
import HybridBanner from "../components/Hybrid/HybridBanner";
import HybridCont from "../components/Hybrid/HybridCont";
import HybridProjects from "../components/Hybrid/HybridProjects";

function Hybrid() {
  return (
    <Fragment>
      <HybridBanner />
      <HybridCont />
      <HybridProjects />
    </Fragment>
  );
}

export default Hybrid;
