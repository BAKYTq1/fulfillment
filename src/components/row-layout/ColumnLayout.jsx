import React from 'react'
import "./ColumnLayout.scss";
import icon from "../../assets/svg/icon.svg";
import icon2 from "../../assets/svg/icon2.svg";
import icon3 from "../../assets/svg/icon3.svg";
import icon4 from "../../assets/svg/icon4.svg";

function ColumnLayout() {
    return (
        <div className="work-scheme-steps column-layout">
            <div className="row">
                <div className="step-item1">
                    <img className="img" src={icon} alt="Создание поставки" />
                    <p className="step-text">Создание поставки в личном кабинете</p>
                    <div className="arrow-connector">
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="step-item1">
                    <img className="img" src={icon2} alt="Поставка товара" />
                    <p className="step-text">Поставка товара на фулфилмент</p>
                    <div className="arrow-connector">
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
            {/* <div className="down-arrow">
                <span>&gt;</span>
            </div> */}
            <div className="row-2">
                <div className="step-item1">
                    <img className="img" src={icon3} alt="Оплата" />
                    <p className="step-text">Оплата</p>
                    <div className="arrow-connector">
                        <span>&lt;</span>
                    </div>
                </div>
                <div className="step-item1">
                    <img className="img" src={icon4} alt="Получение счёта" />
                    <p className="step-text">Получение счёта и акта</p>
                    <div className="arrow-connector">
                        <span>&lt;</span>
                    </div>
                </div>
                <div className="step-item1">
                    <img className="img" src={icon} alt="Обработка товара" />
                    <p className="step-text">Обработка товара</p>
                    <div className="arrow-connector">
                        <span>&lt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnLayout