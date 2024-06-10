import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

function MediaCoverage() {
  return (
    <Fragment>
      <div className="media-banner">
        <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
          <div className="container ptb--65">
            <div className="row">
              <div className="col-lg-12">
                <div className="con-tent-main">
                  <div className="wrapper">
                    <span className="bg-text-stok">Partner</span>
                    <div className="title ">
                      <a href="/partnerwithus">Media Coverage</a>
                    </div>
                    <div className="slug ">
                      <a href="#index.html">Eco Soch /</a>
                      <a className="active" href="#index.html">
                        Media Coverage{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container fluid style={{ width: "85%" }} className="ptb--100">
        <div className="fusion-text fusion-text-1">
          <p>
            In 2019, EcoSoch commissioned a 105.4 kWp rooftop project for ARK
            Serene County in Whitefield which is touted to be{" "}
            <span className="gmail_default">one of </span>the largest in South
            India for an apartment. You can refer to the below news articles and
            media coverage of the same.
          </p>
          <p>
            <a
              href="https://bangaloremirror.indiatimes.com/bangalore/others/here-comes-the-sun-apartments-complex-goes-off-the-grid/articleshow/68569290.cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bangalore Mirror coverage of 105kWp system for an apartment in
              Whitefield
            </a>
          </p>
          <p>
            <a
              href="https://www.thenewsminute.com/article/bright-side-meet-bengaluru-residents-who-are-turning-solar-power-104420"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Newsminute coverage
            </a>
          </p>
          <p>&nbsp;</p>
        </div>
      </Container>
    </Fragment>
  );
}

export default MediaCoverage;
