import React from 'react';
import './Todo.css';

const Todo = props => {

    const toggleEdit = () => {props.toggleEdit(props.item.key)};

    const keyPress = event => {
        if (event.key === 'Enter')
            toggleEdit();
    }

    const onChangeHandler = event => {
        props.onNoteChangeHandler(props.item.key, event.target.value);
    }

    const deleteItem = () => props.removeThis(props.item.key);

    const toggleDone = () => props.toggleDone(props.item.key);

    return (
        <div className="row">
            <div className="col-1 col-xs-1">
                <div className={props.item.done?"box":"box checked"} onClick={toggleDone}></div>
            </div>
            <div className="col-9 bl col-xs-9">
                {props.item.editState
                ?<input
                    autoFocus
                    onBlur={toggleEdit}
                    onKeyDown={keyPress}
                    onChange={onChangeHandler}
                    className={props.item.done ? "strick":""}
                    value={props.item.note}
                />
                :<div className={props.item.done ? "note strick":"note"} onClick={toggleEdit}>{props.item.note}</div>}
            </div>
            <div className="col-1 col-xs-1">
                <i onClick={deleteItem} className="material-icons">close</i>
            </div>
        </div>
    )
};

export default Todo;