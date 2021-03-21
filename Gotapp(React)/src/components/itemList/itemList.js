import React, {useState, useEffect} from 'react';
import './itemList.css';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

const ListBlock = styled.div `
    background-color: #fff;
    margin-bottom: 40px;
    border-radius: 5px;
`;

const SpinnerWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ItemList({getData, onItemSelected, renderItem }) {

    const [itemList, updateList] = useState([])
    const [loading, updateLoading] = useState(true)
    const [error, updateError] = useState(false)
  
    useEffect(() => {
        getData()
        .then( (data) => {
            updateList(data)
            updateLoading(true)
            updateError(false)
        })
        .then(onListLoaded)
        .catch(onError);
    }, []) // , [itemList] Проверяем на предедуший стейт если стейт НЕ изменился то ничего делать не будем работает только с примитивами, true false , string number
    // когда [] при воявлении и изчезновении

    function onListLoaded() {
        updateLoading(false)
        updateError(false)
    }

    function onError(err) {
            updateList([])
            updateLoading(false)
            updateError(true)
    }

    function renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            const label = renderItem(item);
            return (
                <ListGroupItem 
                className="pointer" 
                key={id}
                onClick={() => onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    const items = !(loading || error) ? renderItems(itemList) : null;

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <SpinnerWrapper><Spinner/></SpinnerWrapper> : null;
    const content = !(loading || error) ? items : null;

    return (
        <ListBlock>
            {errorMessage}
            {spinner} 
            {content}
        </ListBlock>
    );
   
}

export default ItemList;

// ItemList.defaultProps = {
//     onItemSelected: () => {}
// }

// ItemList.proptypes = {
//     onItemSelected: PropTypes.func,
//     getData: PropTypes.arrayOf(PropTypes.object)
// }

// ItemList.propTypes = {
//     getData: PropTypes.arrayOf(PropTypes.object)
// } // same as top

// const f = (a) => {
//     console.log(a);
//     return (b) => {
//         console.log(a + b)
//     }
// }

// f(1)(2);

// const f = () => {
//     return ItemList;
// }

// export default f();

// const f = () => {
//     return class extends Component {
//         componentDidMount() {
//             console.log(this.props)
//         }
//         render () {
//             // return <h1>Hi bruh</h1>
//             return <ItemList {...this.props}/>
//         }
//     }
// }

// export default f();

// const f = () => {
//     return class extends Component {
//         componentDidMount() {
//             console.log(this.props)
//         }
//         render () {
//             // return <h1>Hi bruh</h1>
//             return <ItemList {...this.props}/>
//         }
//     }
// }

// export default f();