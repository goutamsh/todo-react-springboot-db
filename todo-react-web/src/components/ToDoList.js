import React from 'react'
import ToDo from './ToDo';
import Table from 'react-bootstrap/Table';

class ToDoList extends React.Component{
    render(){
        const items = [];
        for (const todo of this.props.todolist){
            items.push(<ToDo key={todo.id} todo={todo} deleteToDo={this.props.deleteToDo} editToDo={this.props.editToDo}/>)
        }
        return(
        <div>
            <Table striped borderless hover>
                <tbody>
                    {items}
                </tbody>                    
            </Table>
            
            
        </div>
        );
    }
}

export default ToDoList;