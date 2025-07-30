import React, { useState } from "react";
import "./WorkScheme.scss";
import icon from "../../assets/svg/icon.svg";
import icon2 from "../../assets/svg/icon2.svg";
import icon3 from "../../assets/svg/icon3.svg";
import icon4 from "../../assets/svg/icon4.svg";
import RowLayout from "../row-layout/RowLayout";
import ColumnLayout from "../row-layout/ColumnLayout";

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

      {activeTab === "start" ? (
       <RowLayout/>
      ) : (
        <ColumnLayout/>
      )}
    </div>
  );
}

export default WorkScheme;