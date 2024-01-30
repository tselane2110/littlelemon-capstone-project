import React from 'react';
import icon from '../../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';
import "./nav.css";
import cart_basket from "../../icons_assets/Basket.svg";

function Nav(){

    return (
        <div className='nav'>
            <div className='nav-size'>
                <Link to="/" className='nav-link'>
                    <img className='icon-logo logoStyle' src={icon} alt='icon'/>
                </Link>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/about" className='nav-link'>About</Link> 
                <Link to="/menu" className='nav-link'>Menu</Link>
                <Link to="/bookingPage" className='nav-link'>Reservations</Link>
                <Link to="/orderOnline" className='nav-link'>Order Online</Link>
                <Link to="/login" className='nav-link'>Login</Link>
                <Link className='nav-link' to="/cart">
                    <img src={cart_basket} alt='Cart' className='cart-img'></img>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
