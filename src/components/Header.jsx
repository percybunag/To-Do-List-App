import { Sun, Moon } from 'lucide-react';

function Header({ isDark, toggleTheme, theme }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 
          className="text-2xl font-black mb-1 flex items-center"
          style={{ color: theme.text }}
        >
          To-Do List 📋
        </h1>
        <p 
          className="text-sm opacity-75"
          style={{ color: theme.textSecondary }}
        >
          Organize your tasks efficiently
        </p>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
        style={{ 
          backgroundColor: theme.inputBg, 
          color: theme.textSecondary 
        }}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}

export default Header; 