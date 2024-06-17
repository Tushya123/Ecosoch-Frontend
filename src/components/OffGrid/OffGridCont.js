import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function OffGridCont() {
  return (
    <Container fluid style={{ width: "85%" }}>
      <div className="offgridcont">
        <div className="title-area-center ptb--50">
          <p className="title-tag mb-4">Off-Grid PV System</p>
        </div>
        <div className="">
          <p className="disc">
            In places where the grid availability is zero or where there are
            high instances of a power cut, Off-grid systems are an apt solution
            for relief from power cuts and they can be installed with a
            standalone inverter with a separate or integrated charge controller.
          </p>
          <div className="text-center">
            <img
              src="assets\images\Systems\Off-grid-system-800x297.png"
              alt=""
            />
          </div>
          <p className="disc ptb--50">
            If the off-grid system is designed with appropriate solar panels and
            batteries, it can supply power throughout the year without ever
            relying on grid power. If the system is under-designed then the
            battery is always in very low status. We use inverters from reputed
            brands like Studer, Flin Energy, and Victron Energy and use charge
            controllers from reputed manufacturers like Phocos, Morning Star,
            etc. for our off-grid installations.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center ptb--50">
        <ReactPlayer
          width={"60%"}
          // height={"450px"}
          url={"https://youtu.be/pZi4Bh6kYQM"}
        />
      </div>
    </Container>
  );
}

export default OffGridCont;
