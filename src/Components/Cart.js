import React from "react";
import { useEffect, useState, useRef } from "react";
import { GetLocalStorage } from "./LocalStorageMng";
import { RemoveLocalStorage } from "./LocalStorageMng";
import CartIcon from '../Images/icon-cart.svg';
import DeleteIcon from "../Images/icon-delete.svg"
import Image1 from '../Images/image-product-1-thumbnail.jpg'
import '../Styles/Navbar.scss';

const Cart = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ isEmpty, setIsEmpty ] = useState(true)
    const [ product, setProduct ] = useState([])

    let cartRef = useRef()
    let initialPrice = 125

    function fetchLS (localData) {
        localData = GetLocalStorage('Product')
        
        if(localData){
            setProduct(localData)
            setIsEmpty(false)
        }else{
            setIsEmpty(true)
            setProduct([])
            console.log("panier vide")
        }
    }


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
            <div className="displayInCart"></div>
            <div className="cart-modal" >
                
                <div className="cart-logo" onClick={(e) => {e.preventDefault(); fetchLS(); setIsOpen(!isOpen)}}>
                    <img src={CartIcon} alt="Cart"/>
                </div>

            </div>

            <div className= {isOpen ? "dropdown-cart--active" : "dropdown-cart--inactive"}>
                <h3>
                    Cart
                </h3>
                <div className="grey-line"></div>

                {isEmpty === true ? (
            
                <div className="cart-container">
                    <p>Your cart is empty.</p>
                </div>    
        
                ) : 
                
                <div className="cart-container">
                    <div className="cart-product">
                        <div className="picture-product">
                            <img src={Image1} alt="sneaker"/>
                        </div>  

                        <div className="details-product">
                            <div className="product-name"><p>{product.name}</p></div>
                            <div className="prices">
                               <div className="product-initial-price">${initialPrice}</div> 
                               <div className="product-quantity"><p>{product.quantity}</p></div> 
                               <div className="product-total-price">${Number(initialPrice)*product.quantity}</div> 
                            </div>
                            
                        </div>   

                        <div className="bin-icon" onClick={(e) => {e.preventDefault(); RemoveLocalStorage(); setIsEmpty(true); setIsOpen(false)}}>
                            <img src={DeleteIcon} alt="bin delete remove icon"/>
                        </div>     
                    </div>

                    <div className="Btn CheckoutBtn">
                            <div><p>Checkout</p></div>
                    </div>
                </div>

                }


            </div>

        </div>
        )
}

export default Cart