import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown, MessageCircle, Phone, Ellipsis } from "lucide-react";
import "./Header.scss";
import tg from '../../assets/svg/tg.svg';
import ws from '../../assets/svg/ws.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMiniModalOpen, setIsMiniModalOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate()
  // Обработка изменения ширины экрана
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Services dropdown toggle
  const toggleServices = useCallback(() => {
    if (isMobile) setIsServicesOpen(prev => !prev);
  }, [isMobile]);

  const handleServicesHover = (open) => {
    if (!isMobile) setIsServicesOpen(open);
  };

  // Mini modal toggle
  const toggleMiniModal = () => {
    setIsMiniModalOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <div className="logo-placeholder">FF</div>
          </div>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#" className="nav-link">
                  <span className="nav-text">Фулфилмент центр Оборудование</span>
                </a>
              </li>

              <li
                className={`services-dropdown ${isServicesOpen ? "open" : ""}`}
                onMouseEnter={() => handleServicesHover(true)}
                onMouseLeave={() => handleServicesHover(false)}
              >
                <a
                  href="#"
                  className="nav-link services-link"
                  onClick={toggleServices}
                >
                  <span className="nav-text">Услуги Контакты</span>
                  <ChevronDown className="dropdown-icon" />
                </a>

                {isServicesOpen && (
                  <ul className="dropdown-menu">
                    <li onClick={() => navigate('/goods-acceptance')} className="menu-li"><a href="#"><span className="dropdown-text">Приёмка товаров</span></a></li>
                    <li onClick={() => navigate('/goods-processing')} className="menu-li"><a href="#"><span className="dropdown-text">Обработка товаров</span></a></li>
                    <li onClick={() => navigate('/storage-inventory')} className="menu-li"><a href="#"><span className="dropdown-text">Инвентаризация и хранение товаров</span></a></li>
                    <li onClick={() => navigate('/photo-studio')} className="menu-li"><a href="#"><span className="dropdown-text">Фотостудия для маркетплейсов</span></a></li>
                    <li onClick={() => navigate('/assistent')} className="menu-li"><a href="#"><span className="dropdown-text">Торговый ассистент</span></a></li>
                  </ul>
                )}
              </li>

              <li>
                <a href="#" className="nav-link"><span className="nav-text">Личный кабинет</span></a>
              </li>
              <li>
                <a href="#" className="nav-link"><span className="nav-text">Страхование</span></a>
              </li>
              <li>
                <a href="#" className="nav-link"><span className="nav-text">Оборудование</span></a>
              </li>
              <li>
                <a href="#" className="nav-link"><span className="nav-text">Контакты</span></a>
              </li>

              <li
                onClick={toggleMiniModal}
                onMouseEnter={() => !isMobile && setIsMiniModalOpen(true)}
                onMouseLeave={() => !isMobile && setIsMiniModalOpen(false)}
              >
                <span className="nav-link"><Ellipsis /></span>
                {isMiniModalOpen && (
                  <div className="mini-modal">
                    <ul>
                      <li><a href="#">Услуги</a></li>
                      <li><a href="#">Контакты</a></li>
                      <li><a href="#">Личный кабинет</a></li>
                      <li><a href="#">Страхование</a></li>
                      <li><a href="#">Оборудование</a></li>
                      <li><a href="#">Контакты</a></li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>

            {/* Mobile actions */}
            <div className="mobile-actions">
              <div className="social-icons">
                <MessageCircle className="social-icon" />
                <Phone className="social-icon" />
              </div>
              <div className="auth-buttons">
                <button className="register-btn">Регистрация</button>
                <button className="login-btn">Личный кабинет</button>
              </div>
            </div>
          </nav>
        </div>

        {/* Right side */}
        <div className="header-right desktop-only">
          <div className="social-icons">
            <img src={tg} alt="Telegram" />
            <img src={ws} alt="WhatsApp" />
          </div>
          <div className="auth-buttons">
            <button className="register-btn">Регистрация</button>
            <button className="login-btn">Личный кабинет</button>
          </div>
        </div>

        {/* Burger */}
        <button
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
