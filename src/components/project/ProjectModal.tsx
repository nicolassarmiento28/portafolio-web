import { Modal, Tag, Button, Carousel } from 'antd';
import { GithubOutlined, LinkOutlined, CloseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  visible: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, visible, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width="90%"
      style={{ maxWidth: 1200, top: 20 }}
      className="project-modal"
      closeIcon={<CloseOutlined />}
    >
      <motion.div
        className="project-modal-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title gradient-text">{project.title}</h2>
          <p className="modal-subtitle">{project.description}</p>
          
          <div className="modal-tags">
            {project.tags.map((tag, index) => (
              <Tag key={index} className="modal-tag" color="cyan">
                {tag}
              </Tag>
            ))}
          </div>

          <div className="modal-actions">
            {project.links.live && (
              <Button
                type="primary"
                icon={<LinkOutlined />}
                href={project.links.live}
                target="_blank"
                size="large"
                className="modal-button modal-button-primary"
              >
                Ver Demo
              </Button>
            )}
            {project.links.github && (
              <Button
                icon={<GithubOutlined />}
                href={project.links.github}
                target="_blank"
                size="large"
                className="modal-button modal-button-secondary"
              >
                Ver Código
              </Button>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="modal-gallery">
          <Carousel autoplay dots={{ className: 'carousel-dots' }}>
            {project.images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Project+Screenshot';
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Details Grid */}
        <div className="modal-details-grid">
          <div className="detail-card glass">
            <h3 className="detail-title">Desafío</h3>
            <p className="detail-text">{project.details.challenge}</p>
          </div>

          <div className="detail-card glass">
            <h3 className="detail-title">Solución</h3>
            <p className="detail-text">{project.details.solution}</p>
          </div>

          <div className="detail-card glass">
            <h3 className="detail-title">Impacto</h3>
            <p className="detail-text">{project.details.impact}</p>
          </div>
        </div>

        {/* Features */}
        <div className="modal-features">
          <h3 className="section-title">Características Principales</h3>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item glass"
                whileHover={{ scale: 1.02 }}
              >
                <span className="feature-bullet gradient-text">✓</span>
                <span className="feature-text">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="modal-tech-stack">
          <h3 className="section-title">Tecnologías Utilizadas</h3>
          <div className="tech-stack-grid">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item glass"
                style={{ borderColor: tech.color }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="tech-name" style={{ color: tech.color }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default ProjectModal;
