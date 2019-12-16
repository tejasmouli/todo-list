import React, { useState } from 'react';
import './Todo.css';
import Done from './Done'

const Todo = props => {
    const [todoItem, setTodoItem] = useState(props ? props : {done: false, note: "", editState: true})
    // const item = {done:true,note:"Hi hello Good morning",editState:false}

    const toggleEdit = () => {setTodoItem({...todoItem, editState: !todoItem.editState})};

    const keyPress = event => {
        if (event.key === 'Enter')
            toggleEdit();
    }

    const onChangeHandler = event => {
        setTodoItem({...todoItem, note: event.target.value})
    }

    const toggleDone = () => setTodoItem({...todoItem,done: !todoItem.done}) ;

    return (
        <div className="row">
            <Done markDone={toggleDone} className="col-1" checked={!todoItem.done}/>
            <input
                onKeyDown={keyPress}
                onClick={toggleEdit}
                onChange={onChangeHandler}
                className={todoItem.done ? "col-10 strick":"col-10"}
                type="text"
                value={todoItem.note}
                readOnly={!todoItem.editState}
            />
            <i className="material-icons">info_outlined</i>
        </div>
    )
};

export default Todo;