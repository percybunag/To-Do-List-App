import { Sun, Moon } from 'lucide-react';

function Header({ isDark, toggleTheme, theme }) {
  return (
    <div className="flex items-start justify-between mb-4 sm:mb-6">
      <div className="flex-1 min-w-0">
        <h1 
          className="text-lg sm:text-2xl font-black mb-1 flex items-center"
          style={{ color: theme.text }}
        >
          <span className="truncate">To-Do List 📋</span>
        </h1>
        <p 
          className="text-xs sm:text-sm opacity-75"
          style={{ color: theme.textSecondary }}
        >
          Organize your tasks efficiently
        </p>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-all duration-200 hover:scale-105 ml-2 flex-shrink-0"
        style={{ 
          backgroundColor: theme.inputBg, 
          color: theme.textSecondary 
        }}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
      </button>
    </div>
  );
}

export default Header; 