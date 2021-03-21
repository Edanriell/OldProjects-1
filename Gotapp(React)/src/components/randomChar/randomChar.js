import React, {useState, useEffect} from 'react';
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

function RandomChar() {

    const gotServices = new gotService();

    const [character, updateCharacter] = useState({})
    const [loading, updateLoading] = useState(true)
    const [error, updateError] = useState(false)

    function updateChar() {
        const id = Math.floor(Math.random()*140 + 25);
        gotServices.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError)
        // this.gotService.getCharacter(id)
        //     .then(this.onCharLoaded)
        //     .catch(this.onError);
    }

    useEffect(() => {
        updateChar();
        let timerId = setInterval(() => {
            updateChar(); 
        }, 10000)
        return () => {
            clearInterval(timerId);
        } 
    }, []);

    function onCharLoaded(char) {
        updateCharacter(char)
        updateLoading(false)
    }

    function onError(err) {
        updateError(true)
        updateLoading(false)
    }

    

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <SpinnerWrapper><Spinner/></SpinnerWrapper> : null;
        const content = !(loading || error) ? <View character={character}/> : null;

        return (
            <RandomCharBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
}

// RandomChar.defaultProps = {
//     interval: 15000
// } // also default props
// RandomChar.defaultProps = {
//     interval: 15000
// }

// RandomChar.propTypes = {
    // interval: (props, propName, componentName) => {
    //     const value = props[propName];

    //     if (typeof value === 'number' && isNaN(value)) {
    //         return null
    //     }
    //     return new TypeError(`${componentName}: ${propName} must be a number`)
    // } // without proptypes
    // interval: PropTypes.number // with prop types
// }

const View = ({character}) => {
    const {name, gender, born, died, culture} = character;
    
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

export default RandomChar;
