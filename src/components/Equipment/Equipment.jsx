import React from "react";
import "./Equipment.scss";
import Equipment0 from "../../assets/img/Equipment.png"; // 
import Equipment1 from "../../assets/img/Equiment1.png"; // 
import Equipment2 from "../../assets/svg/Equiment2.svg"; // 

function Equipment() {
  return (
    <section className="equipment-section">
      <div className="equipment-container">
        {" "}
       
        <div className="equipment__header">
          <div className="equipment__accent-line"></div>
          <h1 className="equipment__title">Оборудование</h1>
        </div>
   
        <div className="equipment__card equipment__card--large">
          <div className="equipment__content">
            <div className="equipment__image-wrapper">
              <img
                src={Equipment0}
                alt="Штабелёр самоходный IWS"
                className="equipment__image"
              />
            </div>
            <div className="equipment__details">
              <div className="equipment__description">
                <h2 className="equipment__card-title">
                  Штабелёр самоходный IWS
                </h2>
                <p>
                  Электрический самоходный штабелёр. Электропривод на
                  перемещение установлен на заднее поворотное колесо, задние
                  колеса штабелера закрыты фартуком, надежно защищающим их от
                  внешнего механического воздействия при маневрировании.
                  Управление осуществляется с помощью кнопок и рычажков на ручке
                  управления. Не требует от оператора физических усилий, что
                  способствует высокой производительности работ.
                </p>
              </div>
              <div className="equipment__specifications">
                <h3 className="equipment__spec-title">Характеристики:</h3>
                <div className="equipment__spec-table">
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Время работы:</span>
                    <span className="equipment__spec-value">8 часов</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Батарея:</span>
                    <span className="equipment__spec-value">12v-75Ahх2</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Высота подхвата:
                    </span>
                    <span className="equipment__spec-value">90мм</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Высота подъёма:
                    </span>
                    <span className="equipment__spec-value">
                      1600 / 2000 / 2500 / 3000 / 3300 / 3500мм
                    </span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Длина вил:</span>
                    <span className="equipment__spec-value">1125мм</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Ширина вил:</span>
                    <span className="equipment__spec-value">560мм</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Вес:</span>
                    <span className="equipment__spec-value">
                      409 / 439 / 459 / 479 / 499 / 519кг
                    </span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Радиус разворота:
                    </span>
                    <span className="equipment__spec-value">1470мм</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Ширина прохода:
                    </span>
                    <span className="equipment__spec-value">820мм</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="equipment__card equipment__card--packaging">
          <div className="equipment__content equipment__content--reverse">
            <div className="equipment__text-block">
              {" "}
              {/* Текст үчүн жаңы контейнер */}
              <h2 className="equipment__card-title">
                Упаковочная машина и термоусадочный тоннель
              </h2>
              <p>
                Полуавтоматическая тоннельная термоусадочная машина SmiPack
                FP560A+термотоннель Т450 для упаковки продукции в термоусадочную
                пленку.
              </p>
             
              <div className="equipment__specifications-packaging">
                {" "}
                {/* Өзгөчө стилдер үчүн класс */}
                <h3>Характеристики:</h3>
                <div className="equipment-center">
                <div className="equipment__spec-grid-packaging">
                  {" "}
                  {/* 2 колонкалуу таблица үчүн grid */}
                  <p className="p">До 1500 уп/час</p>
                  <p>Обрезка, сварка и термоусадка пленки за один цикл</p>
                  <p className="p">Термонож с тефлоновым покрытием</p>
                  <p>Автоматическая система опускания сварных планок</p>
                </div>
                <div className="equipment__spec-grid-packaging1">
                  <p className="p">
                    Регулировка упаковочного стола, вне зависимости от положения
                    держателя бобины
                  </p>
                  <p>
                    Регулировка времени обрезки и сварки пленки, термоусадки,
                    температуры
                  </p>
                </div>
                
                </div>
              </div>
            </div>
            <div className="equipment__image-wrapper equipment__image-wrapper--packaging">
              <img
                src={Equipment1}
                alt="Упаковочная машина"
                className="equipment__image"
              />
            </div>
          </div>
        </div>
        <div className="equipment__card equipment__card--small">
          {" "}
      
          <div className="equipment__content">
            <div className="equipment__image-wrapper">
              <img
                src={Equipment2}
                alt="Парогенератор"
                className="equipment__image"
              />
            </div>
            <div className="equipment__details">
              <div className="equipment__description">
                <h2 className="equipment__card-title">Парогенератор</h2>
                <p>
                  Уникальность аппарата заключается в высокой мощности и
                  комплектацией каркасной вешалкой.
                </p>
              </div>
              <div className="equipment__specifications">
                <h3 className="equipment__spec-title">Характеристики:</h3>
                <div className="equipment__spec-table">
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Давление пара:
                    </span>
                    <span className="equipment__spec-value">до 4.5 бар</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Производительность пара:
                    </span>
                    <span className="equipment__spec-value">до 6 кг/час</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">
                      Объем бойлера:
                    </span>
                    <span className="equipment__spec-value">2.4 л</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Мощность:</span>
                    <span className="equipment__spec-value">2200 Вт</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Напряжение:</span>
                    <span className="equipment__spec-value">220-240 В</span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Размеры:</span>
                    <span className="equipment__spec-value">
                      360x240x260 мм
                    </span>
                  </div>
                  <div className="equipment__spec-row">
                    <span className="equipment__spec-label">Вес:</span>
                    <span className="equipment__spec-value">7.5 кг</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
