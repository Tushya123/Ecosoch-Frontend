import React, { Fragment } from "react";

function Carousel() {
  return (
    <Fragment>
      <div
        id="carouselVideoExample"
        className="carousel slide carousel-fade new"
        data-bs-ride="carousel"
        autoPlay
        loop
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="video-overlay-container">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="assets/images/banner-videos/Residential/residential.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption my-act-view d-block">
                <h3 className="animated fadeIn">Residences</h3>
                <p>Solution for individual houses</p>
                <div className="button-banner">
                  <a href="/" className="btn rts-btn btn-primary">
                    Get a Quote
                  </a>
                  <a
                    href="/"
                    className="btn rts-btn btn-primary m-3 custom-btn"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="video-overlay-container">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="assets/images/banner-videos/Apartments/dji_0317.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption my-act-view d-block">
                <h3 className="animated fadeIn">Apartments</h3>
                <p>Solutions for the common area</p>
                <div className="button-banner">
                  <a href="/" className="btn rts-btn btn-primary">
                    Get a Quote
                  </a>
                  <a
                    href="/"
                    className="btn rts-btn btn-primary m-3 custom-btn"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="video-overlay-container">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="assets/images/banner-videos/Commercial/commercial.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption my-act-view d-block">
                <h3 className="animated fadeIn">Commercial</h3>
                <p>Solution for MSME sector</p>
                <div className="button-banner">
                  <a href="/" className="btn rts-btn btn-primary">
                    Get a Quote
                  </a>
                  <a
                    href="/"
                    className="btn rts-btn btn-primary m-3 custom-btn"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="video-overlay-container">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="assets/images/banner-videos/Industrial/industrial.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption my-act-view d-block">
                <h3 className="animated fadeIn">Industries</h3>
                <p>Solutions for Large factories and industrial complexes</p>
                <div className="button-banner">
                  <a href="/" className="btn rts-btn btn-primary">
                    Get a Quote
                  </a>
                  <a
                    href="/"
                    className="btn rts-btn btn-primary m-3 custom-btn"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Controls --> */}

        {/* <div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselVideoExample"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselVideoExample"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}
      </div>
    </Fragment>
  );
}

export default Carousel;
