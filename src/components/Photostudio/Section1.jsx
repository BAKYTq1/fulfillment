import React from 'react'
import H1 from '../../ui/h1'
import img from '../../assets/photo-section.png'
import './style.scss'
function Section1() {
  return (
    <div className='section-photo1'>
      <div className="section-item1 container">
        <div>
        <H1 h1={'Фотостудия для маркетплейсов'} color={'white'} size={48}/>
        <p>Раскрываем все преимущества ваших
товаров для максимальных продаж
на маркетплейсах</p>
<button>Заказать</button>

        </div>
        <div className='footer-section1'>
            <nav>
                <ul>
                    <li>Фотосъёмка</li>
                    <li>Видеообзор</li>
                    <li>Инфографика</li>
                </ul>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Section1
