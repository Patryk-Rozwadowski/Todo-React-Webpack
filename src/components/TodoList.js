import React from 'react';

const TodoList = props =>
   <div>
        {props.data.map(el =>
            <div key={el.id}
                onClick={() => { props.removeTodo(el.id) }}>
                <p>{el.text}</p>
            </div>
        )}
    </div>



export default TodoList;