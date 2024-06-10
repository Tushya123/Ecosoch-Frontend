import React, { Fragment } from "react";
import ReferralBanner from "../components/CustomerReferral/ReferralBanner";
import ReferralCont from "../components/CustomerReferral/ReferralCont";
import { Container } from "react-bootstrap";

function CustomerReferral() {
  return (
    <Fragment>
      <ReferralBanner />
      <Container fluid className="ptb--100" style={{ width: "85%" }}>
        <ReferralCont />
      </Container>
    </Fragment>
  );
}

export default CustomerReferral;
