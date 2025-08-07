import React from 'react'
import H1 from '../../ui/h1'
function Section3() {
  return (
    <div className='fotocemka'>
      <div className='head-fotocemka container'>
    <div className="item-fotocemka">
        <H1 h1={'Фотосъёмка'} color={'white'} size={40}/>
        <p>Независимо от того, что вы продаете — одежду, аксессуары,
электронику или другие товары, мы готовы помочь вам представить
их в наилучшем свете. Мы учитываем вашу уникальность и стиль, чтобы
создать фотографии, которые отражают вашу брендовую идентичность.</p>
        <div className='linear'></div>
        <div className='foot-foto'>
            <h5>Услуги:</h5>
            <ul>
                <li>Съёмка по ТЗ</li>
                <li>Предметная съёмка на белом фоне</li>
                <li>Съёмка в интерьере</li>
                <li>Ретушь</li>
                <li>Обтравка</li>
                <li>Адаптация под требования маркетплейса</li>
                </ul>
    </div>
      </div>
      <div className="footer-section3">
         <h1>Стоимость фотосъёмки:</h1>
         <div>
            <h5>До 50 ракурсов</h5> <h4>250 р. / за 1 ракурс</h4>
         </div>
         <div>
            <h5>51-100 ракурсов</h5> <h4>200 р. / за 1 ракурс</h4>
         </div>
         <div>
            <h5>От 101 ракурса</h5> <h4>150 р. / за 1 ракурс</h4>
         </div>
      </div>
    </div>
    {/* <button></button> */}
    </div>
  )
}

export default Section3
