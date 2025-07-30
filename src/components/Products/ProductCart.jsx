import React from 'react'
import './ProductCart.scss'
import img from '../../assets/productimg.png'
import img2 from '../../assets/f3cee423-5796-4663-a.svg.png'
import img3 from '../../assets/6e44722f-8d14-49b3-a.svg.png'
import img4 from '../../assets/c21bd43b-3fca-4f1b-9.svg.png'
function ProductCart() {
    const product = [
        {
            name: 'Приёмка',
            img: img,
            des1: 'Товар принимается в любой упаковке (мешках, коробах, баулах, ящиках)',
            des2: 'Товар со штрихкодом пересчитывает и проходит визуальный осмотр',
            des3: 'Товар без штрихкода сортируется по позициям и маркируется'
        },
        {

            name: 'Разгрузочные и погрузочные работы',
            img: img2,
            des1: 'Товар выгружается из транспортного средства и завозится/заносится на склад, далее уходит в зону приёмки.',
            des2: 'После подготовки к отгрузке товар перемещается в специальную зону для последующей загрузки в транспортное средство',
        },
        {
            name: 'Снятие обрешётки',
            img: img3,
            description: 'Обрешётка снимается с помощью инструментов, после чего производится перемещение товара в зону приёмки.',
        },
        {
            name: 'Замеры габаритов',
            img: img4,
            description: 'Измерение товаров по Длине х Ширине х Высоте. Данные о актуальных размерах автоматически передаются в Личный Кабинет клиента и могут использоваться для создания товарных карточек на маркетплейс.'
        },
    ]
  return (
    <div className='container'>
    <div className='productcart'>
         {product.map((item, index) => (
            <>
            <div className='cart' key={index}>
              <div className='item-cart'>
              <h1>{item.name}</h1>
              <ul>
                <li>{item.des1}</li>
                {item.des2? <li>{item.des2}</li> : ''}
                {item.des3? <li>{item.des3}</li> : ''}
                {item.description ? <p>{item.description}</p> : ''}
              </ul>
              </div>
               <img src={item.img} alt="" />
            </div>
            </>
         ))}
    </div>
    </div>
  )
}

export default ProductCart
