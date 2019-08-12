import React from 'react';
import useState from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.editToDOHandler = this.editToDOHandler.bind(this);

        this.state = {show: false};

        this.handleClose = () => this.setState({show: false});
    this.handleShow = this.handleShow.bind(this);
    }

    handleShow(){
        console.log("handleShow called");
        this.setState({show: true});
    }
    

    editToDOHandler(eventKey, event, todo){
        console.log("edit todo selected eventKey:"+eventKey);
        console.log("edit todo selected event:"+event);
        console.log("edit todo selected event:"+todo.id);
        alert("Edit To DO selected ");
        this.handleShow();
    }

    deleteToDOHandler(eventKey, event, todo){
        console.log("edit todo selected eventKey:"+eventKey);
        console.log("edit todo selected event:"+event);
        console.log("edit todo selected event:"+todo.id);
        alert("Edit To DO selected ");
        this.props.deleteToDo(todo);
    }

    render(){
        return(
            <>
        <tr>
            <td>
                {this.props.todo.id}
            </td>
            <td>
                {this.props.todo.text}
            </td>
            <td>
            <DropdownButton id="dropdown-basic-button" title="Action">
                    <Dropdown.Item eventKey="edit" onSelect={(eventKey, event) => this.editToDOHandler(eventKey, event, this.props.todo)}>Edit</Dropdown.Item>
                    <Dropdown.Item eventKey="markAsDone">Mark As done</Dropdown.Item>
                    <Dropdown.Item eventKey="delete" onSelect={(eventKey, event) => this.deleteToDOHandler(eventKey, event, this.props.todo)}>Delete</Dropdown.Item>
            </DropdownButton>
            </td>
        </tr>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        );
    }
}

export default ToDo;