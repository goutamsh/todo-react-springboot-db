import React from 'react'
import Header from './Header';
import ToDoList from './ToDoList';


class ToDoApp extends React.Component {

    constructor(){
        super();
        this.state = {
            todos:[]
        }
    }

    componentDidMount(){
        const temptodo = [];
        const todo1 = {
            id: 1,
            text: "todoText1",
            isDone:false
        };

        temptodo.push(todo1);

        const todo2 = {
            id: 2,
            text: "todoText2",
            isDone:false
        };

        temptodo.push(todo2)
        this.setState({todos: temptodo});
    }

    render() {
        return (
            <div>
                <Header />
                <ToDoList todolist={this.state.todos}/>
            </div>
        );
    }
}

export default ToDoApp;