import React from 'react';
import style from './Todo.css';

const Todo = props => <p className={style.Todo} onClick={props.remove}>{props.text}</p>;

export default Todo;