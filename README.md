# To-Do List App 📋

A modern, responsive Todo List application built with React, Vite, and TailwindCSS. Features a beautiful dark/light theme toggle, smooth animations, and an intuitive user interface.

![Todo List App](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- ➕ **Add Tasks**: Easily add new tasks with Enter key support
- ✅ **Mark Complete**: Toggle task completion with checkboxes
- 🗑️ **Delete Tasks**: Remove tasks with smooth fade-out animation
- 🌙 **Dark/Light Theme**: Toggle between themes with localStorage persistence
- 📱 **Responsive Design**: Works perfectly on all screen sizes
- 🎨 **Modern UI**: Clean, minimalist design with smooth transitions
- 💾 **Theme Persistence**: Remembers your theme preference
- 📊 **Task Counter**: Shows remaining tasks and completion status
- 🎭 **Smooth Animations**: Fade-out effects and hover animations

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/percybunag/bunag-todo-list.git
   cd bunag-todo-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📖 How to Use

### Adding a Task
1. Type your task in the input field
2. Click the **ADD** button or press **Enter**
3. Your task will appear in the list below

### Completing a Task
1. Click the checkbox next to any task
2. Completed tasks will show with a strikethrough effect
3. The task counter will update automatically

### Deleting a Task
1. Click the trash icon (🗑️) next to any task
2. The task will fade out smoothly before being removed
3. The task counter will update automatically

### Switching Themes
1. Click the sun/moon icon in the top-right corner
2. The app will instantly switch between light and dark themes
3. Your preference will be saved automatically

## 🎨 Theme Customization

The app features two beautiful themes:

### Light Theme
- Clean white background
- Dark text for excellent readability
- Subtle gray accents

### Dark Theme
- Modern dark gray background
- Light text for comfortable viewing
- Consistent color scheme

## 🛠️ Technical Details

### Built With
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Component Architecture
```
src/
├── components/
│   ├── TodoList.jsx      # Main container component
│   ├── Header.jsx        # Title and theme toggle
│   ├── TodoInput.jsx     # Input field and add button
│   ├── TodoItem.jsx      # Individual todo item
│   ├── TodoStats.jsx     # Task statistics
│   └── Footer.jsx        # Footer with social links
├── App.jsx               # Root component
├── index.css             # Global styles
└── main.jsx              # Entry point
```

### Key Features Implementation
- **State Management**: Uses React hooks (useState, useEffect)
- **Theme System**: Custom theme object with CSS-in-JS
- **Local Storage**: Persists theme preference
- **Smooth Animations**: CSS transitions and custom keyframes
- **Responsive Design**: Mobile-first approach with TailwindCSS

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
bunag-todo-list/
├── public/
│   └── index.html        # HTML template
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main app component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎯 Future Enhancements

- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Export/import functionality
- [ ] Drag and drop reordering
- [ ] Search and filter options
- [ ] Offline support with service workers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Percy S. Bunag**
- GitHub: [@percybunag](https://github.com/percybunag)
- Facebook: [@rephxrion](https://www.facebook.com/rephxrion/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind team for the excellent CSS framework
- Lucide for the beautiful icons
- Vite team for the fast development experience

---

Made with ❤️ by Percy S. Bunag
