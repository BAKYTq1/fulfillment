import React from 'react'
import './Insurance.scss'
import img from '../../assets/insurance.png'
import H1 from '../../ui/h1'
function Insurance() {
  return (
    <div className='container'>
       <H1 h1={'Страхование'}/>
       <div className='insurance'>
        <div>
        <p>Заключён договор страхования товарных остатков
со страховой компанией СК «Пари»</p>
     <span>на 120 000 000 рублей</span>
        </div>
            <img src={img} alt="" />
       </div>
    </div>
  )
}

export default Insurance
