import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'reactstrap';


const NotFound = () => (
    <div>
    <Jumbotron fluid style={{backgroundColor: '#fff', borderRadius: '5px'}}>
      <Container fluid>
        <h1 className="display-4">Sorry</h1>
        <p className="lead">Looks like page that you are looking for doesen't exist</p>
        <Link to="/"><Button color="danger" size="lg">Return to Home Page</Button></Link>
      </Container>
    </Jumbotron>
  </div>
);

export default NotFound;

