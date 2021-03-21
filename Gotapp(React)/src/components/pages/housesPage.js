import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import styled from 'styled-components';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

const ErrorBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`;

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedHouse: null,
        showHousesList: true,
        showHouseDetails: true,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

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

        const { showHousesList, showHouseDetails } = this.state;

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => `${name}`}/>
        );

        const houseDetails = (
            <ItemDetails 
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse} >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        );

        const itemListBlock = showHousesList ?  itemList : null;
        const houseDetailsBlock = showHouseDetails ? houseDetails : null;
        
        if (this.state.error) {
            return (
                <Row>
                    <Col md='12'>
                        <ErrorBlock>
                            <ErrorMessage/>
                        </ErrorBlock>
                    </Col>
                </Row>
            )
        }

        return (
            <RowBlock 
            left={itemListBlock} 
            right={houseDetailsBlock} 
            itemListBtn={this.toggleBlock("showHousesList")} 
            detailsBtn={this.toggleBlock("showHouseDetails")}/>
        )
    }
}