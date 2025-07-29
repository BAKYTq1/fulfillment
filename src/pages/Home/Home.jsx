import React from 'react'
import BuyCall from '../../components/BuyCall/BuyCall'
import Services from '../../components/Services/Services'
import Insurance from '../../components/insurance/Insurance'
import Banner from '../../components/Banner/Banner'
import FulfilmentСenter from '../../components/FulfilmentСenter/FulfilmentСenter'
import Section1 from '../../components/Section1/Section1'

function Home() {
  return (
    <div>
      <Banner/>
<FulfilmentСenter/>
      <BuyCall/>
      <Services/>
      <Insurance/>
    </div>
  )
}

export default Home
