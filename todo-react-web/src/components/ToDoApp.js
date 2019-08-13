import React from 'react'
import Header from './Header';
import ToDoList from './ToDoList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddToDo from './AddToDo';

class ToDoApp extends React.Component {

    constructor(){
        super();
        this.state = {
            todos:[]
        }

        this.addToDoHandler = this.addToDoHandler.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.deleteToDoHandler = this.deleteToDoHandler.bind(this);
        this.editToDoHandler = this.editToDoHandler.bind(this);
    }

    addToDoHandler(newtodo){

        console.log("addToDoHandler "+newtodo);
        fetch('http://localhost:8080/api/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: newtodo.text,
                done: newtodo.done,
            })
            });
            
            this.fetchData();
    }

    deleteToDoHandler(todo){

        console.log("deleteToDoHandler "+todo);
        fetch('http://localhost:8080/api/todos/'+todo.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: todo.text,
                done: todo.done,
            })
            });
            
            this.fetchData();
    }

    editToDoHandler(todo){

        console.log("editToDoHandler "+todo);
        fetch('http://localhost:8080/api/todos/'+todo.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:todo.id,
                text: todo.text,
                done: todo.done,
            })
            });
            
            this.fetchData();
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){

        fetch('http://localhost:8080/api/todos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ todos: data })
        })
        .catch(console.log);
    }



    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <AddToDo addToDo={this.addToDoHandler} />
                </Row>
                <Row>
                    <ToDoList todolist={this.state.todos} deleteToDo={this.deleteToDoHandler} editToDo={this.editToDoHandler}/>
                </Row>
            </Container>
        );
    }
}

export default ToDoApp;