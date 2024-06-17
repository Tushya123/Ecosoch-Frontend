import React, { Fragment } from "react";
import PumpBanner from "../components/SolarWaterPump/PumpBanner";
import PumpCont from "../components/SolarWaterPump/PumpCont";

function SolarWaterPump() {
  return (
    <Fragment>
      <PumpBanner />
      <PumpCont />
    </Fragment>
  );
}

export default SolarWaterPump;
