import React, { useState, useContext, useRef } from 'react';

import { TodoContext } from '../../Context/TodoContext';
const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: { text: inputValue, completed: false } });
      setInputValue('');
      inputRef.current.focus();
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="todo-button">
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;