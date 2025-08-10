import React, { useState } from 'react';
import './style.scss';
import ModalFoto from '../modalfoto/ModalFoto';

function Foto({ photo }) {
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (img) => {
    setSelectedPhoto(img);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="foto">
      {photo.map((item, index) => (
        <img
          src={item.img}
          alt=""
          key={index}
          onClick={() => openModal(item.img)}
          style={{ cursor: 'zoom-in' }}
        />
      ))}

      {modal && (
        <ModalFoto img={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
}

export default Foto;
