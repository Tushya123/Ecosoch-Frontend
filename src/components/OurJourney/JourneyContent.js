import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function JourneyContent() {
  return (
    <Fragment>
      <Container
        fluid
        style={{ width: "85%" }}
        className="text-center ptb--100"
      >
        <p className="disc">
          <img
            src="assets\images\OurJourney\Our-solar-journey-1902x2048.jpg"
            alt=""
          />
        </p>
      </Container>
    </Fragment>
  );
}

export default JourneyContent;
