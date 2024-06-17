import React, { Fragment } from "react";
import ReactPlayer from "react-player";

function GeneralWorking() {
  return (
    <Fragment>
      <div className="title-area-center ptb--50">
        <p className="title-tag mb-4">
          General working of Solar On-Grid Solar PV System
        </p>
      </div>
      <div className="general-working-video d-flex justify-content-center ptb--50">
        <ReactPlayer width={"60%"} url="https://youtu.be/b2MJnh0LAyE" />
      </div>
    </Fragment>
  );
}

export default GeneralWorking;
