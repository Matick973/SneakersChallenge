import React from "react";
import { useState, useRef } from "react";
import { GetLocalStorage } from "./LocalStorageMng";
import { SetLocalStorage } from "./LocalStorageMng";
import cartIcon from "../Images/icon-cart.svg"
import minusbtn from "../Images/icon-minus.svg"
import plusbtn from "../Images/icon-plus.svg"

function AddToCart () {

    const [inputValue, setInputValue] = useState(0);

    const inputValueRef = useRef(inputValue);

    const currentValue = (data) => {
        inputValueRef.current = data;
        if (data >= 0)
        setInputValue(data)
        else 
        console.log("valeur incorrecte")
    }

    function fetchLS (localData) {
        const displayQte = document.querySelector(".displayInCart");
        localData = GetLocalStorage('Product')
        
        if(localData){          
            displayQte.innerHTML = localData.quantity
            console.log(localData.quantity)
        }else{
         
            console.log("panier vide")
        }
    }

    return(
        <>
        <span>

            <button id="minus" onClick={(e) => {currentValue(inputValue - 1); e.preventDefault()}}>
                <img src={minusbtn}/>
            </button>

            <div>{JSON.parse(inputValue)}</div>
            
            <button id="plus" onClick={(e) => {currentValue(inputValue + 1); e.preventDefault()}}>
                <img src={plusbtn}/>
            </button>

        </span>    

            <div className="addToCart-container" onClick={(e) => {e.preventDefault(); SetLocalStorage(inputValue); fetchLS()}}>
                <span className="addToCart-logo">
                    <img src={cartIcon} alt="cart icon"/>
                </span>

                <span className="addToCart-text">       
                    <div className="Btn addToCartBtn">
                        Add to cart
                    </div>
                </span>
            </div>

        </>
    )

}

export default AddToCart