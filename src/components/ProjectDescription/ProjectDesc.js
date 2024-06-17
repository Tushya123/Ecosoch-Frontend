import React, { Fragment, useEffect, useState } from "react";
import ProjectDescBanner from "./ProjectDescBanner";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import Slider from "react-slick";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

function ProjectDesc() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    nextArrow: <TfiAngleRight />,
    prevArrow: <TfiAngleLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const { _ID } = useParams();

  const [project, setproject] = useState([]);
  const [related, setrelated] = useState([]);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/projectdetail/${_ID}`
        );
        const allProjects = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/projectdetail`
        );
        setrelated(allProjects.data);
        setproject(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProject();
  }, [_ID]);

  return (
    <Fragment>
      <ProjectDescBanner />
      <Container fluid style={{ width: "85%" }} className="ptb--50">
        <h1 className="title">
          {project.title}, {project.Location}
        </h1>
        <p>{project.subtitle}</p>
        <div className="projectdetails row">
          <div
            className="col-8"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>
          <div className="col-1"></div>
          <div className="col-3">
            <h6>Project Details :</h6>

            {project.ProjectDetailDescription?.map((details) => (
              <div className="ptb--20">
                <h6 className="title">{details.ProductKey} :</h6>
                <p>{details.ProductValue}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="photogllery ptb--50">
          <Slider {...settings}>
            {project.imageURLs?.map((img, index) => (
              <div key={index} className="ptb--5 plr--15">
                <img
                  src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${img}`}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="related-projects ptb--50">
          <div className="title-new">
            <h1 className="title-tag">Explore Related Projects</h1>
          </div>
          <div className="gallery sets">
            {related
              ?.filter((related) => related.types === project.types)
              .map((related, index) => (
                <div key={index} className="card-new ">
                  <Link
                    to={`/projectdesc/${related._id}`}
                    className="all Residential"
                  >
                    <img
                      alt=""
                      src={`${process.env.REACT_APP_API_URL_ECOSOCH}/${related.imageURL}`}
                    />
                  </Link>
                  <div className="card-text">
                    <h6>{related.title}</h6>
                    <p> {related.subtitle}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default ProjectDesc;
