import React from 'react';
import AddTodo from './features/TodoList/AddTodo';
import DisplayTodoList from './features/TodoList/DisplayTodoList';
import './index.css';

function App() {

  return (
    <div className='m-3 '>
      <div className='text-center'>
        <h1 className='display-2'>Todo List</h1>
        <h2 className='display-5 text-muted'>with Redux and Typescript</h2>
      </div>

      <AddTodo/>
      <DisplayTodoList />
    </div>
  );
}

export default App;
