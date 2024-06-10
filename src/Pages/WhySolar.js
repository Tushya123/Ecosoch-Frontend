import React, { Fragment } from "react";
import WhySolarBanner from "../components/WhySolar/WhySolarBanner";
import WhySolarText from "../components/WhySolar/WhySolarText";
import WhySolarContent from "../components/WhySolar/WhySolarContent";
import { Container } from "react-bootstrap";

function WhySolar() {
  return (
    <Fragment>
      <WhySolarBanner />
      <Container fluid style={{ width: "85%" }}>
        <WhySolarText />
        <WhySolarContent />
      </Container>
    </Fragment>
  );
}

export default WhySolar;
