import React from 'react'
import BuyCall from '../../components/BuyCall/BuyCall'
import Services from '../../components/Services/Services'
import Insurance from '../../components/insurance/Insurance'
import Banner from '../../components/Banner/Banner'
// import FulfilmentСenter from '../../components/FulfilmentСenter/FulfilmentСenter'
// import React from "react";
// import BuyCall from "../../components/BuyCall/BuyCall";
// import Services from "../../components/Services/Services";
// import Insurance from "../../components/insurance/Insurance";
import FulfilmentСenter from '../../components/FulfilmentСenter/FulfilmentСenter'
import Section1 from '../../components/Section1/Section1'
import React from "react";
import BuyCall from "../../components/BuyCall/BuyCall";
import Services from "../../components/Services/Services";
import Insurance from "../../components/insurance/Insurance";
import FulfilmentСenter from "../../components/FulfilmentСenter/FulfilmentСenter";
import Equipment from '../../components/Equipment/Equipment.jsx'
import WorkScheme from "../../components/WorkScheme/WorkScheme";
import { PersonalAccount } from "../../components/PersonalAccount/PersonalAccount.jsx";

function Home() {
  return (
  
    
    <div>
      <Banner/>
<FulfilmentСenter/>
      <BuyCall/>
      <Services/>
      <Insurance/>
      <FulfilmentСenter />
      <BuyCall />
      <Services />
      <Equipment />
      <PersonalAccount/>
      <WorkScheme />
      <Insurance />
    </div>
  );
}

export default Home;
