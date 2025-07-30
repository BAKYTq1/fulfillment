import React from 'react';
import styles from './RowLayout.module.scss';
import icon from '../../assets/svg/icon.svg';
import icon2 from '../../assets/svg/icon2.svg';
import icon3 from '../../assets/svg/icon3.svg';
import icon4 from '../../assets/svg/icon4.svg';

function RowLayout() {
  return (
    <div className={`${styles.rowLayout}`}>
      <div className={styles.stepItem}>
        <img className={styles.img} src={icon} alt="Запрос" />
        <p className={styles.stepText}>Запрос</p>
        <div className={styles.arrowConnector}>
          <span>&gt;</span>
        </div>
      </div>
      <div className={styles.stepItem}>
        <img className={styles.img} src={icon2} alt="Детальный расчёт" />
        <p className={styles.stepText}>Детальный расчёт на единицу товара</p>
        <div className={styles.arrowConnector}>
          <span>&gt;</span>
        </div>
      </div>
      <div className={styles.stepItem}>
        <img className={styles.img} src={icon3} alt="Подписание договора" />
        <p className={styles.stepText}>Подписание договора</p>
        <div className={styles.arrowConnector}>
          <span>&gt;</span>
        </div>
      </div>
      <div className={styles.stepItem}>
        <img className={styles.img} src={icon4} alt="Регистрация личного кабинета" />
        <p className={styles.stepText}>Регистрация личного кабинета</p>
      </div>
    </div>
  );
}

export default RowLayout;
