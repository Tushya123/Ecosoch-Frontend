import React, { Fragment } from "react";
import SolarCareBanner from "../components/SolarCare/SolarCareBanner";
import SolarCareCont from "../components/SolarCare/SolarCareCont";
import Operations from "../components/SolarCare/Operations";
import Maintanence from "../components/SolarCare/Maintanence";

function SolarCare() {
  return (
    <Fragment>
      <SolarCareBanner />
      <SolarCareCont />
      <Operations />
      <Maintanence />
    </Fragment>
  );
}

export default SolarCare;
