import React from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {

  const todo = [
    {done: true, note: "Hi Hello", editState: false},
    {done: false, note: "No i cant do it now", editState: false},
    {done: false, note: "The World is so big that you will need a lot of money to complete one round around it. The World is so big that you will need a lot of money to complete one round around it.", editState: false}
  ]

  return (
    <div className="container">
      <div className="bd row">
        <h2 className="col-10">Todo</h2>
        <div className="col-2">
          <button><i className="material-icons">add</i></button>
        </div>
      </div>
      {todo.map(t =>
      <Todo {...t}/>)}
    </div>
    );
}

export default App;
