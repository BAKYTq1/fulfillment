import React from 'react'
import './style.scss'
function ModalFoto({img, onClose}) {
  return (
      <div className="modal-overlay" >
        <button className="close-btn" onClick={onClose}>×</button>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={img} alt="Modal" />
      </div>
    </div>
  )
}

export default ModalFoto
