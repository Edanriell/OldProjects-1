import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppHeader = ({totalPrice}) => {

    return (
        <header className="header">
            <nav className="navbar fixed-top navbar-light bg-light shadow-lg">
            <a className="navbar-brand"><i className="fas fa-utensils header__cart"></i>eatFast</a>
            <form className="form-inline">
            <Link to ={'/'} className = "header__link text-dark" style={{textDecoration: 'none'}}>Menu</Link>
            <Link to = "/cart" className = "header__link text-success" style={{textDecoration: 'none'}}>
                <i className="fas fa-shopping-cart header__cart"></i>
                Total: {totalPrice} $
            </Link>
            </form>
            </nav>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return{
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);