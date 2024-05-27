import React, { Fragment } from "react";
import PartnerBanner from "../components/PartnerWithUs/PartnerBanner";
import Associate from "../components/PartnerWithUs/Associate";
import WhyPartner from "../components/PartnerWithUs/WhyPartner";
import HowItWorks from "../components/PartnerWithUs/HowItWorks";
import JoinUs from "../components/PartnerWithUs/JoinUs";

function PartnerWithUs() {
  return (
    <Fragment>
      <PartnerBanner />
      <Associate />
      <WhyPartner />
      <HowItWorks />
      <JoinUs />
    </Fragment>
  );
}

export default PartnerWithUs;
