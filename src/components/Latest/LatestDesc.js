import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function LatestDesc() {
  const { _ID } = useParams();
  console.log("id", _ID);
  const [latest, setlatest] = useState([]);
  useEffect(() => {
    const fetchlatest = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/LatestNews/${_ID}`
        );
        setlatest(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchlatest();
  }, []);

  return (
    <Fragment>
      <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <h1 className="color-white">
                    <span>Latest</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container fluid style={{ width: "85%" }} className="ptb--50">
        <h6>{latest.Title}</h6>
        <div className="row">
          <div
            className="col-8"
            dangerouslySetInnerHTML={{ __html: latest.Description }}
          ></div>
          <div className="col-4">
            <img
              src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${latest.NewsImage}`}
              alt=""
            />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default LatestDesc;
