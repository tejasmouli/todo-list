import React, { useState } from 'react';
import './Todo.css';
import './Done.css';

const Todo = props => {
    const [todoItem, setTodoItem] = useState(props ? props : {done: false, note: " ", editState: true})

    let rowsOfText = todoItem.note.length/40<1?1:todoItem.note.length/40;

    const toggleEdit = () => {setTodoItem({...todoItem, editState: !todoItem.editState})};

    const keyPress = event => {
        if (event.key === 'Enter')
            toggleEdit();
    }

    const onChangeHandler = event => {
        setTodoItem({...todoItem, note: event.target.value});
        rowsOfText = todoItem.note.length/40<1?1:todoItem.note.length/40;
    }

    const toggleDone = () => setTodoItem({...todoItem,done: !todoItem.done}) ;

    return (
        <div className="row">
            <div className="col-1 col-xs-1">
                <div className={todoItem.done?"box":"box checked"} onClick={toggleDone}></div>
            </div>
            <div className="col-9 col-xs-9">
                <textarea
                    rows={rowsOfText}
                    onKeyDown={keyPress}
                    onClick={toggleEdit}
                    onChange={onChangeHandler}
                    className={todoItem.done ? "strick":""}
                    value={todoItem.note} 
                    readOnly={!todoItem.editState}
                />
            </div>
            <div className="col-1 col-xs-1">
                <i className="material-icons">info_outlined</i>
            </div>
        </div>
    )
};

export default Todo;