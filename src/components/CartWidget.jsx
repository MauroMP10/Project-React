import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart" style={{ width: 50 }} />
            <span style={{ color: 'black', fontWeight: 'bold' }}>(3)</span>
        </div>
    )
}

export default CartWidget
