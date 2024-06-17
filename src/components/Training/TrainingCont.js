import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function TrainingCont() {
  return (
    <Fragment>
      <Container fluid style={{ width: "85%" }}>
        {" "}
        <div className="training">
          <div className="title-area-center ptb--50">
            <p className="title-tag mb-4">Training</p>
          </div>
          <div className="">
            <div className="row">
              <div className="col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets\images\consultancy\petersendean-solar-install.jpg"
                  alt=""
                  width={"80%"}
                />
              </div>
              <div className="col-6">
                <p className="disc">
                  EcoSoch’s training program will enable a strong, diverse, and
                  well-trained solar workforce, which will lower hiring costs
                  for employers. By ensuring the solar workforce has access to
                  up-to-date and credible information they need to do their
                  jobs, consumers will have assurance of solar installation
                  durability and production. Having an efficient, well-trained
                  workforce familiar with solar will improve inspection
                  compliance, reduce liability and insurance costs, and increase
                  consumer confidence. The aim is to establish a conducive but
                  robust training framework to not only train rooftop solar
                  photovoltaic technicians, but also open doors towards
                  successful entrepreneurship.
                </p>
              </div>
            </div>
            <p className="disc ptb--50">
              {" "}
              As part of its workshops, EcoSoch has trained and imparted
              knowledge free of cost to over 1000 participants in Bangalore who
              were very appreciative of our initiative. These workshops have
              also been conducted in villa communities and offices to educate
              citizens of Bangalore about the benefits of adopting solar. The
              next phase would involve engaging with school and engineering
              colleges to expedite the growth of the Solar PV sector. We have
              designed the training program to nurture the required competence
              in students to bridge the skill gap and drive the growth of the
              Solar Industry. A team of experts designs the programs after
              analysing the skill set required and based on student’s
              understanding of the industry. The programs are designed by
              experts and have the right mix of presentation, videos, remote
              demos, design exercises, notes and Q&A sessions to keep the
              sessions interesting to the students.
            </p>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default TrainingCont;
