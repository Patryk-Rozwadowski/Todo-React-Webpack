
import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import { hot } from 'react-hot-loader'

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
                <Title title="23gdgdgdfgggs. Zaoytoyudanie"></Title>
                <Title title="34. Zadanie"></Title>
                <Title title="45. Zadanie"></Title>
            </div>
        );
    }
}

export default hot(module)(App);