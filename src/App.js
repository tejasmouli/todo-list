import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {
  const [addItem, setAddItem] = useState(false);
  const todo = [
    {done: true, note: "Hi Hello", editState: false},
    {done: false, note: "No i cant do it now", editState: false},
    {done: false, note: "The World is so big that you will need a lot of money to complete one round around it. The World is so big that you will need a lot of money to complete one round around it.", editState: false},
    {done: false, note: "No i cant do it now", editState: false},
  ]

  return (
    <div className="container">
      <div className="bd row">
        <div className="col-10">
          <h2>Todo</h2>
        </div>
        <div className="col-2">
          <button><i className="material-icons">add</i></button>
        </div>
      </div>
      {todo.map(t =>
      <Todo {...t}/>
      )}
      <input type="text"/>
    </div>
    );
}

export default App;
