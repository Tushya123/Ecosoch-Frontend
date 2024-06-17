import React from "react";
import { Fragment } from "react";
import PrivacyBanner from "../components/PrivacyPolicy/PrivacyBanner";
import PrivacyCont from "../components/PrivacyPolicy/PrivacyCont";

function PrivacyPolicy() {
  return (
    <Fragment>
      <PrivacyBanner />
      <PrivacyCont />
    </Fragment>
  );
}

export default PrivacyPolicy;
