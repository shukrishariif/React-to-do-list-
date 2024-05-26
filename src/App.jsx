import React from 'react';

import { TodoProvider } from './Context/TodoContext';
import TodoForm from './components/TodoForm/TodoForm';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoList from './components/TodoList.jsx/TodoList';


const App = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
        
      </div>
    </TodoProvider>
  );
};

export default App;


// import React from 'react';
// import { TodoProvider } from './Context/TodoContext';
// import TodoForm from './components/TodoForm/TodoForm';
// import TodoList from './components/TodoList.jsx/TodoList';
// // import TodoFilter from './components/TodoFilter/TodoFilter';
// import useLocalStorage from './hooks/UseLocalStorage';
// const App = () => {
//   const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);

//   return (
//     <TodoProvider>
//       <div className="container mx-auto p-4">
//         {/* <h1 className="text-2xl mb-4">Todo List</h1> */}
//         <TodoForm />
//         {/* <TodoFilter /> */}
//         <TodoList />
//       </div>
//     </TodoProvider>
//   );
// };

// export default App;
