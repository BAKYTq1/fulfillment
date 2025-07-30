import React from "react";
import "./FulfilmentСenter.scss";
import time from "../../assets/svg/time.svg";
import car from "../../assets/svg/car.svg";
import kubik from "../../assets/svg/kubik.svg";
import Thermometer from "../../assets/svg/thermometer.svg";
import personal from "../../assets/svg/personalФccount.svg";
import H1 from "../../ui/h1";
function FulfilmentСenter() {
  return (
    <section>
      <div className="section-top">
          <H1 h1={'Фулфилмент центр'}/>
        <div className="cards">
          <div className="card">
            <h1>4 600 м2</h1>
            <p>Общая площадь</p>
          </div>
          <div className="card">
            <h1>65 000</h1>
            <p>Обрабатываемых товаров в сутки</p>
          </div>
          <div className="card">
            <img src={time} alt="" />
            <p>Круглосуточная охрана</p>
          </div>
          <div className="card">
            <img src={car} alt="" />
            <p>Профессиональное оборудование</p>
          </div>
          <div className="card">
            <img src={Thermometer} alt="" />
            <p>Тёплый склад</p>
          </div>
          <div className="card">
            <h1>7 200</h1>
            <p>Мест для паллет</p>
          </div>
          <div className="card">
            <img src={kubik} alt="" />
            <p>Интеграция с ключевыми маркетплейсами</p>
          </div>
          <div className="card">
            <img src={personal} alt="" />
            <p>Личный кабинет клиента</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FulfilmentСenter;
