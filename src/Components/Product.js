import React from "react";
import Slider from "./Slider";
import AddToCart from "./AddToCart";
import "../Styles/Product.scss";

const Product = () => {
    
    
    return(
        <>
            <div className="product-container">

                <div className="product-picture">
                    <Slider/>
                </div>


                <div className="product-infos">
                    <div className="product-title"><h1>Sneaker Company</h1></div>
                    <div className="slogan"><h2>Fall Limited Edition Sneakers</h2></div>
                    <div className="product-description"><p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p></div>
                    <div className="price-container">
                        <div className="product-price">
                            <div className="product-new-price">$125.00</div>
                            <div className="product-discount">50%</div>
                        </div>
                        <div className="product-old-price">$250.00</div>
                    </div>

                    <div className="choice-container">
                    <AddToCart/>
                </div>

                </div>

            </div>
        </>
    )


}

export default Product;