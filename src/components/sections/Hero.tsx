import { Button } from 'antd';
import { DownloadOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, floating } from '../../utils/animations';
import personalData from '../../data/personal.json';
import './Hero.css';

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient-bg"></div>
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
        >
          {/* Initials */}
          <motion.div
            className="hero-initials"
            variants={fadeInUp}
          >
            <span className="initials-text gradient-text">
              {personalData.initials}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-name"
            variants={fadeInLeft}
          >
            {personalData.fullName}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="hero-title"
            variants={fadeInRight}
          >
            {personalData.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="hero-description"
            variants={fadeInUp}
          >
            Creo experiencias web <span className="gradient-text">modernas</span>, 
            <span className="gradient-text"> rápidas</span> y 
            <span className="gradient-text"> escalables</span> que transforman ideas en realidad digital.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            variants={fadeInUp}
          >
            <Button
              type="primary"
              size="large"
              className="cta-primary"
              onClick={handleScrollToProjects}
            >
              Ver Proyectos
            </Button>
            <Button
              size="large"
              className="cta-secondary"
              onClick={handleScrollToContact}
            >
              Contactar
            </Button>
            <Button
              size="large"
              icon={<DownloadOutlined />}
              className="cta-download"
              href="/cv/CV_Nicolas_Sarmiento_2026.pdf"
              download
            >
              Descargar CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          variants={floating}
          animate="animate"
        >
          <ArrowDownOutlined />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
