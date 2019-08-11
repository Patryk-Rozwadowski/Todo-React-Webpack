
import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: uuid.v4(),
                text: 'clean room'
            }, {
                id: uuid.v4(),
                text: 'wash the dishes'
            }, {
                id: uuid.v4(),
                text: 'feed my cat'
            }],
            newTasks: []
        };
    }

    addTodo = val => {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }

    removeTodo = id =>{
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    addTodo = e => {
        e.preventDefault();

        const newTask = { id: uuid.v4(), text: document.getElementById('inputValue').value}
        console.log(newTask)

        this.setState({
            data: [...this.state.data, newTask]
        })
    }

    resetInput = e => {
        e.preventDefault();
        e.target.reset();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.addTodo(e);
        this.resetInput(e);
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={'Things to do: '} taskNumber={this.state.data.length}/>
                {this.state.data == 0 && <Todo text='Nothing to do!'/>}
                <TodoList removeTodo={this.removeTodo} data={this.state.data} />
                <TodoForm submit={this.handleSubmit}></TodoForm>
            </div>
        );
    }
}

export default hot(module)(App);