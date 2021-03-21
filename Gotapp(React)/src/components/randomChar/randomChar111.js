import React, {Component} from 'react';
import styled from 'styled-components'
import { ListGroup, ListGroupItem } from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

const RandomCharBlock = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 5px;
`;

const RandomCharName = styled.h4 `
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

export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }
    // static defaultProps = {
    // interval: 15000
    // } // also default props

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25);
        // const id = 13000000; // TEST
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <SpinnerWrapper><Spinner/></SpinnerWrapper> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomCharBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
    }
}

// RandomChar.defaultProps = {
//     interval: 15000
// } // also default props
RandomChar.defaultProps = {
    interval: 15000
}

RandomChar.propTypes = {
    // interval: (props, propName, componentName) => {
    //     const value = props[propName];

    //     if (typeof value === 'number' && isNaN(value)) {
    //         return null
    //     }
    //     return new TypeError(`${componentName}: ${propName} must be a number`)
    // } // without proptypes
    interval: PropTypes.number // with prop types
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    
    return (
        <>
            <RandomCharName>Random Character: {name}</RandomCharName>
            <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
