import React from 'react';
import H1 from '../../ui/h1';

function Section4() {
  return (
    <div className='video-overview'>
      <div className='head-video-overview container'>
        <div className="item-video-overview">
          <H1 h1={'Видеообзор'} color={'white'} size={40} />
          <p>
Процесс распаковки
Монтаж по сценарию
Видеообзор товара для маркетплейса является мощным инструментом для продвижения и привлечения внимания потенциальных покупателей. Он позволяет детально рассмотреть товар, продемонстрировать его функциональность и преимущества, а также создать эмоциональное впечатление у зрителей.
          </p>
          <div className='linear'></div>
          <div className='foot-video'>
            <h5>Услуги:</h5>
            <ul>
              <li>Процесс распаковкиЗ</li>
              <li>Обзор использования</li>
              <li>Монтаж по сценарию</li>
              <li>Наложение текста и музыки</li>
            </ul>
          </div>
        </div>

        <div className="footer-video-overview">
          <h1>Стоимость съёмки
видеообзора:</h1>
          <div>
            <h5>Видео обзор “под ключ”</h5> <h4>Договор.</h4>
          </div>
          <div>
            <h5>Видеопрезентация для
карточки товара (до 30 сек.)</h5> <h4>1500 р.</h4>
          </div>
          <div>
            <h5>Видеопрезентация для
карточки товара с
инфографикой (до 30 сек.)</h5> <h4>3000 p.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
