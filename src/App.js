import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Heading from './components/Heading';

const App = () => {
  
  const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
    );

    const setLocalState = (localStorageKey, newValue) => {
      localStorage.setItem(localStorageKey, JSON.stringify(newValue));
      setValue(newValue);
    };
    return [value, setLocalState];
  };

  const [todos, setTodos] = useStateWithLocalStorage("allTodos", []);

  const deleteItem = key => {
    setTodos("allTodos", todos.filter(x => x.key !== key))
  };

  const toggleItemEdit = key => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if(item.key === key)
        item.editState = !item.editState;
      newTodos.push(item);
    }
    setTodos("allTodos", newTodos);
  }

  const toggleItemDone = key => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if(item.key === key)
        item.done = !item.done;
      newTodos.push(item);
    }
    setTodos("allTodos", newTodos);
  }

  const onItemNoteChangeHandler = (key, note) => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if(item.key === key)
        item.note = note;
      newTodos.push(item);
    }
    setTodos("allTodos", newTodos);
  }

  const addOnEnter = key => {
    if(key === todos[todos.length - 1].key)
      setTodos("allTodos", [...todos, {key: todos.pop().key+1,done: false, note: "", editState: false}]);
  }

  const addTodo = (k = 0) => {
    if(todos.length === 0)
      setTodos("allTodos", [{key: 1,done: false, note: "", editState: true}]);
    else
      setTodos("allTodos", [...todos, {key: todos.pop().key+1,done: false, note: "", editState: false}]);
  };

  const todoListProps = {todos, toggleItemDone, deleteItem, toggleItemEdit, addOnEnter, onItemNoteChangeHandler};

  return (
    <div className="container">
      <Heading addTodo={addTodo}/>
      <TodoList {...todoListProps} />
    </div>
    );
}

export default App;
