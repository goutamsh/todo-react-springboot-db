import React from 'react'

class ToDo extends React.Component{


    render(){
        return(
        <div>
            {this.props.todo.id}  {this.props.todo.text} {this.props.todo.isDone}
        </div>
        );
    }
}

export default ToDo;