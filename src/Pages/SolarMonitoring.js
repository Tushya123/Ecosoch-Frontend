import React from "react";
import { Fragment } from "react";
import MonitoringBanner from "../components/SolarMonitoring/MonitoringBanner";
import AboutMonitoring from "../components/SolarMonitoring/AboutMonitoring";
import { Container } from "react-bootstrap";
import MonitoringTypes from "../components/SolarMonitoring/MonitoringTypes";

function SolarMonitoring() {
  return (
    <Fragment>
      <MonitoringBanner />
      <Container fluid className="ptb--100" style={{ width: "85%" }}>
        <AboutMonitoring />
        <MonitoringTypes />
      </Container>
    </Fragment>
  );
}

export default SolarMonitoring;
