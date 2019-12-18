import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return props.todos.map(t => 
        <Todo
            key={t.key}
            item = {t}
            toggleEdit={props.toggleItemEdit}
            toggleDone={props.toggleItemDone}
            onNoteChangeHandler={props.onItemNoteChangeHandler}
            removeThis = {props.deleteItem}
            addNextItem = {props.addOnEnter}
        />
  )}

export default TodoList;