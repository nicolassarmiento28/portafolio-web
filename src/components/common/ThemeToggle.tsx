import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="theme-toggle"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        checkedChildren={<BulbFilled />}
        unCheckedChildren={<BulbOutlined />}
        className="theme-switch"
      />
    </motion.div>
  );
};

export default ThemeToggle;
