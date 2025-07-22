import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import "./Footer.scss";
import logofoot from "../../assets/svg/logoFoot.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logofoot} alt="Logo" />
          </div>

          <div className="footer-center">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#services">Услуги</a>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 ОсОО Фулфилмент KG</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
