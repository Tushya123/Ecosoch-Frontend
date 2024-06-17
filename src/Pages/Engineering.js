import React, { Fragment } from "react";
import EnDBanner from "../components/Engineering/EnDBanner";
import EnDContent from "../components/Engineering/EnDContent";
import EnDServices from "../components/Engineering/EnDServices";

function Engineering() {
  return (
    <Fragment>
      <EnDBanner />
      <EnDContent />
      <EnDServices />
    </Fragment>
  );
}

export default Engineering;
