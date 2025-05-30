import { Trash } from 'lucide-react';

function TodoItem({ todo, toggleTodo, deleteTodo, theme, isDeleting }) {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
        isDeleting 
          ? 'opacity-0 scale-95 pointer-events-none' 
          : 'opacity-100 scale-100 hover:scale-[1.02]'
      }`}
      style={{ 
        backgroundColor: theme.todoItemBg,
        border: `1px solid ${theme.border}`
      }}
      onMouseEnter={(e) => {
        if (!isDeleting) {
          e.target.style.backgroundColor = theme.todoItemHover;
        }
      }}
      onMouseLeave={(e) => {
        if (!isDeleting) {
          e.target.style.backgroundColor = theme.todoItemBg;
        }
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 text-red-500 rounded focus:ring-red-500 transition-all duration-200"
        disabled={isDeleting}
      />

      {/* Todo Text */}
      <span
        className={`flex-1 transition-all duration-200 ${
          todo.completed ? 'line-through opacity-50' : ''
        }`}
        style={{ 
          color: theme.text,
          backgroundColor: 'transparent'
        }}
      >
        {todo.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-1 rounded transition-all duration-200"
        style={{ color: theme.textSecondary }}
        disabled={isDeleting}
      >
        <Trash 
          size={18} 
          onMouseEnter={(e) => {
            if (!isDeleting) {
              e.target.style.color = theme.text;
            }
          }}
          onMouseLeave={(e) => {
            if (!isDeleting) {
              e.target.style.color = theme.textSecondary;
            }
          }}
        />
      </button>
    </div>
  );
}

export default TodoItem; 