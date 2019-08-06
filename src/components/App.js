import React from 'react';
import uuid from 'uuid';
import style from './App.css'
import Title from './Title';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="1. Zadanie"></Title>
                <Title title="2. Zadanie"></Title>
                <Title title="3. Zadanie"></Title>
                <Title title="4. Zadanie"></Title>
            </div>
        );
    }
}

export default App;