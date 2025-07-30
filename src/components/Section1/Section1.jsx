import React from 'react'
import './Section1.scss'
import H1 from '../../ui/h1'
function Section1({img, text}) {
  return (
    <div className='section1' style={{backgroundImage:`url(${img})`}}>
      <div className='container section1-item'>
      <H1 h1={`${text}`} color={'white'} size={50} />
      </div>
    </div>
  )
}

export default Section1
