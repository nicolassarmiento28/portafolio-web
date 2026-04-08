import { HeartFilled } from '@ant-design/icons';
import SocialLinks from '../common/SocialLinks';
import personalData from '../../data/personal.json';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-initials gradient-text">{personalData.initials}</span>
            <p className="footer-tagline">{personalData.title}</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Navegación</h4>
              <ul className="footer-link-list">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#about">Sobre Mí</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Contacto</h4>
              <ul className="footer-link-list">
                <li>
                  <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                </li>
                {personalData.location && <li>{personalData.location}</li>}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Sígueme</h4>
              <SocialLinks size="small" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalData.fullName}. Todos los derechos reservados.
          </p>
          <p className="footer-made-with">
            Hecho con <HeartFilled className="heart-icon" /> usando React, TypeScript & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
