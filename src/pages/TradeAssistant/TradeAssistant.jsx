import React from 'react'
import Section1 from '../../components/Section1/Section1'
import BuyCall from '../../components/BuyCall/BuyCall'
import img from '../../assets/Img4.png'
import TradeeAssistant from '../../components/TradeAssistant/TradeAssistant'
function TradeAssistant() {
  return (
    <div>
      <Section1 text={'Торговый ассистент'} img={img}/>
      <TradeeAssistant/>
      <BuyCall/>
    </div>
  )
}

export default TradeAssistant
