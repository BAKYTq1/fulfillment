import React from 'react'
import H1 from '../../ui/h1'
import img1 from '../../assets/Img - Приёмка товаров.png'
import img2 from '../../assets/Img - Обработка товаров.png'
import img3 from '../../assets/Img - Инвентаризация и хранение товаров.png'
import './Services.scss'
function Services() {
    const services = [
         {
           img: img1,
           name: 'Приёмка товаров'
         },
         {
           img: img2,
           name: 'Обработка товаров'
         },
         {
           img: img3,
           name: 'Инвентаризация и хранение товаров'
         },
         {
           img: img1,
           name: 'Фотосъёмка и видеообзор'
         },
         {
           img: img2,
           name: 'Создание инфографики'
         },
         {
           img: img3,
           name: 'Торговый ассистент'
         },
    ]
  return (
    <div className='container'>
     <H1 h1={'Услуги'}/>
     <div className='services'>
    {
        services.slice(0,3).map((item, index) => (
            <div key={index} className='item-services'>
  <div className='img-wrapper'>
    <img src={item.img} alt="" />
    <div className='overlay' />
  </div>
  <div className='text-servis'>
    <p>{item.name}</p>
    <button>Подробнее</button>
  </div>
</div>
        ))
    }
     </div>
     <h1 className='item-servistext'>Дополнительные услуги</h1>
     <div className='services'>
    {
        services.slice(3,6).map((item, index) => (
            <div key={index} className='item-services'>
  <div className='img-wrapper'>
    <img src={item.img} alt="" />
    <div className='overlay' />
  </div>
  <div className='text-servis'>
    <p>{item.name}</p>
    <button>Подробнее</button>
  </div>
</div>
        ))
    }
     </div>
    </div>
  )
}

export default Services
