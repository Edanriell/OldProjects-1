import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL + './img/got.jpeg'} alt='error'></img> */}
            <img src={img} alt='error'></img>
            <span>WOOPS! Looks like we have some problems.</span>
            <br></br>
            <span>Don't worry we can handle this, come back later.</span>
        </>

    )
}

export default ErrorMessage;