import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function PumpCont() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }}>
        <div className="pumpcont ptb--50">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Solar Water Pump</p>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <p className="disc">
                Are you looking at installing one? Do you want to know the cost
                and other details?
              </p>
              <h4>Click on the button below</h4>
              <h4>Fill in the form and get to know all the details.</h4>
              <button className="rts-btn btn-primary">
                SOLAR WATER PUMP QUESTIONNAIRE
              </button>
            </div>
            <div className="col-6">
              <img
                src="assets\images\Systems\Solar-water-pump-800x466.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pumpcont ptb--50">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Hybrid Solar PV System</p>
          </div>
          <div className="">
            <p className="disc">
              Solar water pumps are like conventional water pumps except that
              they are run on Solar energy. It can be a completely independent
              system without any other source or can be backed by another source
              like a grid.
            </p>

            <p className="disc">
              Solar Water Pumps are systems that pump water from a water source
              depending on the intensity of sunlight falling on the solar
              panels. In this system, the light falling on the solar panels gets
              converted to electricity and in turn, this electricity runs a
              motor to pump water from a water body. With the increase in the
              intensity of the sunlight during daytime, the amount of
              electricity produced also increases. This in-turn increases the
              output of the water pump.
            </p>
            <p className="disc">
              The major differentiating factor about the solar water pumps from
              the other solar PV systems is that this does not necessarily
              require another source of power(grid connection or battery
              back-up) for its operation.
            </p>
            <div className="row">
              <div className="col-6 text-center">
                <img src="assets\images\Systems\Water-Pump-pic.png" alt="" />
                <img src="assets\images\Systems\List-of-Parts.png" alt="" />
              </div>
              <div className="col-6">
                <p className="disc">
                  Broadly categorizing, solar water pumps can be of two type:
                </p>
                <ol>
                  <li>DC pumps</li>
                  <li>AC pumps</li>
                </ol>
                <p className="disc">
                  This classification is based on the type of pump that is used.
                  In case of AC pumps, a variable frequency drive(VFD) needs to
                  be used for converting the DC from the solar to AC for the
                  pump’s requirement. The advantage of Solar water pumps is that
                  they can work independent of the grid supply and these are
                  complementary to the water requirement. On cloudy and rainy
                  days, when the water is pumped from the bore well reduces(due
                  to lesser intense sunlight), the requirement of water is also
                  generally lesser.
                </p>
                <p className="disc">
                  Apart from the major use of solar water pumps in irrigation
                  purposes, these systems are also used for sanitation and
                  drinking water purposes.
                </p>
                <p className="disc">
                  The biggest advantage of the solar water pumps is that they
                  can provide a reliable supply of water independent of any
                  power source, which is one of the basic need for everyone on
                  this planet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pumpcont ptb--50">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Advantages of Solar Water Pump</p>
          </div>
          <div>
            <ul>
              <li>
                No external source of energy like running grid or fuel is
                needed.
              </li>
              <li>Recurring cost on fuel and electricity is excluded.</li>
              <li>
                Issues like Low voltage/Single Phase/Motor burning are taken
                care.
              </li>
              <li>
                Can be installed in remote areas where there is no access for
                electricity or fuel like petrol or diesel.
              </li>
              <li>
                Low maintenance due to less moving parts, unlike diesel pumps.
              </li>
              <li>No lubrication needed.</li>
            </ul>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default PumpCont;
