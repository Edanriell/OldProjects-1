import React from 'react';
import {connect} from 'react-redux';
// import {inc, dec, rndPos, rndNeg, reset} from '../actions';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rndPos, rndNeg, reset}) => {
    return (
    <div className="container">
        <div className="centerItems">
          <div className="d-flex justify-content-center">
            <div className="card text-white bg-dark shadow-lg p-3 mb-5 rounded" style={{width: '380px', height: '346px'}}>
              <div className="card-body">
                <h1 className="centerItems">{counter}</h1>
              </div>
            </div>
            <div className="d-flex flex-column bd-highlight m-1 btns">
              <button onClick={inc} className="btn btn-4"><span>+</span></button> 
              <button onClick={dec} className="btn btn-4"><span>-</span></button> 
              <button onClick={rndPos} className="btn btn-4"><span>Random+</span></button> 
              <button onClick={rndNeg} className="btn btn-4"><span>Random-</span></button> 
            </div>
          </div>
          <div className="d-flex justify-content-center flex-row m-1">
            <button onClick={reset} className="btn btn-5 clearBtn" id="clear">clear</button> 
          </div>
        </div>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
  // return {
  //   inc: () => dispatch(inc()),
  //   dec: () => dispatch(dec()),
  //   rndPos: () => {
  //     const value = Math.floor(Math.random() *10);
  //     dispatch(rndPos(value))
  //   },
  //   rndNeg: () => {
  //     const value = Math.floor(Math.random() * -10);
  //     dispatch(rndNeg(value))
  //   },
  //   reset: () => dispatch(reset())
  // }
// }

export default connect(mapStateToProps, actions)(Counter);