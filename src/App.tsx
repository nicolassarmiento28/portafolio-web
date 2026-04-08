import { ConfigProvider, theme } from 'antd';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import AboutContact from './components/sections/AboutContact';
import Footer from './components/layout/Footer';
import './styles/global.css';

const AppContent = () => {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#00f5ff',
          colorSuccess: '#39ff14',
          colorWarning: '#f7931e',
          colorError: '#ff006e',
          borderRadius: 16,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        components: {
          Button: {
            primaryShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
          },
          Card: {
            boxShadowTertiary: '0 8px 32px rgba(0, 245, 255, 0.1)',
          },
          Modal: {
            contentBg: currentTheme === 'dark' ? 'rgba(30, 30, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          },
        },
      }}
    >
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <AboutContact />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
