import React from 'react';
import { connect } from 'react-redux';
import {deleteFromCart} from '../../actions';
import WithRestoService from '../hoc';

import './cart-table.scss';

const CartTable = ({items, deleteFromCart, RestoService}) => {
    if( items.length === 0){
        return (<div className="cart__title"> Your cart is empty. </div>)
    }
    return (
        <>
            <div className="cart__title">Your Orders:</div>
            <div className="cart__list">
            {
                items.map( item => {
                    const {price, title, url, id, qtty} = item;
                    return (
                        <div key = {id}>
                            <div className="card mb-4 shadow-lg cs">
                                <div className="card-body p-0">
                                    <div className="flexC">
                                    <img src={url} alt={title} className="card-img-top img-fluid wrapper2 fItem0"></img>
                                    <h5 className="card-title fItem1 display-4">{title}</h5>
                                    <p className="card-text fItem2 display-4">{price}$ * {qtty}</p>
                                    </div>
                                    <button onClick = {() => deleteFromCart(id)}className="cart__close btn btn-danger"><i className="fas fa-times fa-lg"></i></button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
            <button onClick = {() => {RestoService.setOrder( generateOrder(items))} } className = "order btn btn-lg btn-success">Proceed to checkout</button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

const mapStateToProps = ({items}) => {
    return{
        items 
    }
};

const mapDispatchToProps = {
    deleteFromCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));