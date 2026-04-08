import { Button } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';
import SocialLinks from '../common/SocialLinks';
import personalData from '../../data/personal.json';
import './Contact.css';

const Contact = () => {
  // URL del formulario de Google Forms
  // Reemplaza esta URL con tu propia URL de Google Forms embebido
  // Para obtener tu URL:
  // 1. Crea tu formulario en Google Forms
  // 2. Click en "Enviar" -> Pestaña "<>" (Insertar HTML)
  // 3. Copia el src del iframe
  const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/TU_FORM_ID/viewform?embedded=true';

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            <span className="gradient-text">Trabajemos</span> Juntos
          </h2>
          <p className="section-description">
            ¿Tienes un proyecto en mente? Envíame un mensaje y conversemos sobre cómo puedo ayudarte
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="info-card glass">
              <h3 className="info-card-title gradient-text">Información de Contacto</h3>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <MailOutlined className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Email</span>
                    <a href={`mailto:${personalData.email}`} className="detail-value">
                      {personalData.email}
                    </a>
                  </div>
                </div>

                {personalData.location && (
                  <div className="contact-detail-item">
                    <UserOutlined className="detail-icon" />
                    <div className="detail-content">
                      <span className="detail-label">Ubicación</span>
                      <span className="detail-value">{personalData.location}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="contact-social">
                <h4 className="social-title">Sígueme en redes</h4>
                <SocialLinks size="large" />
              </div>

              <div className="contact-cta">
                <p className="cta-text">
                  También puedes descargar mi CV para conocer más sobre mi experiencia y habilidades.
                </p>
                <Button
                  type="primary"
                  size="large"
                  className="cta-button"
                  href="/cv/CV-TuNombre.pdf"
                  download
                >
                  Descargar CV
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="form-card glass">
              <iframe
                src={googleFormUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Formulario de Contacto"
                className="google-form-iframe"
              >
                Cargando…
              </iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
