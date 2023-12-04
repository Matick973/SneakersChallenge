import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/logo.svg';
import UserAvatar from '../Images/image-avatar.png';
import Burger from "./Burger";
import '../Styles/Navbar.scss';
import Cart from "./Cart";


const Navbar = () => {
    
    
    return(
        <>
        <div className="header-container">

            <div className="header-left">
                <Burger/>
                <div className="logo">
                    <img src={Logo} alt="logo du site"/>
                </div>
                
                <nav className="navbar-container">
                    <ul>

                        <li><Link to="/collection" >Collection</Link></li>
                        <li><Link to="/men" >Men</Link></li>
                        <li><Link to="/women" >Women</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>


                    </ul>
                </nav> 
            </div>

            <div className="header-right">
                <div className="cart-logo">
                    <Cart/>
                </div>

                <div className="avatar-container">
                    <img src={UserAvatar} alt="Avatar of User"/>
                </div>
            </div>

        </div>

        <div className="grey-line"></div>

        </>
    )


}

export default Navbar;