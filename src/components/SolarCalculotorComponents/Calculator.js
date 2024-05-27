import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

function Calculator() {
  return (
    <Fragment>
      <div
        className="rts-contact-wrapper-form-area rts-section-gapBottom"
        id="fgh"
      >
        <div className="container" id="rrr">
          <div className="row text-center center-block">
            <div className="col-md-2" id="san">
              <div className="row">
                <div className="col-md-2 label-color">Place</div>
                <div className="col-md-10">
                  <select
                    className="form-control zmz"
                    id="place"
                    fdprocessedid="hq03wq"
                    control-id="ControlID-9"
                  >
                    <option value="bengaluru">Bengaluru</option>
                    <option value="unavailable">Rest of India</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div
                style={{ display: "none" }}
                id="estimate-unavailable"
                className="label-color"
              >
                Currently we are not estimating in this region. Please fill the
                form below
              </div>
              <div
                className="row"
                id="bengaluru-inputs"
                style={{ display: "block" }}
              >
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-3 label-color" id="gta">
                      Monthly electricity bill
                    </div>
                    <div className="col-md-7">
                      <span style={{ marginTop: "1%" }}>
                        <Form.Range
                          className="form-range range-cust"
                          min={"0"}
                          max={"20000"}
                          defaultValue={"0"}
                          id="billrange"
                        />
                      </span>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group" id="rrr">
                        <div className="input-group-addon" id="xxw">
                          <i className="fa fa-rupee"></i>
                        </div>
                        <output
                          type="number"
                          name="monthly-bill"
                          className="form-control"
                          id="inbill-out"
                        >
                          5482
                        </output>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="rts-btn btn-primary"
                style={{ verticalAlign: "middle" }}
                id="get-savings"
                fdprocessedid="micjna"
                control-id="ControlID-11"
              >
                Calculate Savings
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Calculator;
