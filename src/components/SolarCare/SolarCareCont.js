import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function SolarCareCont() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }}>
        <div className="SCCont ptb--50">
          <div className="title-new">
            <h1 className="title-tag">Solar Care</h1>
          </div>
          <p className="disc">
            SolarCare is EcoSoch’s Operations & Maintenance team that performs a
            host of activities after project commissioning. Even during project
            execution, SolarCare has a major role to play with respect to
            Quality Assurance – like Design review, Inspection of installation
            and Takeover of system after all punch points are cleared.
          </p>
          <p className="disc">
            Once the project is handed over, it is the responsibility of
            SolarCare team to ensure that the system is up & running during the
            workmanship warranty period (typically 2 years) after which the
            customer can opt for AMC. The below services would be offered by
            SolarCare :
          </p>
          <div className="d-flex justify-content-center">
            <img src="assets\images\consultancy\Picture1-2.png" alt="" />
          </div>
          <p>
            Solar PV, being an asset for a minimum of 25 years, has to be
            optimized well for maximum efficiency. A recent study summarizes
            that 4% increase in returns can be achieved with appropriate “O&M”
            model with flexible, reliable, effective & complete packages.
          </p>
          <p>
            <b> “SolarCare” </b> envisages a comprehensive and smart solution
            for asset management and performance enhancement of solar power
            plants. Presently, the Indian solar industry is growing at more than
            50% CAGR and hence there is a pressing need to introduce the latest
            tools and techniques for maintaining the plants covering the entire
            spectrum from Cleaning of panels, Inspection, Diagnosis of
            under-performance using tools like Thermal imaging with drones, EL
            imaging, Revamp, Remote monitoring, etc.
          </p>
        </div>
      </Container>
    </Fragment>
  );
}

export default SolarCareCont;
