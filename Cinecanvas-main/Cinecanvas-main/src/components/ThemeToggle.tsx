import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeToggle must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

   return (  <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      {theme === 'light' ? <FiSun size={24} /> : <FiMoon size={24} />}
    </div>
  );
};

export default ThemeToggle;