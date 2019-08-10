import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = props =>
    <div className={style.TodoList}>
        {props.data.map(el =>
            <Todo key={el.id}
                text={el.text}
                remove={() => { props.removeTodo(el.id) }} />
        )}
    </div>
    
export default TodoList;