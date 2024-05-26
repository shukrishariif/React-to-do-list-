import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../../Context/TodoContext';

const TodoFilter = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleFilterChange = useCallback(
    (filter) => {
      dispatch({ type: 'SET_FILTER', payload: filter });
    },
    [dispatch]
  );

  return (
    <div className="todo-filter">
      <button
        className={state.filter === 'all' ? 'active' : ''}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={state.fiylter === 'active' ? 'active' : ''}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={state.filter === 'completed' ? 'active' : ''}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
