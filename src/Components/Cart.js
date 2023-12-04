import React from "react";
import { useEffect, useState, useRef } from "react";
import { GetLocalStorage } from "./LocalStorageMng";
import { RemoveLocalStorage } from "./LocalStorageMng";
import CartIcon from '../Images/icon-cart.svg';
import deleteIcon from "../Images/icon-delete.svg"
import '../Styles/Navbar.scss';

const Cart = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    let cartRef = useRef()

    useEffect (() => {
       
        let toggleOpenClose = (e) =>{

            if (!cartRef.current.contains(e.target)){
                setIsOpen(false)
            }    
        }    
        
        document.addEventListener('mousedown', toggleOpenClose) 
            
        return() =>{

            document.removeEventListener('mousedown', toggleOpenClose)
        }
      
    })

        return (
        
        <div ref={cartRef}>
         
            <div className="cart-modal" >

                <div className="cart-logo" onClick={(e) => {e.preventDefault(); GetLocalStorage(); setIsOpen(!isOpen)}}>
                    <img src={CartIcon} alt="Cart"/>
                </div>

            </div>

            <div className= {isOpen ? "dropdown-cart--active" : "dropdown-cart--inactive"}>
                <h3>
                    Cart
                </h3>
                <div className="grey-line"></div>

                {isEmpty ? (
            
                <div className="">
                    <p> Your cart is empty.</p>
                </div>    
        
                ) : 
                
                <div onClick={toggleModal} className="overlay">
                <form className="modal-content">
                    <span onClick={toggleModal} className="close-modal" title="Close Modal">&times;</span>
                
                    <div className="container">
                    <img src={picture} aria-hidden alt="une image" id="modal-img"/>
                    </div>

                </form>
                </div>

                }


            </div>

        </div>
        )
}

export default Cart