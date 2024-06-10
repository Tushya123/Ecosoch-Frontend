import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function ApartmentCounter() {
  function animateCounter(target, duration, id) {
    let start = 0;
    let increment = 1;
    let interval = Math.floor(duration / target);

    let timer = setInterval(function () {
      start += increment;
      document.getElementById(id).textContent = start;

      if (start >= target) {
        clearInterval(timer);
        document.getElementById(id).textContent = target;
      }
    }, interval);
  }
  animateCounter(2.1, 2000, "count2");
  animateCounter(40, 2000, "count100");
  animateCounter(600, 2000, "count100000");
  return (
    <Fragment>
      <Container fluid style={{ width: "90%" }}>
        <div className="row mt--50 g-5" id="">
          <div className="col-lg-4 col-md-4  col-12 comercialcountercenter">
            <div className="single-counter-up-start-solari">
              <div className="bg-text">2.1+</div>
              <div className="main-content">
                <h2 className="title">
                  <span className="counter" id="count2">
                    2.1
                  </span>
                  MW+
                </h2>
                <p>Installed capacity in Apartments Sector</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4  col-12 comercialcountercenter">
            <div className="single-counter-up-start-solari">
              <div className="bg-text">40</div>
              <div className="main-content">
                <h2 className="title">
                  <span className="counter" id="count100">
                    40
                  </span>
                  +
                </h2>
                <p>Apartments Solarized</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4  col-12 comercialcountercenter">
            <div className="single-counter-up-start-solari">
              <div className="bg-text">600000</div>
              <div className="main-content">
                <h2 className="title">
                  <span className="counter" id="count100000">
                    600{" "}
                  </span>
                  000+
                </h2>
                <p>Savings per Month</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default ApartmentCounter;
