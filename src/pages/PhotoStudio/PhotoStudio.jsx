import React from 'react'
import Section1 from '../../components/Photostudio/Section1'
import Section2 from '../../components/Photostudio/Section2'
import Section3 from '../../components/Photostudio/Section3'
import Section4 from '../../components/Photostudio/Section4'
import Section5 from '../../components/Photostudio/Section5'
import Card from '../../components/card/Card'
import Infografika from '../../components/infografika/Infografika'
import Videoobzor from '../../components/Videoobzor/Videoobzor'

function PhotoStudio() {
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Card/>
      <Section4/>
      <Videoobzor/>
      <Section5/>
      <Infografika/>
    </div>
  )
}

export default PhotoStudio
