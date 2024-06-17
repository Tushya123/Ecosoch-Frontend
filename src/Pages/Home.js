import React, { Fragment, useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import CounterSec from "../components/CounterSec";
import BoxImage from "../components/BoxImage";
import AboutCompany from "../components/AboutCompany";
import Customers from "../components/Customers";
import RecentWork from "../components/RecentWork";
import Testimonials from "../components/Testimonials";
import VideoGallery from "../components/VideoGallery";
import ContactUs from "../components/ContactUs";
import StickyIcon from "../components/StickyIcon";
import axios from "axios";

function Home() {
  const [boxImage, setBoxImage] = useState([]);
  useEffect(() => {
    const fetchBoximg = async () => {
      try {
        const boxImg = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/HomeProject`
        );
        setBoxImage(boxImg.data);
        // console.log("A", boxImg.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchBoximg();
  }, []);
  return (
    <Fragment>
      <Carousel />
      <CounterSec />
      {boxImage?.map((box, index) => (
        <BoxImage
          key={index}
          Title={box.Title}
          url={`${process.env.REACT_APP_API_URL_ECOSOCH}/${box.HomeImage}`}
        />
      ))}

      <AboutCompany />
      <Customers />
      <RecentWork />
      <Testimonials />
      <VideoGallery />
      <ContactUs />
      <StickyIcon />
    </Fragment>
  );
}

export default Home;
