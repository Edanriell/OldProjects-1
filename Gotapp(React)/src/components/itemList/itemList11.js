import React, {Component} from 'react';
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
export default class ItemList extends Component {

    state = {
        itemList: null,
        loading: true,
        error: false
    }
    // static proptypes = {
    //     onItemSelected: PropTypes.func
    // }
    
    // static propTypes = {
    //     getData: PropTypes.arrayOf(PropTypes.object)
    // } // same as below
    

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList,
                    loading: true,
                    error: false
                });
            })
            .then(this.onListLoaded)
            .catch(this.onError);
    }

    onListLoaded = () => {
        this.setState({
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            itemList: null,
            loading: false,
            error: true,
        })
    }

    renderItems = (arr) => {
        return arr.map((item) => {
            const {id, name} = item;
            const label = this.props.renderItem(item);
            return (
                <ListGroupItem 
                className="pointer" 
                key={id}
                onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {

        const {itemList, loading, error} = this.state;

        const items = !(loading || error) ? this.renderItems(itemList) : null;

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
}

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