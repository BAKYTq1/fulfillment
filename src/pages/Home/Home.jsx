import React from 'react'
import BuyCall from '../../components/BuyCall/BuyCall'
import Services from '../../components/Services/Services'
import Insurance from '../../components/insurance/Insurance'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div>
      <Banner/>
      <BuyCall/>
      <Services/>
      <Insurance/>
    </div>
  )
}

export default Home
