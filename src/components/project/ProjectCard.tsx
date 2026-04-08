import { Card, Tag } from 'antd';
import { EyeOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import type { Project } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card-wrapper"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="project-card glass"
        hoverable
        cover={
          <div className="project-card-image">
            <img
              alt={project.title}
              src={project.thumbnail}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Project+Image';
              }}
            />
            <div className="project-card-overlay">
              <motion.button
                className="overlay-button"
                onClick={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <EyeOutlined /> Ver Detalles
              </motion.button>
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-button"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubOutlined /> GitHub
                </motion.a>
              )}
            </div>
          </div>
        }
        onClick={onClick}
      >
        <div className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
          
          <div className="project-card-tags">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} className="project-tag" color="cyan">
                {tag}
              </Tag>
            ))}
          </div>

          <div className="project-card-tech">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <div
                key={index}
                className="tech-badge"
                style={{ borderColor: tech.color }}
                title={tech.name}
              >
                <span style={{ color: tech.color }}>{tech.name}</span>
              </div>
            ))}
            {project.techStack.length > 4 && (
              <div className="tech-badge tech-badge-more">
                +{project.techStack.length - 4}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
