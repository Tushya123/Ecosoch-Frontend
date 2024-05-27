import React, { Fragment } from "react";

function CounterSec() {
  // Function to animate the counter
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

  // Start the animation
  animateCounter(20, 2000, "count20"); // Target: 20, Duration: 2000ms
  animateCounter(20, 2000, "count20m");
  animateCounter(600, 2000, "count600");

  return (
    <Fragment>
      <div className="counter-sec">
        <div className="container-fluid">
          <div className="row g-5 bg-filter ">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-start-solari">
                <div className="main-content">
                  <h2 className="title">
                    <span className="counter animated" id="count20">
                      20
                    </span>
                    +{" "}
                  </h2>
                  <p>Kilo Tons CO2 EMISSIONS REDUCED PER YEAR</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-start-solari count">
                <div className="main-content">
                  <h2 className="title">
                    <span className="counter animated" id="count20m">
                      20
                    </span>
                    MW
                  </h2>
                  <p>INSTALLED CAPACITY</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="single-counter-up-start-solari">
                <div className="main-content">
                  <h2 className="title">
                    <span className="counter animated" id="count600">
                      600
                    </span>
                    +
                  </h2>
                  <p>TOTAL INSTALLED SOLAR ROOFTOPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CounterSec;
