import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function EnDServices() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }}>
        <div className="Services ptb--50">
          <h3>Services provided by Engg. & Design team are listed below:</h3>
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Technical Site Visit</span>
            </div>
            <ul>
              <li>
                Team performs detailed survey of rooftops for suitability and
                assess the capacity that can be installed.
              </li>
              <li>Detailed site survey report would be submitted</li>
              <li>
                The report would include the Cable routing, Location of earthing
                pit, Lightning arrestor, Inverters, Meters, BoS components,
                Termination point, etc.
              </li>
            </ul>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img src="assets\images\consultancy\pits.jpg" alt="" />
            </div>
          </div>
          <hr />

          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Layout Preparation</span>
            </div>
            <ul>
              <li>
                Layout is prepared in SketchUp and the 3D drawings would be
                shared with all stakeholders
              </li>
            </ul>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img src="assets\images\consultancy\layout.jpg" alt="" />
            </div>
          </div>
          <hr />

          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Shadow Analysis</span>
            </div>
            <ul>
              <li>
                Shadow analysis is performed using a specialised tool called
                Solar Pathfinder at site.
              </li>
              <li>
                Inputs from Solar Pathfinder are used for assessing the expected
                energy generation at site
              </li>
              <li>
                Shadow analysis is also done in SketchUp and the animated
                analysis is shared with all stakeholders
              </li>
              <li>
                We also use Helioscope for shadow analysis and Irradiance map.
              </li>
            </ul>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img
                src="assets\images\consultancy\pathfinder.jpg"
                alt=""
                width={"60%"}
              />
            </div>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img
                src="assets\images\consultancy\shadow.jpg"
                alt=""
                width={"30%"}
              />
            </div>
            <h6>
              The below video was prepared using SketchUp and shows the shadow
              formation on Dec 21st when the sun is at its lowest position and
              casts the longest shadow:
            </h6>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <video
                src="assets\images\consultancy\Media1.mp4"
                width={"100%"}
                controls
                loop
              />
            </div>
          </div>
          <hr />

          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Wind Load Analysis</span>
            </div>
            <ul>
              <li>
                Wind load analysis is done in STAAD Pro particularly for
                elevated structures
              </li>
              <li>
                The detailed STAAD pro report is used for assessing if the
                structure would be able to handle high wind loads (approx.
                150km/h)
              </li>
            </ul>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img src="assets\images\consultancy\staad-1536x565.png" alt="" />
            </div>
          </div>
          <hr />
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Preparation of AutoCAD Drawings</span>
            </div>
            <ul>
              <li>Module Layout</li>
              <li>String Layout</li>
              <li>Conduit cable routing</li>
              <li>Trench details and routing</li>
              <li>Single Line Diagram</li>
              <li>Equipment Layout</li>
              <li>Earthing Layout</li>
              <li>Earthing strip and Earthing pit details</li>
              <li>Lightning Arrestor Layout</li>
              <li>Communication Layout</li>
              <li>Mounting Structure Details</li>
            </ul>
            <p>and much more…</p>
          </div>
          <hr />
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Preparation of AutoCAD Drawings</span>
            </div>
            <p>The purpose of DPR is to answer the following questions:</p>
            <ul>
              <li>How will the design be done?</li>
              <li>
                What is the criteria for selecting the components and
                technology?
              </li>
              <li>How will the installation be done?</li>
            </ul>
            <p>
              In addition to providing exhaustive details relating to all
              aspects of a project, the DPR also serves as an instrument for
              improving customer awareness.
            </p>
            <h6>
              Highlighted below are the subjects that would be covered in the
              DPR:
            </h6>
            <ul>
              <li>Shading Analysis</li>
              <li>Energy Generation Analysis using SAM</li>
              <li>Sensitivity Analysis (P50 & P90)</li>
              <li>Financial Analysis</li>
            </ul>
          </div>
          <hr />
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">
                Financial Analysis Reports Preparation
              </span>
            </div>
            <p>
              For preparing the Financial Analysis report, the solar rooftop
              project would be considered as a separate entity/company
              generating revenue by means of savings in electricity bills.
              Thereby, the report would include detailed calculations and
              statements as mentioned below:
            </p>
            <ul>
              <li>Profit & Loss statements (P&L)</li>
              <li>Cash Flows</li>
              <li>Balance Sheet (with Assets & Liabilities)</li>
              <li>IRR</li>
              <li>Depreciation</li>
              <li>Debt Service Coverage Ratio (DSCR)</li>
              <li>LCOE</li>
            </ul>
            <p>
              This would enable the decision makers (Developers and Financiers)
              to assess the financial viability of the project.
            </p>
          </div>
          <hr />
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">
                Lightning Protection System Design
              </span>
            </div>
            <p>
              Lightning Protection System (LPS) design as per IEC 62305-3 is an
              important aspect for any rooftop solar plant
            </p>
            <p>Scope would include:</p>
            <ul>
              <li>
                Risk assessment of the project using best-in-class software
              </li>
              <li>Arriving at the protection class</li>
              <li>
                Recommend the appropriate Lightning Arrestor (Conventional or
                Early Streamer Emission – ESE type)
              </li>
              <li>
                Recommend the separation distance to be maintained for the down
                conductor and air terminals
              </li>
            </ul>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img src="assets\images\consultancy\la-1536x431.png" alt="" />
            </div>
          </div>
          <hr />
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">Earthing Design</span>
            </div>

            <p>Earthing design encompasses the following:</p>
            <ul>
              <li>
                No. of DC and AC Earthing pits required for the project based on
                fault current{" "}
              </li>
              <li>
                Earth strip material to be used and its cross-sectional area
              </li>
              <li>
                Earth rod design (length, cross-sectional area, micron level of
                the Cu bonding, etc.)
              </li>
              <li>
                Earth pit design (depth of the pit, distance between pits,
                backfill compound, distance from building, etc.)
              </li>
            </ul>
            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img
                src="assets\images\consultancy\earth-1024x521.png"
                alt=""
                width={"70%"}
              />
            </div>
          </div>
          <hr />
          <div className="ptb--50">
            <div className="solari-title-area-three">
              <span className="pre-title">
                Consultation on Mounting Structure Design (Penetrable &
                Non-penetrable){" "}
              </span>
            </div>
            <p>
              Consultation would be provided on the type of Module Mounting
              Structure to use for different types of roof like Flat, Sloped RCC
              or sheet roof, Elevated structures, etc.
            </p>
            <p>
              Some clients are particular about not penetrating their roofs and
              need non-penetrable solutions. For such clients, customised
              non-penetrating solutions would be designed (as shown below)
            </p>
            <p>
              Consultation could be provided even before the building is erected
              on the type of roof suitable for solar installation.
            </p>

            <div className="img-wrap d-flex justify-content-center ptb--20">
              <img
                src="assets\images\consultancy\Picture1-940x400.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default EnDServices;
