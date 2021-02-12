import React from 'react';
import CartTable from '../cart-table';
import './itemPage.css'

const CartPage = () => {
    return (
        <div className="container">
            <div className="cart"> 
                <CartTable/>
            </div>
        </div>
    )
}

export default CartPage;