import React from 'react';
import './Todo.css';
import Done from './Done'

const Todo = props => {
    const item = {done:true,note:"Hi hello Good morning",editState:false}
    return (
        <div className="container">
            <div className="row">
                <Done className="col-1" checked={item.done}/>
                <div className="col-10">{item.note}</div>
                <div className="edit">
                    <i className="material-icons">edit</i>
                </div>
            </div>
        </div>
    )
};

export default Todo;