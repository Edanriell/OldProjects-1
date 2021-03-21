import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import './itemDetails.css';

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`;

const ItemName = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const Term = styled.span `
    font-weight: bold;
`;

const SpinnerWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = () => {
        this.setState({
            loading: false
        })
    }
    
    onError = (err) => {
        this.setState({
            item: null,
            error: true,
            loading: false
        })
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
            .then(this.onItemDetailsLoaded)
            .catch(this.onError);

    }

    render() {

        // if(!this.state.char) {
        //     return <span className='select-error'>Please select a character</span>
        // }

        const { item, loading, error } = this.state;

        const DetailsBlock = ({item}) => {
            const {name} = item;
        
            return (
                <>
                    <ItemName>{name}</ItemName>
                    <ListGroup flush>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                    </ListGroup>
                </>
            )
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <SpinnerWrapper><Spinner/></SpinnerWrapper> : null;
        const content = !(loading || error) ? <DetailsBlock item={item}/> : null;
        
        return (
            <ItemDetailsBlock>
                {errorMessage}
                {spinner}
                {content}
            </ItemDetailsBlock>
        );
    }
}




