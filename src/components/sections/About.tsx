import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../../utils/animations';
import personalData from '../../data/personal.json';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <h2 className="section-title">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
        </motion.div>

        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={10}>
            <motion.div
              className="about-image-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="about-image glass">
                <img
                  src="/profile.jpg"
                  alt={personalData.fullName}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Tu+Foto';
                  }}
                />
              </div>
              <div className="image-decoration image-decoration-1"></div>
              <div className="image-decoration image-decoration-2"></div>
            </motion.div>
          </Col>

          <Col xs={24} md={14}>
            <motion.div
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="about-subtitle gradient-text">
                {personalData.title}
              </h3>

              <p className="about-text">
                {personalData.bio}
              </p>

              <div className="about-info">
                <div className="info-item">
                  <span className="info-label gradient-text">Nombre:</span>
                  <span className="info-value">{personalData.fullName}</span>
                </div>
                <div className="info-item">
                  <span className="info-label gradient-text">Email:</span>
                  <span className="info-value">{personalData.email}</span>
                </div>
                {personalData.location && (
                  <div className="info-item">
                    <span className="info-label gradient-text">Ubicación:</span>
                    <span className="info-value">{personalData.location}</span>
                  </div>
                )}
              </div>

              <div className="about-highlights">
                <motion.div
                  className="highlight-card glass"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className="highlight-title gradient-text">Enfoque</h4>
                  <p className="highlight-text">
                    Crear soluciones escalables y eficientes con código limpio y mejores prácticas
                  </p>
                </motion.div>

                <motion.div
                  className="highlight-card glass"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className="highlight-title gradient-text">Objetivo</h4>
                  <p className="highlight-text">
                    Desarrollar aplicaciones que generen impacto real y experiencias excepcionales
                  </p>
                </motion.div>

                <motion.div
                  className="highlight-card glass"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className="highlight-title gradient-text">Aprendizaje</h4>
                  <p className="highlight-text">
                    Siempre explorando nuevas tecnologías y manteniéndome actualizado con la industria
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
