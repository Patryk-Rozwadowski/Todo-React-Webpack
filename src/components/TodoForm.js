import React from 'react';

const TodoForm = props => 
    <div>
        <form onSubmit={props.submit}>
            <input id='inputValue'></input>
        </form>
    </div>


export default TodoForm;