import React from 'react';

const Heading = props => (<div className="bd row">
    <div className="col-10">
    <h2>Todo</h2>
    </div>
    <div className="col-2">
    <button onClick={props.addTodo}><i className="material-icons">add</i></button>
    </div>
</div>)

export default Heading;