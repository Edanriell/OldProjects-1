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

export default class CharacterPage extends Component {
    gotService = new gotService();

    state = {
        selectedChar: null,
        showItemList: true,
        showCharDetails: true,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
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

        const { showItemList, showCharDetails } = this.state;

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        );

        const charDetails = (
            <ItemDetails 
            itemId={this.state.selectedChar}
            getData={this.gotService.getCharacter} >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );

        const itemListBlock = showItemList ?  itemList : null;
        const charDetailsBlock = showCharDetails ? charDetails : null;
        
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
            right={charDetailsBlock} 
            itemListBtn={this.toggleBlock("showItemList")} 
            detailsBtn={this.toggleBlock("showCharDetails")}/>
        )
    }
}