import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/Slider.scss";
import ModalBox from "./ModalBox";
import image1 from "../Images/image-product-1.jpg"
import image2 from "../Images/image-product-2.jpg"
import image3 from "../Images/image-product-3.jpg"
import image4 from "../Images/image-product-4.jpg"


function slider () {
    return (

        <Carousel>

                    <div>
                        <img src={image1}  alt="chaussure vue de face" />
                    </div>
                    <div>
                        <img src={image2} alt="chaussure vue de derrière"/>
                    </div>
                    <div>
                        <img src={image3} alt="chaussure vue de côté"/>
                    </div>
                    <div>
                        <img src={image4} alt="chaussure vue de côté"/>
                    </div>

        </Carousel>


    )

}

export default slider

//onClick= {<ModalBox picture={image1}/>}