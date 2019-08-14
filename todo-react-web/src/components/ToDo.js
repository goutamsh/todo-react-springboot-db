import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.editToDoPopUpHandler = this.editToDoPopUpHandler.bind(this);
        this.editToDo = this.editToDo.bind(this);

        this.state = {show: false, todo:{}};

        this.handleClose = () => this.setState({show: false});
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.markAsDoneUndone = this.markAsDoneUndone.bind(this);
    }

    clearState(){
      this.setState({show: false, todo:{}});
    }
    handleShow(todoToBeEdited){
        console.log("handleShow called");
        this.setState({show: true, todo:todoToBeEdited});
    }
    

    editToDoPopUpHandler(eventKey, event, todo){
        console.log("editToDoPopUpHandler todo selected eventKey:"+eventKey);
        console.log("editToDoPopUpHandler todo selected event:"+event);
        console.log("editToDoPopUpHandler todo selected event:"+todo.id);
        //alert("Edit To DO selected ");
        this.handleShow(todo);
    }

    editToDo(){
      
      console.log("edit todo selected event:");
      //alert("Edit To DO selected ");
      this.handleClose();
      this.props.editToDo(this.state.todo);
      this.clearState();

  }

    
    deleteToDOHandler(eventKey, event, todo){
        console.log("deleteToDOHandler todo selected eventKey:"+eventKey);
        console.log("deleteToDOHandler todo selected event:"+event);
        console.log("deleteToDOHandler todo selected event:"+todo.id);
        //alert("Edit To DO selected ");
        this.props.deleteToDo(todo);
    }

    handleChange(event) {
      console.log("text changed");
      //this.setState({todo: {text:event.target.value}});
      let newText = event.target.value;
      this.setState(prevState => ({
        todo: {                   // object that we want to update
            ...prevState.todo,    // keep all other key-value pairs
            text: newText       // update the value of specific key
        }
    }));
  }

  markAsDoneUndone(todo, doneValue){
    console.log("markAsDoneUndone ::"+todo);
    console.log("markAsDoneUndone ::"+doneValue);
    todo.done = doneValue;
    this.props.editToDo(todo);
  }
    render(){
        return(
            <>
        <tr>
            <td>
                {this.props.todo.id}
            </td>
            <td>
              <p style={this.props.todo.done ? {textDecorationLine: 'line-through'}: {}}>
                  {this.props.todo.text}
              </p>
            </td>
            <td>
            <DropdownButton id="dropdown-basic-button" title="Action">
                    <Dropdown.Item eventKey="edit" onSelect={(eventKey, event) => this.editToDoPopUpHandler(eventKey, event, this.props.todo)}>Edit</Dropdown.Item>
                    {this.props.todo.done ?
                        <Dropdown.Item eventKey="markAsUnDone" onSelect={(eventKey, event) => this.markAsDoneUndone(this.props.todo, false)}>Mark As Un-done</Dropdown.Item>
                      :
                        <Dropdown.Item eventKey="markAsDone" onSelect={(eventKey, event) => this.markAsDoneUndone(this.props.todo, true)}>Mark As done</Dropdown.Item>
                    }                    
                    <Dropdown.Item eventKey="delete" onSelect={(eventKey, event) => this.deleteToDOHandler(eventKey, event, this.props.todo)}>Delete</Dropdown.Item>
            </DropdownButton>
            </td>
        </tr>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit ToDo</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>                
          <input type="text" value={this.state.todo.text} onChange={this.handleChange} />          
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.editToDo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        );
    }
}

export default ToDo;