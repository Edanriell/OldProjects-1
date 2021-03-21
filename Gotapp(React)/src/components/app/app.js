import React, {Component} from 'react';
import {Col, Row, Container, Button, Card} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem, StartingPage, NotFound} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ItemList from '../itemList';
import CharDetails from '../itemDetails';
import gotService from '../../services/gotService';

import './app.css';

export default class App extends Component {

    gotService = new gotService();

        state = {
            showRandomBlock: true,
            error: false,
        };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleBlock = (blockName) => () => {
        this.setState((state) => {
            return {
                [blockName] : !state[blockName]
            }
        });
    }

    render() {

        if (this.state.error) {
            return (
                <Container>
                    <Row>
                        <Col lg={{size: 10, offset: 2}}>
                            <Card style={{marginTop: '4%'}}>
                                <ErrorMessage/>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                )
        }

        const { showRandomBlock } = this.state;
        // const randomBlock = showRandomBlock ? <RandomChar interval={15000}/> : null; // going to randomchar
        const randomBlock = showRandomBlock ? <RandomChar/> : null;
        
        return (
            <Router>
                <div className="app"> 
                <Container>
                    <Header />
                </Container>
                <Container>

                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button 
                            style={{margin: '20px'}}
                            color="primary" 
                            size="md"
                            onClick={this.toggleBlock("showRandomBlock")}
                            >Random Character</Button>
                        </Col>
                    </Row>
                
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomBlock}
                        </Col>
                    </Row>
                    <Switch>
                        <Route path='/' exact={true} component={StartingPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact={true} component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match, location, history}) => {
                                const {id} = match.params;
                            return <BooksItem bookId={id}/>
                        }
                        }/>
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </div>
            </Router>
        );
    }
}
