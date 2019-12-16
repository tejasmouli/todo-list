import React from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-10">Todo</h1>
        <div className="col-2">
          <button><i className="material-icons">add</i></button>
        </div>
      </div>
      <Todo />
    </div>
    );
}

export default App;
