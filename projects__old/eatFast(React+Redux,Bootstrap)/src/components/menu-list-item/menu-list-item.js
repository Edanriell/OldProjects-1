import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

// const getCategoryImg = (category) =>{
//     switch(category){
//         case
//     }
// }

const MenuListItem = ( {menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    
    return (
        <>
            <li className="menu__item col-md-4 col-lg-2 col-sm-6" style={{listStyleType: 'none'}}>
                <Link to = {`/${menuItem.id}`} style={{textDecoration: 'none'}}>
                    <div className="card shadow-sm">
                        <div className="wrapper">
                            <img src={url} alt={title} className="card-img-top img-fluid"></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-dark" src={url}>{title}</h5>
                            <p className="card-text text-secondary" src={url}>Price: <span className="badge badge-info">${price}</span></p>
                            <button onClick = {(e) => {
                            e.preventDefault();
                            onAddToCart();
                        } } 
                        className="btn btn-outline-success btn-lg btn-block shadow-sm">Add to cart</button>
                        </div>
                    </div>
                </Link>
            </li>

        </>
    )
}


export default MenuListItem;