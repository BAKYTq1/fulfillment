// Button.jsx
import React from 'react';
import './H1.scss';

function Button({ open, onClick }) {
  return (
    <button onClick={onClick} className='btn-our-works'>
      {open ? 'Скрыть' : 'Наши работы'}
    </button>
  );
}

export default Button;
