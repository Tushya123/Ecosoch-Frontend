import React, { Fragment } from "react";
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
 
function Home() {
  return (
    <Fragment>
      <Carousel />
      <CounterSec />
      <BoxImage Title={"Residential"} url={"./img/work/Residential.jpg"} />
      <BoxImage Title={"Commercial"} url={"./img/work/commercial.jpg"} />
      <BoxImage Title={"Appartments"} url={"./img/work/apartment-1.jpg"} />
      <BoxImage Title={"Industries"} url={"./img/work/industry.jpg"} />
      <BoxImage Title={"Ev Charging"} url={"./img/work/ev-charging.jpg"} />
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
