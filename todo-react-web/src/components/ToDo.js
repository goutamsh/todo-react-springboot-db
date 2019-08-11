import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

class ToDo extends React.Component{


    render(){
        return(
        <tr>
            <td>
                {this.props.todo.id}
            </td>
            <td>
                {this.props.todo.text}
            </td>
            <td>
            <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Acton
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Mark As done</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
        );
    }
}

export default ToDo;