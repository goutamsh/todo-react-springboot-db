import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends React.Component{

    render(){
        return(
            <Jumbotron >
                <h1>To Do Application</h1>
            </Jumbotron>        
        );
    }
}

export default Header;