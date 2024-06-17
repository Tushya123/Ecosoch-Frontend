import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function HybridCont() {
  return (
    <Container fluid style={{ width: "85%" }}>
      <div className="hybridcont">
        <div className="title-area-center ptb--50">
          <p className="title-tag mb-4">Hybrid Solar PV System</p>
        </div>
        <div className="">
          <p className="disc">
            Hybrid inverters charge the batteries using solar power during
            daylight. If the battery goes low, or during insufficient sunlight,
            they charge the batteries from the Grid. These systems automatically
            switch between the solar power and the Grid.
          </p>
          <div className="text-center">
            <img
              src="assets\images\Systems\Hybrid-Solar-2048x1449.jpg"
              alt=""
            />
          </div>
          <p className="disc ptb--50">
            This is great way of replacing polluting diesel generators. Your
            electricity bill will be reduced and your diesel bill will be
            eliminated.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center ptb--50">
        <ReactPlayer
          width={"60%"}
          // height={"450px"}
          url={"https://youtu.be/9vM2JwrIWOU"}
        />
      </div>
    </Container>
  );
}

export default HybridCont;
