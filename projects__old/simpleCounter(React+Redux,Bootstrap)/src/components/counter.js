import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="content">
            <div className="counter-wrap">
                <h1 id="counter">{counter}</h1>
            </div>
            <div className="btn-block ">
                <button onClick = {inc} className="btn btn-success ">
                    
                <i className="fas fa-plus fa-3x "></i>
                </button>
                <button onClick = {dec} className="btn btn-warning">
                    <i className="fas fa-minus fa-3x"></i>
                </button>
                <button onClick = {res} className="btn btn-danger">
                <i className="fas fa-sync-alt fa-3x"></i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);
