import React from 'react'
import ToDo from './ToDo';

class ToDoList extends React.Component{


    render(){
        const items = [];
        for (const todo of this.props.todolist){
            items.push(<ToDo key={todo.id} todo={todo} />)
        }
        return(
        <div>
            To Do List
            {items}
            
        </div>
        );
    }
}

export default ToDoList;