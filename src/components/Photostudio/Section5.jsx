import React from 'react';
import H1 from '../../ui/h1';
import img from '../../assets/infografika.png'
function Section5() {
  return (
    <div className='infographics'>
      <div className='infographics__container container'>
        <div className="infographics__content">
          <H1 h1="Инфографика" color="white" size={40} />
          <p>
            Инфографика карточек товаров для маркетплейсов — это эффективный способ представить информацию о продукте в удобной и привлекательной форме. Она помогает привлечь внимание потенциальных покупателей и предоставляет им необходимые данные для принятия решения о покупке. Инфографика должна быть информативной, но в то же время простой и легко воспринимаемой.
          </p>
          <div className='infographics__line'></div>
          <div className='infographics__features'>
            <h5>Цены на инфографику:</h5>
            <ul>
              <li>1 макет ...................................990 р.</li>
            </ul>
          </div>
        </div>

        <div className="infographics__prices">
         <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section5;
