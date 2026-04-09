import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import personalData from '../../data/personal.json';
import './SocialLinks.css';

interface SocialLinksProps {
  size?: 'small' | 'medium' | 'large';
}

const SocialLinks = ({ size = 'medium' }: SocialLinksProps) => {
  const { socialLinks } = personalData;

  const iconSize = size === 'small' ? 20 : size === 'medium' ? 24 : 32;

  const socialIcons = [
    { icon: <GithubOutlined style={{ fontSize: iconSize }} />, url: socialLinks.github, label: 'GitHub' },
    { icon: <LinkedinOutlined style={{ fontSize: iconSize }} />, url: socialLinks.linkedin, label: 'LinkedIn' },
  ];

  return (
    <div className={`social-links social-links-${size}`}>
      {socialIcons.map((social, index) => (
        social.url && (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        )
      ))}
    </div>
  );
};

export default SocialLinks;
