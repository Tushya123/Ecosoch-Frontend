import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function Operations() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }}>
        <div className="rts-section-gap">
          <div className="container whypartner">
            <div className="row">
              <div className="col-lg-12">
                <div className="solari-title-area-three text-center">
                  <span className="pre-title">
                    EcoSoch provides the following services as part of
                    Operations and Maintenance:
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt--40 g-24">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
                <div className="single-feature-soalri-3 ">
                  <div className="icon">
                    <img
                      src="assets\images\Operations\clean-2 (1).png"
                      alt=""
                    />
                  </div>
                  <h5 className="title">Module Cleaning</h5>
                  <p className="disc">
                    Our team cleans up all the modules and make them dust free,
                    which effectively increases the generation
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 AMC-contract">
                <div className="single-feature-soalri-3">
                  <div className="icon">
                    <img src="assets\images\Operations\AMC.png" alt="" />
                  </div>
                  <h5 className="title">AMC Contract</h5>
                  <p className="disc">
                    Clients can customize the AMC contract according to their
                    requirements like frequency of inspection and cleaning
                    visits, period of AMC, etc. We even help with warranty
                    claims, if necessary.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 upgrade-revamp">
                <div className="single-feature-soalri-3">
                  <div className="icon">
                    <img src="assets\images\Operations\Revamp.png" alt="" />
                  </div>
                  <h5 className="title">Upgrade/Revamp</h5>
                  <p className="disc">
                    After checking the whole system, we can suggest for revamp
                    or upgrade of the whole system based on the requirement
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 safety-check">
                <div className="single-feature-soalri-3">
                  <div className="icon">
                    <img
                      src="assets\images\Operations\safety-check.png"
                      alt=""
                    />
                  </div>
                  <h5 className="title">Safety Check</h5>
                  <p className="disc">
                    Audit of the site is done and suggestions made to improve
                    the safety of the site before the solar system is installed.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 schematic">
                <div className="single-feature-soalri-3">
                  <div className="icon">
                    <img
                      src="assets\images\Operations\schematic_1.png"
                      alt=""
                    />
                  </div>
                  <h5 className="title">Schematic</h5>
                  <p className="disc">
                    For older systems, we can prepare schematic and electrical
                    diagrams that would be presented to the client.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 remote-monitoring">
                <div className="single-feature-soalri-3">
                  <div className="icon">
                    <img
                      src="assets\images\Operations\Remote-Monitoring-2.png"
                      alt=""
                    />
                  </div>
                  <h5 className="title">Remote Monitoring</h5>
                  <p className="disc">
                    Dedicated team available for remote monitoring. Remote
                    monitoring device can be fixed to older systems so that
                    customer can monitor their generation – anywhere, anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Operations;
