import React, { Fragment } from 'react'
 import CommercialBanner from '../components/Commercialcomponents/CommercialBanner'
import CommercialCounterSec from '../components/Commercialcomponents/CommercialCounterSec'
import Features from '../components/Commercialcomponents/Features';
 import Technologies from '../components/Commercialcomponents/Technologies';
import CommercialTestimonials from '../components/Commercialcomponents/CommercialTestimonials';
import OurProjects from '../components/Commercialcomponents/OurProjects';
import CommercialContactUs from '../components/Commercialcomponents/CommercialContactUs';


function Commercial() {
  
  return (
    <Fragment>
      <CommercialBanner/>
      <CommercialCounterSec/>
      <Features/>
      <Technologies/>
      <CommercialTestimonials/>
      <OurProjects/>
      <CommercialContactUs/>
    </Fragment>
  )
}

export default Commercial
