function TodoStats({ todos, theme }) {
  const remainingTasks = todos.filter(todo => !todo.completed).length;
  
  if (todos.length === 0) return null;

  return (
    <div 
      className="mt-4 sm:mt-6 pt-3 sm:pt-4 text-center"
      style={{ borderTop: `1px solid ${theme.border}` }}
    >
      <p 
        className="text-xs sm:text-sm"
        style={{ color: theme.textSecondary }}
      >
        {remainingTasks === 0 
          ? "All completed! 🎉" 
          : `${remainingTasks} of ${todos.length} tasks remaining`
        }
      </p>
    </div>
  );
}

export default TodoStats; 