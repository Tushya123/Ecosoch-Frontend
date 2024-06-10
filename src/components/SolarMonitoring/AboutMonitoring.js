import React, { Fragment } from "react";

function AboutMonitoring() {
  return (
    <Fragment>
      <div className="title-new">
        <h1 className="title-tag">Solar Monitoring</h1>
      </div>
      <p className="disc">
        Solar Rooftop system is designed and installed to be there on the
        rooftop working for 25 years. System working long will be needing some
        attention. But, it is difficult to check the system generation every
        single day manually. Sometimes it is not even possible to check and tell
        whether the system is working fine if any panel went wrong due to any
        internal issues.
      </p>
      <div className="title-new pt--50">
        <h1 className="title-tag">Working of a Solar Monitoring</h1>
      </div>
      <p className="disc">
        Monitoring of the Solar Rooftop system allows tracking the generation of
        the system time to time. This records the system generation data in
        repeated intervals and stores in the data base. Monitoring data can be
        checked for the life time generation and customized intervals like
        yearly, monthly, weekly, hourly etc. System status can be viewed from
        anywhere using an app or login into the monitoring website. This regular
        monitoring ensures a close eye watch on the system ensuring its proper
        working
      </p>
    </Fragment>
  );
}

export default AboutMonitoring;
