
import React, { useState } from "react";
import "./WorkScheme.scss";
import icon from "../../assets/svg/icon.svg";
import icon2 from "../../assets/svg/icon2.svg";
import icon3 from "../../assets/svg/icon3.svg";
import icon4 from "../../assets/svg/icon4.svg";

function WorkScheme() {
  const [activeTab, setActiveTab] = useState("start"); 

  return (
    <div className="work-scheme-container">
      <div className="work-scheme-header">
        <div className="line"></div>
        <h1>Схема работы</h1>
      </div>

      <div className="work-scheme-tabs">
        <button
          className={`tab-button ${activeTab === "start" ? "active" : ""}`}
          onClick={() => setActiveTab("start")}
        >
          Начало сотрудничества
        </button>
        <button
          className={`tab-button ${activeTab === "regular" ? "active" : ""}`}
          onClick={() => setActiveTab("regular")}
        >
          Регулярная работа
        </button>
      </div>

      {/* Этаптар */}
      {activeTab === "start" ? (
        <div className="work-scheme-steps">
          <div className="step-item">
            <img className="img" src={icon} alt="" />
            <p className="step-text">Запрос</p>
          </div>
          <div className="arrow-connector" style={{ left: "270px" }}>
            <span>&gt;</span>
          </div>
          <div className="step-item">
            <img className="img" src={icon2} alt="" />
            <p className="step-text">Детальный расчёт на единицу товара</p>
          </div>
          <div className="arrow-connector" style={{ left: "550px" }}>
            <span>&gt;</span>
          </div>
          <div className="step-item">
            <img className="img" src={icon3} alt="" />
            <p className="step-text">Подписание договора</p>
          </div>
          <div className="arrow-connector" style={{ left: "830px" }}>
            <span>&gt;</span>
          </div>
          <div className="step-item">
            <img className="img" src={icon4} alt="" />
            <p className="step-text">Регистрация личного кабинета</p>
          </div>
        </div>
      ) : (
        <div className="work-scheme-steps column-layout">
    
          <div className="row">
            <div className="step-item1">
              <img className="img" src="https://static.tildacdn.one/tild3332-3236-4463-b231-633539376439/a0d82c4d-9fa3-4cd0-a.svg" alt="" />
              <p className="step-text">Создание поставки в личном кабинете</p>
            </div>
            <div className="arrow-connector" style={{ left: "46%", top: "50px" }}>
              <span>&gt;</span>
            </div>
            <div className="step-item1">
              <img className="img" src="https://static.tildacdn.one/tild6631-3763-4336-b032-396330343837/9e64e7c2-f5d2-464b-b.svg" alt="" />
              <p className="step-text">Поставка товара на фулфилмент</p>
            </div>
          </div>
          <div className="arrow-connector down-arrow" style={{ left: "85%", top: "43%" }}>
            <span style={{ transform: "rotate(90deg)" }}>&gt;</span>
          </div>

          <div className="row">
            <div className="step-item">
              <img className="img" src="https://static.tildacdn.one/tild6131-6632-4565-b532-633765653334/7bc04d07-53dc-4bd2-9.svg" alt="" />
              <p className="step-text">Оплата</p>
            </div>
            <div className="arrow-connector" style={{ left: "28%", top: "33%" }}>
            <span>&lt;</span>
            </div>
            <div className="step-item">
              <img className="img" src="https://static.tildacdn.one/tild3931-3834-4433-b963-386130303462/38afde99-80ad-477a-8.svg" alt="" />
              <p className="step-text">Получение счёта и акта</p>
            </div>
            <div className="arrow-connector" style={{ left: "63%", top: "33%" }}>
            <span>&lt;</span>
            </div>
            <div className="step-item">
              <img className="img" src="https://static.tildacdn.one/tild3930-6163-4463-b561-376136363032/2950a00d-8c63-4500-9.svg" alt="" />
              <p className="step-text">Обработка товара</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkScheme;
