import React from "react";
import OnGridBanner from "../components/OnGrid/OnGridBanner";
import OnGridCont1 from "../components/OnGrid/OnGridCont1";
import Technologies from "../components/Commercialcomponents/Technologies";
import GeneralWorking from "../components/OnGrid/GeneralWorking";
import OnGridProjects from "../components/OnGrid/OnGridProjects";

function OnGrid() {
  return (
    <>
      <OnGridBanner />
      <OnGridCont1 />
      <Technologies />
      <GeneralWorking />
      <OnGridProjects />
    </>
  );
}

export default OnGrid;
