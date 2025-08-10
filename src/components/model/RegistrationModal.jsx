import React, { useState } from 'react';
import './Modal.css';
import { IoMdClose } from "react-icons/io";

const RegistrationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <button onClick={onClose} className="modal-close"><IoMdClose /></button>
        <h1 className="modal-title">Зарегистрироваться</h1>
        
        <p className="modal-subtitle">
          Оставьте свои контактные данные и мы поможем вам с регистрацией
        </p>
        
        <div className="modal-divider"></div>
        
        <div className="modal-form-group">
          <label className={`modal-label ${(focusedField === 'name' || formData.name) ? 'label-raised' : ''}`}>
            Имя *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className="modal-input"
          />
        </div>
        
        <div className="modal-form-group">
          <label className={`modal-label ${(focusedField === 'phone' || formData.phone) ? 'label-raised' : ''}`}>
            Телефон *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => handleFocus('phone')}
            onBlur={handleBlur}
            className="modal-input"
          />
        </div>
        
        <div className="modal-divider"></div>
        
        <div className="modal-form-group">
          <label className={`modal-label ${(focusedField === 'email' || formData.email) ? 'label-raised' : ''}`}>
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className="modal-input"
          />
        </div>
        
        <div className="modal-divider"></div>
        
        <p className="modal-disclaimer">
          Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, 
          в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», 
          на условиях и для целей, определенных в Согласии на обработку персональных данных.*
        </p>
        
        <div className="modal-divider"></div>
        
        <div className="modal-actions">
          <button className="modal-submit-btn">Отправить</button>
          <button className="modal-report-btn">Сообщить о нарушении</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;