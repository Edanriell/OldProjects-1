import React, {useState, useEffect} from 'react';
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

function ItemDetails({itemId, getData, children}) { // everything from this.props destructure

    const [item, updateItems] = useState([])
    const [loading, updateLoading] = useState(true)
    const [error, updateError] = useState(false)

    useEffect(() => {
        updateItem()
    }, [itemId]) // Перезапускает функцию, только если itemId == [], [itemId]); В таком виде все работает как часы.


    function onItemDetailsLoaded() {
        updateLoading(false)
    }
    
    function onError(err) {
        updateItems([])
        updateLoading(false)
        updateError(true)
    }

    function updateItem() {

        if (!itemId) {
            return;
        }

        updateLoading(true)

        getData(itemId)
            .then((item) => {
                updateItems(item)
            })
            .then(onItemDetailsLoaded)
            .catch(onError);
    }


        const DetailsBlock = ({item}) => {
            const {name} = item;
        
            return (
                <>
                    <ItemName>{name}</ItemName>
                    <ListGroup flush>
                    {
                        React.Children.map(children, (child) => {
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

export default ItemDetails;



