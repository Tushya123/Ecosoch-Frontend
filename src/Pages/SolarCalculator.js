import React from 'react'
import { Fragment } from 'react'
import SolarCalculatorBanner from '../components/SolarCalculotorComponents/SolarCalculatorBanner'
import CommercialContactUs from '../components/Commercialcomponents/CommercialContactUs'
import Calculator from '../components/SolarCalculotorComponents/Calculator'

function SolarCalculator() {
  return (
    <Fragment>
      <SolarCalculatorBanner/>
      <Calculator/>
      <CommercialContactUs/>
    </Fragment>
  )
}

export default SolarCalculator
