import React, { useState, useEffect } from 'react';
import './SidebarToggle.scss';
import img2 from '../../assets/Vector33.svg';
import img3 from '../../assets/SVG33.svg';
import { RxCross2 } from "react-icons/rx";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const SidebarToggle = () => {
  const [open, setOpen] = useState(false);
  const [iconIndexes, setIconIndexes] = useState([]);
  const [waveStates, setWaveStates] = useState([]);

  const buttonsData = [
    { icon1: <FaTelegramPlane className="icon icon-main" size={40}/>, icon2: <img src={img3} alt="" className="icon icon-sub" /> },
    { icon1: <FaWhatsapp className="icon icon-main" size={40}/>, icon2: <img src={img2} alt="" className="icon icon-sub" /> },
    { icon1: <img src={img2} alt="" width={27} className="icon icon-main" />, icon2: <img src={img3} alt="" className="icon icon-sub" /> },
    { icon1: <img src={img3} alt="" width={27} className="icon icon-main" />, icon2: <FaTelegramPlane className="icon icon-sub" /> }
  ];

const mainIcons = [
  <img src={img2} alt="icon1" width={25} />,
  <img src={img3} alt="icon2" width={25} />
];
const [mainIconIndex, setMainIconIndex] = useState(0);
const [mainWave, setMainWave] = useState(false);

useEffect(() => {
  if (!open) { // меняем только когда меню закрыто
    const interval = setInterval(() => {
      setMainIconIndex(prev => (prev === 0 ? 1 : 0));
      setMainWave(true);
      setTimeout(() => setMainWave(false), 600);
    }, 1500);

    return () => clearInterval(interval);
  }
}, [open]);

  return (
    <div className="sidebar-toggle">
      <button className={`main-btn ${mainWave ? 'wave' : ''}`} onClick={() => setOpen(o => !o)}>
  {open ? (
    <RxCross2 size={25} color="#fff" />
  ) : (
    mainIcons[mainIconIndex]
  )}
</button>


      <div className={`buttons ${open ? 'open' : ''}`}>
        {buttonsData.map((btn, index) => (
          <button
            key={index}
            className={`action-btn ${waveStates[index] ? 'wave' : ''}`}
          >
            {btn.icon1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarToggle;
