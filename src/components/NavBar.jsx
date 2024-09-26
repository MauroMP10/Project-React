import React from 'react'
import '../styles/navbar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#contact">Contáctanos</a></li>
            <li><a href="#abaut">Sobre Nosotros</a></li>
            <CartWidget/>
        </ul>
    )
}

export default NavBar