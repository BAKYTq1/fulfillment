import React, { useState } from 'react'
import BuyCall from '../../components/BuyCall/BuyCall'
import Section1 from '../../components/Section1/Section1'
import ProcessingCard from '../../components/GoodsProcessing/ProcessingCart'
import YoutubeCard from '../../components/YoutubeCard/YoutubeCard'
import img from '../../assets/Img3.png'
function InventoryGoods() {
    const [video, setvideo] = useState('https://www.youtube.com/embed/cXDOHqa_QgY')
   const inventory = [
    {
        title: 'Инвентаризация товаров',
        description: 'Актуальная информация о количестве товаров отображается в Личном кабинете клиента, но при необходимости наши специалисты проведут ручной пересчёт и уточнение данных о хранящихся на складе товарных запасах.'
    },
    {
        title: 'Хранение товаров',
        description: 'Товары, которые отгружаются по модели FBS хранятся на современно оборудованной складской площади. Стоимость хранения ежедневно пересчитывается с учётом актуального объёма товаров, находящегося на хранении.'
    }
   ]
  return (
    <div>
    <Section1 text={'Инвентаризация и хранение товаров'} img={img}/>
      <ProcessingCard children={inventory}/>
      <YoutubeCard video={video}/>
      <BuyCall/>
    </div>
  )
}

export default InventoryGoods
