import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function OnGridCont1() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }} className="ptb--50">
        <div className="roof-top">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Solar On-Grid rooftop system </p>
          </div>
          <div className="row">
            <div className="col-8 ">
              <p className="disc">
                The On-grid system is connected with a utility grid (like BESCOM
                in Bangalore) and this system would work only if the grid is
                available. In case of a power cut, the system will not work and
                hence the On-grid system is also termed a Grid-tied system. A
                grid is required since the inverter needs to be provided a
                reference voltage and the inverter needs to sync with the grid
                in order to export energy back into the grid.
              </p>
              <p className="disc">
                On-grid systems make sense for locations with no daytime power
                cut or with less than 2 hrs of a daytime power cut. This type of
                system is apt for reducing your electricity bills since it is
                cheaper than a battery-based system and there is no recurring
                cost of replacement of components.
              </p>
            </div>
            <div className="col-4 text-center">
              <img src="assets\images\Systems\ongrid1.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="system">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Solar PV System Generation</p>
          </div>
          <div className="row">
            <div className="col-4">
              <img src="assets\images\Systems\sun-path.png" alt="" />
            </div>
            <div className="col-8">
              <p className="disc">
                In general, solar peak generation is between 9:00 AM to 3:00 PM
                and is typically called the solar window. However, based on the
                type of system installed, surroundings, shadow, and all other
                design specifications, generation can be anywhere between 7:00
                AM till 5:00 PM too.
              </p>
            </div>
          </div>
        </div>
        <div className="working">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Working On-Grid Solar PV System</p>
          </div>
          <p className="disc">
            Once solar generation starts, the generated energy is first consumed
            by the loads. Once the load requirement is satisfied, the remaining
            energy will be exported to the grid. Grid by itself acts as a
            virtual battery taking in all the excess energy that has been
            exported. This is known as the banking of energy.
          </p>
          <div className="row">
            <div className="col-4 text-center">
              <img
                src="assets\images\Systems\working-of-soar-e1518426635625-400x470.png"
                alt=""
                style={{ width: "40%" }}
              />
            </div>
            <div className="col-8">
              <p className="disc">
                During the night, when there is no solar, the loads can import
                the banked energy. Similarly, when there is less generation from
                solar due to cloudy conditions, the required energy is imported
                from the grid. At the end of every billing cycle, the export and
                import billing will be calculated and this net will be
                calculated with the help of a Bi-directional meter.
              </p>
            </div>
          </div>
        </div>
        <div className="working-meter">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Working On-Grid Solar PV System</p>
          </div>
          <div className="row">
            <div className="col-8">
              <p className="disc">
                The difference between the traditional Unidirectional meter and
                the Bi-directional meter is that the unidirectional meter only
                displays the total energy imported from the grid. However, the
                Bi-directional meter records 3 readings – the total amount of
                energy Exported (in kWh), the total amount of energy Imported,
                and the Net energy difference between the export and import.
              </p>
              <p className="disc">
                Know more about the 1-phase bi-directional meter and 3-phase
                bi-directional meter.
              </p>
            </div>
            <div className="col-4 text-center">
              <img
                src="assets\images\Systems\electricity-meter-e1518424466163-277x300.png"
                alt=""
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>
        <div className="types">
          <div className="row pt--50">
            <div className="col-lg-12">
              <div className="solari-title-area-three text-center">
                <span className="pre-title">
                  Types of On-Grid Solar PV Systems
                </span>
              </div>
            </div>
          </div>
          <p className="disc">
            Solar technology in the rooftop sector has improved drastically over
            the past few years and has catered to the growing demands of the
            discerning public. There are many types of rooftops and each one of
            them has varying conditions like different roofs, different
            orientations, shadow issues, etc. Within on-grid solar PV systems,
            there are mainly three different types of systems:
          </p>
          <p className="disc">
            <ul>
              <li>String Inverter</li>
              <li>Micro Inverter</li>
              <li>Power Optimizers</li>
            </ul>
          </p>
        </div>
      </Container>
    </Fragment>
  );
}

export default OnGridCont1;
