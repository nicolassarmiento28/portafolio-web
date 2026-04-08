import { useState } from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import ProjectCard from '../project/ProjectCard';
import ProjectModal from '../project/ProjectModal';
import { Project } from '../../types';
import projectsData from '../../data/projects.json';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            <span className="gradient-text">Proyectos</span> Destacados
          </h2>
          <p className="section-description">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <Row gutter={[32, 32]}>
            {projectsData.projects.map((project) => (
              <Col xs={24} md={12} key={project.id}>
                <motion.div variants={fadeInUp}>
                  <ProjectCard
                    project={project as Project}
                    onClick={() => handleProjectClick(project as Project)}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
