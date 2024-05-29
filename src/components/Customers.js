import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

function Customers() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <Fragment>
      <section className="showcase-7 mb-5">
        <div className="container">
          <div className="title-new">
            <h1 className="title-tag">Customers</h1>
          </div>
          <div class="title-area-center">
            <h6 class="title" style={{ opacity: "1" }}>
              <div
                class="word-line"
                style={{ display: "block", textAlign: "center", width: "100%" }}
              >
                <div
                  class="word"
                  style={{
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Our
                </div>
                <div
                  class="word"
                  style={{
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Valued
                </div>
                <div
                  class="word"
                  style={{
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Customers
                </div>
              </div>
            </h6>
          </div>
          {isMobile ? (
            <div
              id="slider"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner h-100 justify-content-center align-items-center"
                id="slider-inner"
              >
                <div
                  className="carousel-item active"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/1.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/2.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/3.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/4.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/5.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/6.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/7.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/8.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/9.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/10.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/11.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/12.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/13.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/14.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/15.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/16.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/17.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/18.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/19.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/20.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/21.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#slider"
                data-bs-slide="prev"
                id="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#slider"
                data-bs-slide="next"
                id="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <div
              id="slider"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner h-100 justify-content-center align-items-center"
                id="slider-inner"
              >
                <div
                  className="carousel-item active"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/1.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/2.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/3.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/4.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/5.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/6.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/7.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/8.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/9.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/10.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/11.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/12.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/13.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/14.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/15.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/16.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/17.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/18.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                  id="silder-item"
                >
                  <div
                    className="row justify-content-around align-items-center text-center"
                    id="slider-row"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/19.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/20.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="assets/images/clients/21.jpg"
                        className="d-inline-block img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#slider"
                data-bs-slide="prev"
                id="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#slider"
                data-bs-slide="next"
                id="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
}

export default Customers;
