import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function Maintanence() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }}>
        <h2 className="title">
          Primarily, SolarCare’s scope includes providing Preventative and
          Breakdown Maintenance service as defined below:
        </h2>

        <div className="rts-call-to-action rts-section-gapBottom custom-new">
          <div className="container">
            <div className="row g-24">
              <div className="col-lg-6">
                <div className="vis-mis">
                  <div className="cta-main-wrapper-one">
                    <div className="til-up">
                      <h4 className="tile-h4">Breakdown Maintenance</h4>
                      <p className="txt-clr">
                        {" "}
                        SolarCare shall carry out all breakdown maintenance
                        after receiving information (written or oral) from the
                        customer or their representatives. SolarCare’s service
                        engineer shall carry out the required repairs of the
                        Solar PV System and inform the customer about the status
                        of site. If required, EcoSoch shall also engage and
                        coordinate with the support team of the component
                        manufacturer to resolve the issue or replace the
                        component. The breakdown maintenance report shall be
                        submitted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vis-mis">
                  <div className="cta-main-wrapper-one cta_primary">
                    <div className="til-up">
                      <h4 className="tile-h4">Preventive Maintenance</h4>
                      <p className="txt-clr">
                        SolarCare’s service engineer shall typically visit the
                        site once a quarter as part of scheduled visits for
                        carrying out preventive maintenance on the Solar PV
                        System. This includes maintenance of all mechanical,
                        electrical and electronic parts / sub-assemblies. The
                        preventive maintenance report shall be furnished.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Maintanence;
