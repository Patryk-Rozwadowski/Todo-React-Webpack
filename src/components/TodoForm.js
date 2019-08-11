import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => 
    <div>
        <form onSubmit={props.submit}>
            <input placeholder={'Add to do!'} className={style.TodoForm} id='inputValue'></input>
        </form>
    </div>


export default TodoForm;