import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
import {Col, Row, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
        
        <Row>
            <Col md='12'>
            <Link to="/books/"><Button color="secondary" size="lg" style={{margin:'0 0 20px 20px'}}>Go Back</Button></Link>
            <ItemDetails 
            itemId={this.props.bookId}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Total Pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
            </Col>
        </Row>
        )
    }
}


        