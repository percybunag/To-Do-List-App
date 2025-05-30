import { useState, useEffect } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';
import Footer from './Footer';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [deletingIds, setDeletingIds] = useState(new Set());

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to system preference
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply theme and save preference
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    // Add id to deleting set to trigger fade animation
    setDeletingIds(prev => new Set(prev).add(id));
    
    // Remove the todo after fade animation completes
    setTimeout(() => {
      setTodos(todos.filter(todo => todo.id !== id));
      setDeletingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300); // Match animation duration
  };

  // Theme styles
  const theme = {
    background: isDark ? '#111827' : '#f3f4f6',
    cardBg: isDark ? '#1f2937' : '#ffffff',
    text: isDark ? '#ffffff' : '#1f2937',
    textSecondary: isDark ? '#9ca3af' : '#6b7280',
    inputBg: isDark ? '#374151' : '#f9fafb',
    border: isDark ? '#4b5563' : '#e5e7eb',
    todoItemBg: isDark ? '#374151' : '#f9fafb',
    todoItemHover: isDark ? '#4b5563' : '#f3f4f6'
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-300"
      style={{ backgroundColor: theme.background }}
    >
      <div 
        className="w-full max-w-sm sm:max-w-md rounded-xl shadow-xl p-4 sm:p-6 transition-all duration-300"
        style={{ backgroundColor: theme.cardBg }}
      >
        <Header 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          theme={theme} 
        />
        
        <TodoInput 
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
          theme={theme}
        />

        <div className="space-y-2 sm:space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              theme={theme}
              isDeleting={deletingIds.has(todo.id)}
            />
          ))}
        </div>

        <TodoStats todos={todos} theme={theme} />
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default TodoList; 