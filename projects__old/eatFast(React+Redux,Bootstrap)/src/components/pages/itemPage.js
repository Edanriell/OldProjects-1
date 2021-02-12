import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import Error from '../error';
import { Link } from 'react-router-dom';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';

import './itemPage.css';



class ItemPage extends Component {

    componentDidMount() {
        if( this.props.menuItems.length === 0){
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
        }
    }

    render() {
        const {loading, error, menuItems} = this.props;
        if(error) {
            return (
                <div className = "item_page">
                    <Error/>
                </div>
            )
        }
        if(loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
        const item = menuItems.find(el => +el.id === +this.props.match.params.id)
        const{title, url, category, price, id, desc} = item;
        //console.log(this.props.menuItems)


        return (
            <div className="container">
                <div className = "item_page">
                    <div className="menu__item item_block">
                        <div className="card shadow-lg" style={{width: '80%', margin: '0 auto'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={url} alt={title} className="card-img"></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title display-4 text-dark">{title}</h5>
                                        <p className="card-text m-0 p-0" style={{fontSize: '20px'}}>Category: <span className="badge badge-primary">{category}</span></p>
                                        <p className="card-text" style={{fontSize: '20px'}}>Price: <span className="badge badge-info">${price}</span></p>
                                        <p className="card-text">{desc}</p>
                                        <div className="btn-group btn-group-lg">
                                        <button onClick = {()=>this.props.addedToCart(id)} className="menu__btn btn btn-outline-success">Add to cart</button>
                                        <Link to ={'/'} className="menu__btn btn btn-danger"><i className="fas fa-angle-double-left"></i> Go Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




const mapStateToProps =  (state) =>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}


const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}


export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );