import { Github, Facebook } from 'lucide-react';

function Footer({ theme }) {
  return (
    <footer className="mt-8 text-center">
      <p 
        className="text-sm opacity-60 transition-all duration-300 mb-3"
        style={{ color: theme.textSecondary }}
      >
        Created by <span className="font-semibold">Percy S. Bunag</span>
      </p>
      
      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a
          href="https://www.facebook.com/rephxrion/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-all duration-200 hover:scale-110 group"
          style={{ 
            backgroundColor: theme.inputBg,
            color: theme.textSecondary 
          }}
          aria-label="Facebook Profile"
        >
          <Facebook 
            size={18} 
            className="transition-colors duration-200 group-hover:text-blue-600"
          />
        </a>
        
        <a
          href="https://github.com/percybunag"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-all duration-200 hover:scale-110 group"
          style={{ 
            backgroundColor: theme.inputBg,
            color: theme.textSecondary 
          }}
          aria-label="GitHub Profile"
        >
          <Github 
            size={18} 
            className="transition-colors duration-200"
            style={{
              color: 'inherit'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = theme.text;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = theme.textSecondary;
            }}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 