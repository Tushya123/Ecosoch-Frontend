import React, { Fragment } from "react";

function MonitoringTypes() {
  return (
    <Fragment>
      <div className="row pt--50">
        <div className="col-lg-12">
          <div className="solari-title-area-three text-center">
            <span className="pre-title">Monitoring Types</span>
          </div>
        </div>
      </div>
      <p className="disc">
        Solar Remote monitoring working varies based on the type of system
        installed. Depending on the inverter it could be a panel level
        monitoring or inverter level monitoring or string level monitoring. Each
        of them will give live generation data, system updates, etc. Having
        solar remote monitoring gives an update on whether the system is under
        producing or over producing, alerts to see if any attention is needed to
        the system.
      </p>
      <p className="disc">
        <img src="assets\images\SolarMonitoring\Enphase.jpg" alt="" />
      </p>
      <p className="disc">
        <img src="assets\images\SolarMonitoring\Solar-Edge.jpg" alt="" />
      </p>
      <p className="disc">
        <img src="assets\images\SolarMonitoring\wattmon.jpg" alt="" />
      </p>
    </Fragment>
  );
}

export default MonitoringTypes;
