import React from 'react'
import Button from 'react-bootstrap/Button'

class AddToDo extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            todotext:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("text changed");
        this.setState({todotext: event.target.value});
    }
    
    clearState(){
        this.setState({todotext:''});
    }
    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.todotext);
    
        const newtodo = {
            text: this.state.todotext,
            done: false
        };

        this.props.addToDo(newtodo);
        this.clearState();
        event.preventDefault();
            
            
    }

    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    
                    <input type="text" value={this.state.todotext} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Add ToDo"  />
            </form>
                
            </>
            
        );
    }
}

export default AddToDo;