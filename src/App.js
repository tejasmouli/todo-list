import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {
  // const [addItem, setAddItem] = useState(false);
  const todo = [
    {key:1, done: true, note: "Hi Hello", editState: false},
    {key:2, done: false, note: "No i cant do it now", editState: false},
    {key:3, done: false, note: "The World is so big that you will need a lot of money to complete one round around it. The World is so big that you will need a lot of money to complete one round around it.", editState: false},
    {key:4, done: false, note: "No i cant do it now", editState: false}
  ]

  const [todos, setTodos] = useState(todo);

  const deleteItem = key => {
    setTodos(todos.filter(x => x.key !== key))
  };

  const toggleItemEdit = key => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if(item.key === key)
        item.editState = !item.editState;
      newTodos.push(item);
    }
    setTodos(newTodos);
  }

  const toggleItemDone = key => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if(item.key === key)
        item.done = !item.done;
      newTodos.push(item);
    }
    setTodos(newTodos);
  }

  const onItemNoteChangeHandler = (key, note) => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if(item.key === key)
        item.note = note;
      newTodos.push(item);
    }
    setTodos(newTodos);
  }

  const addTodo = () => {
    if(todos.length === 0)
      setTodos([{key: 1,done: false, note: "", editState: false}]);
    else
      setTodos([...todos, {key: todos.pop().key+1,done: false, note: "", editState: false}]);
  };

  return (
    <div className="container">
      <div className="bd row">
        <div className="col-10">
          <h2>Todo</h2>
        </div>
        <div className="col-2">
          <button onClick={addTodo}><i className="material-icons">add</i></button>
        </div>
      </div>
      {todos.map(t => 
        <Todo
          key={t.key}
          item = {t}
          toggleEdit={toggleItemEdit}
          toggleDone={toggleItemDone}
          onNoteChangeHandler={onItemNoteChangeHandler}
          removeThis = {deleteItem}
        />
      )}
    </div>
    );
}

export default App;
