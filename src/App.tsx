import React from 'react';
import AddTodo from './features/TodoList/AddTodo';
import DisplayTodoList from './features/TodoList/DisplayTodoList';
import './index.css';

function App() {

  return (
    <div className="App">
      <AddTodo/>
      <DisplayTodoList />
    </div>
  );
}

export default App;
