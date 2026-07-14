import SocialLinks from '../common/SocialLinks';
import personalData from '../../data/personal.json';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <a href="#home" className="footer-brand" aria-label="Volver al inicio">
            <span className="footer-initials gradient-text">{personalData.initials}</span>
            <p className="footer-tagline">{personalData.title}</p>
          </a>

          <div className="footer-links">
            <div className="footer-section footer-nav-section">
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

          <a href="#home" className="footer-back-to-top" aria-label="Volver arriba">
            Volver arriba
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
