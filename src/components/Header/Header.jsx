
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageCircle, Phone } from "lucide-react";
import "./Header.scss";
import tg from '../../assets/svg/tg.svg';
import ws from '../../assets/svg/ws.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleServicesMouseEnter = () => {
    if (!isMobile) {
      setIsServicesDropdownOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobile) {
      setIsServicesDropdownOpen(false);
    }
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
                className={`services-dropdown ${isServicesDropdownOpen ? "open" : ""}`}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <a 
                  href="#" 
                  className="nav-link services-link"
                  onClick={isMobile ? toggleServicesDropdown : undefined}
                >
                  <span className="nav-text">Услуги Контакты</span>
                  <ChevronDown className="dropdown-icon" />
                </a>
                {isServicesDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#"><span className="dropdown-text">Приёмка товаров</span></a></li>
                    <li><a href="#"><span className="dropdown-text">Обработка товаров</span></a></li>
                    <li><a href="#"><span className="dropdown-text">Инвентаризация и хранение товаров</span></a></li>
                    <li><a href="#"><span className="dropdown-text">Фотостудия для маркетплейсов</span></a></li>
                    <li><a href="#"><span className="dropdown-text">Торговый ассистент</span></a></li>
                  </ul>
                )}
              </li>
              
              <li>
                <a href="#" className="nav-link">
                  <span className="nav-text">Личный кабинет</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <span className="nav-text">Страхование</span>
                </a>
              </li>
           
            
            </ul>

            {/* Mobile social icons and buttons */}
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

        <div className="header-right desktop-only">
          <div className="social-icons">
           <img src={tg} alt="" />
           <img src={ws} alt="" />
          </div>
          <div className="auth-buttons">
            <button className="register-btn">Регистрация</button>
            <button className="login-btn">Личный кабинет</button>
          </div>
        </div>

        {/* Burger menu button */}
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
