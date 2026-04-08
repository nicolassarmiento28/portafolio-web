import { Row, Col, Progress } from 'antd';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiVite, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiMysql,
  SiFramer
} from 'react-icons/si';
import { AntDesignOutlined } from '@ant-design/icons';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/animations';
import skillsData from '../../data/skills.json';
import './Skills.css';

const Skills = () => {
  const iconMap: { [key: string]: any } = {
    react: SiReact,
    typescript: SiTypescript,
    vite: SiVite,
    javascript: SiJavascript,
    html: SiHtml5,
    css: SiCss3,
    nodejs: SiNodedotjs,
    mysql: SiMysql,
    antd: AntDesignOutlined,
    framer: SiFramer,
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent /> : null;
  };

  const renderSkillCard = (skill: any, index: number) => (
    <Col xs={12} sm={8} md={6} lg={4} key={index}>
      <motion.div
        className="skill-card glass"
        variants={scaleIn}
        whileHover={{ scale: 1.05, y: -10 }}
      >
        <div className="skill-icon" style={{ color: skill.color }}>
          {getIcon(skill.icon)}
        </div>
        <div className="skill-name">{skill.name}</div>
        <Progress
          percent={skill.level}
          strokeColor={{
            '0%': skill.color,
            '100%': skill.color,
          }}
          showInfo={false}
          className="skill-progress"
        />
        <div className="skill-level">{skill.level}%</div>
      </motion.div>
    </Col>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="section-description">
            Tecnologías y herramientas que utilizo para crear soluciones web modernas
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          className="skills-category"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h3 className="category-title" variants={fadeInUp}>
            <span className="gradient-text">Frontend</span>
          </motion.h3>
          <Row gutter={[24, 24]}>
            {skillsData.frontend.map((skill, index) => renderSkillCard(skill, index))}
          </Row>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="skills-category"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h3 className="category-title" variants={fadeInUp}>
            <span className="gradient-text">Backend</span>
          </motion.h3>
          <Row gutter={[24, 24]}>
            {skillsData.backend.map((skill, index) => renderSkillCard(skill, index))}
          </Row>
        </motion.div>

        {/* Learning Skills */}
        <motion.div
          className="skills-category"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h3 className="category-title" variants={fadeInUp}>
            <span className="gradient-text">Aprendiendo</span>
          </motion.h3>
          <Row gutter={[24, 24]}>
            {skillsData.learning.map((skill, index) => renderSkillCard(skill, index))}
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
