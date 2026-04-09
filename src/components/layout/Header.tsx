import { useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import ThemeToggle from '../common/ThemeToggle';
import personalData from '../../data/personal.json';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'projects', 'skills', 'about', 'contact'], 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', label: 'Inicio' },
    { key: 'projects', label: 'Proyectos' },
    { key: 'skills', label: 'Habilidades' },
    { key: 'about', label: 'Sobre Mí' },
    { key: 'contact', label: 'Contacto' },
  ];

  const handleMenuClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleMenuClick('home')}
        >
          <span className="logo-initials gradient-text">{personalData.initials}</span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          <Menu
            mode="horizontal"
            selectedKeys={[activeSection]}
            className="nav-menu"
            disabledOverflow
            items={menuItems.map(item => ({
              key: item.key,
              label: item.label,
              onClick: () => handleMenuClick(item.key),
            }))}
          />
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Button
            className="mobile-menu-button"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
            type="text"
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={<span className="gradient-text">{personalData.fullName}</span>}
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          className="mobile-drawer"
        >
          <Menu
            mode="vertical"
            selectedKeys={[activeSection]}
            items={menuItems.map(item => ({
              key: item.key,
              label: item.label,
              onClick: () => handleMenuClick(item.key),
            }))}
          />
        </Drawer>
      </div>
    </motion.header>
  );
};

export default Header;
