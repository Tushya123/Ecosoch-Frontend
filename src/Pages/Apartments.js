import React from "react";
import ApartmentBanner from "../components/Apartments/ApartmentBanner";
import ApartmentCounter from "../components/Apartments/ApartmentCounter";
import ApartmentFeatures from "../components/Apartments/ApartmentFeatures";
import ApartmentsTestimonials from "../components/Apartments/ApartmentsTestimonials";
import ApartmentProjects from "../components/Apartments/ApartmentProjects";
import CommercialContactUs from "../components/Commercialcomponents/CommercialContactUs";

function Apartments() {
  return (
    <>
      <ApartmentBanner />
      <ApartmentCounter />
      <ApartmentFeatures />
      <ApartmentsTestimonials />
      <ApartmentProjects />
      <CommercialContactUs />
    </>
  );
}

export default Apartments;
