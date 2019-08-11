import React from 'react'
import ToDo from './ToDo';
import Table from 'react-bootstrap/Table';

class ToDoList extends React.Component{


    render(){
        const items = [];
        for (const todo of this.props.todolist){
            items.push(<ToDo key={todo.id} todo={todo} />)
        }
        return(
        <div>
            <Table striped borderless hover>
                <tbody>
                
                </tbody>
                    {items}
            </Table>
            
            
        </div>
        );
    }
}

export default ToDoList;