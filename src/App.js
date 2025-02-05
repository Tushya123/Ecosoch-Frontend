import React, { Fragment } from "react";
import "./assets/css/plugins/swiper.css";
import "./assets/css/plugins/unicons.css";
import "./assets/css/plugins/metismenu.css";
import "./assets/css/vendor/animate.css";
// bootstrap
import "./assets/css/vendor/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// custom css
import "./assets/css/style.css";
import "./assets/css/lightgallery.min.css";
import "./assets/css/Responsive.css";
//components
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Commercial from "./Pages/Commercial";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SolarCalculator from "./Pages/SolarCalculator";
import Blogs from "./Pages/Blogs";
import FAQs from "./Pages/FAQs";
import Latest from "./Pages/Latest";
import AwardsandCertificates from "./Pages/AwardsandCertificates";
import CustomerTestimonials from "./Pages/CustomerTestimonials";
import AboutUs from "./Pages/AboutUs";
import PartnerWithUs from "./Pages/PartnerWithUs";
import GoToTopButton from "./components/GoToTopButton";
import Partners from "./Pages/Partners";
import SubsidyScheme from "./Pages/SubsidyScheme";
import Apartments from "./Pages/Apartments";
import WhySolar from "./Pages/WhySolar";
import HowSolarWorks from "./Pages/HowSolarWorks";
import SolarMonitoring from "./Pages/SolarMonitoring";
import OurJourney from "./Pages/OurJourney";
import CustomerReferral from "./Pages/CustomerReferral";
import MediaCoverage from "./Pages/MediaCoverage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import OnGrid from "./Pages/OnGrid";
import OffGrid from "./Pages/OffGrid";
import Hybrid from "./Pages/Hybrid";
import SolarWaterPump from "./Pages/SolarWaterPump";
import Training from "./Pages/Training";
import Engineering from "./Pages/Engineering";
import SolarCare from "./Pages/SolarCare";
import ProjectDevelopment from "./Pages/ProjectDevelopment";
import LatestDesc from "./components/Latest/LatestDesc";
import LatestEventDesc from "./components/Latest/LatestEventDesc";
import ProjectDesc from "./components/ProjectDescription/ProjectDesc";
import BlogDesc from "./components/Blogs/BlogDesc";

function App() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header-main-h2");
    var scrollTop = window.scrollY;

    if (scrollTop > 50) {
      // Change 50 to the desired scroll position where you want the header to become sticky
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/commercial" Component={Commercial} />
          <Route path="/solarCalculator" Component={SolarCalculator} />
          <Route path="/Blogs" Component={Blogs} />
          <Route path="/faq" Component={FAQs} />
          <Route path="/LatestNewsAndEvents" Component={Latest} />
          <Route
            path="/awadrsandcertificate"
            Component={AwardsandCertificates}
          />
          <Route path="/testimonial" Component={CustomerTestimonials} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/partnerwithus" Component={PartnerWithUs} />
          <Route path="/partners" Component={Partners} />
          <Route path="/subsidy" Component={SubsidyScheme} />
          <Route path="/apartments" Component={Apartments} />
          <Route path="/whysolar" Component={WhySolar} />
          <Route path="/howsolarworks" Component={HowSolarWorks} />
          <Route path="/solarmonitoring" Component={SolarMonitoring} />
          <Route path="/ourjourney" Component={OurJourney} />
          <Route path="/referral" Component={CustomerReferral} />
          <Route path="/media" Component={MediaCoverage} />
          <Route path="/privacy" Component={PrivacyPolicy} />
          <Route path="/ongrid" Component={OnGrid} />
          <Route path="/offgrid" Component={OffGrid} />
          <Route path="/hybrid" Component={Hybrid} />
          <Route path="/pump" Component={SolarWaterPump} />
          <Route path="/training" Component={Training} />
          <Route path="/engineering" Component={Engineering} />
          <Route path="/solarcare" Component={SolarCare} />
          <Route path="/projectdevelopment" Component={ProjectDevelopment} />
          <Route path="/newnews/:_ID" Component={LatestDesc} />
          <Route path="/newevent/:_ID" Component={LatestEventDesc} />
          <Route path="/projectdesc/:_ID" Component={ProjectDesc} />
          <Route path="/blogdesc/:_ID" Component={BlogDesc} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <GoTopButton /> */}
      <GoToTopButton />
    </Fragment>
  );
}

export default App;
