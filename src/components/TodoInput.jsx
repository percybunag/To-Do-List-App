function TodoInput({ inputValue, setInputValue, addTodo, theme }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add your task"
        className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 text-sm sm:text-base"
        style={{ 
          backgroundColor: theme.inputBg, 
          border: `1px solid ${theme.border}`,
          color: theme.text
        }}
      />
      <button
        onClick={addTodo}
        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
      >
        ADD
      </button>
    </div>
  );
}

export default TodoInput; 