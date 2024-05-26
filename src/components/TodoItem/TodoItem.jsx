import React, { useContext, useCallback, useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';

const TodoItem = ({ todo, index }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleTodo = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  }, [dispatch, index]);

  const handleRemoveTodo = useCallback(() => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  }, [dispatch, index]);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: 'EDIT_TODO', payload: { index, text: editText } });
      setEditText(editText);
      setIsEditing(false);
    },
    [dispatch, index, editText]
  );

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="todo-edit-form">
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="todo-input"
            onBlur={handleEditSubmit}
            autoFocus
          />
        </form>
      ) : (
        <div className="todo-text">
          {todo.text}
        </div>
      )}
      <button className="todo-remove" onClick={handleRemoveTodo}>
        ×
      </button>
    </div>
  );
};

export default TodoItem;
