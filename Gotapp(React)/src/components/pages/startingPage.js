import React, {Component} from 'react';
import {Jumbotron, Container} from 'reactstrap';


export default class StartingPage extends Component {

    render() {
        return (
            <div>
                <Jumbotron fluid style={{borderRadius: '5px', backgroundColor: '#fff'}}>
                    <Container fluid>
                    <h1 className="display-4">Welcome to GOT DB</h1>
                    <p className="lead">All the data from the universe of Ice And Fire you've ever wanted!</p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}


        