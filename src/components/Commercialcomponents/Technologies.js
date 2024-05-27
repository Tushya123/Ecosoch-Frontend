import React, { Fragment } from "react";

function Technologies() {
  return (
    <Fragment>
      <section className="techn-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt_md--30 mt_sm--40 aglis">
              <div className="about-right-content-area-solar-energy">
                <div className="title-area-center">
                  <p className="title-tag mb-4">
                    <span>Technologies for </span> Commercial and Industrial
                    sector
                  </p>
                </div>
                <ul
                  className="nav custom-nav-soalr-about nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Using String Inverter
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Using Micro Inverter
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Using Power Optimizers
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        In this system, a string inverter is connected to a set
                        of panels that are in series. These inverters collect
                        the accumulated DC power and convert the DC power into
                        grid supportive AC power. Even though these inverters
                        don’t have a number of components for failure,
                        generation depends on the least generating module in the
                        series. Due to shadow issues or low performing module,
                        the generation of the entire array gets affected. This
                        system best suits on the roofs where there are no
                        shading issues due to trees, adjacent buildings etc.
                      </p>
                      <div className="row txt-alg">
                        <div className="col-lg-12 technologies-img-wrapper">
                          <div className="left-area-wrapper">
                            <img
                              src="assets/images/new-home/1.png"
                              alt="about"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        An alternative solution for string inverters is Micro
                        inverters. In these systems, each module is connected to
                        an inverter which is mounted just below the panel. Since
                        each panel has one inverter, each panel will generate
                        power independent of the other. This kind of system best
                        suits in a place where there are shadow issues on one or
                        more modules, roof with different directions etc. In
                        this kind of system, module level monitoring is possible
                        and it helps in easy maintenance of the system. One
                        module or one inverter failure wouldn’t affect the
                        generation of rest of the system.
                      </p>
                      <div className="row txt-alg">
                        <div className="col-lg-12 technologies-img-wrapper">
                          <div className="left-area-wrapper">
                            <img
                              src="assets/images/new-home/2.png"
                              alt="about"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        <b>Power optimizers,</b> though they offer the same
                        solution as what is offered by micro inverters, are a
                        little different in technology aspect. In these systems,
                        each module is connected with one power optimizers or a
                        pair of panels are connected to one optimizer. These
                        optimizers start tracking MPP at lower voltages and help
                        in generation of power even in low light and intense
                        shadow conditions as well. Each of these optimizers
                        sends the DC output to the string inverter at the end,
                        after optimizing the output of each module individually.
                        With these optimizers, more electronic parts are not
                        allowed on the rooftop. Optimizers can be configured in
                        such a way that one optimizer can be connected to one
                        module or two modules decreasing the cost of the over
                        all system.
                      </p>
                      <div className="row txt-alg">
                        <div className="col-lg-12 technologies-img-wrapper">
                          <div className="left-area-wrapper">
                            <img
                              src="assets/images/new-home/3.png"
                              alt="about"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br />
    </Fragment>
  );
}

export default Technologies;
