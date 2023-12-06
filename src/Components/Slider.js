import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/Slider.scss";
import "../Styles/ModalBox.scss"
//import ModalBox from "./ModalBox";
import image1 from "../Images/image-product-1.jpg"
import image2 from "../Images/image-product-2.jpg"
import image3 from "../Images/image-product-3.jpg"
import image4 from "../Images/image-product-4.jpg"

import PreviousIcon from '../Images/icon-previous.svg'
import NextIcon from '../Images/icon-next.svg'
import CloseIcon from '../Images/icon-close.svg'

function Slider () {

    const [zoomIn, setZoomIn] = useState(false)
    const [current, setCurrent] = useState(0)
    const pictures = [image1, image2, image3, image4]
    const length = pictures.length

    const toggleModal = () => {
        setZoomIn(!zoomIn)
        console.log("zoomIn")
    }
   
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1 )                   //Si current(0) égale longeur du tableau - 1 (fin du tableau) alors reset current à 0 mais avec + 1
        console.log(current)
    }
  
    const previousSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current -1 )                    // Si current égale à 0, alors -1 mais si -1 current = 0 + 1 sinon juste - 1. 
        console.log(current)
    }
  
    const goToSlide = (slideIndex) =>{
        setCurrent(slideIndex)                    // Si current égale à 0, alors -1 mais si -1 current = 0 + 1 sinon juste - 1. 
        console.log(current)
    }

 
    return (
    <>
        <Carousel onClickItem={toggleModal}>

                    <div>
                        <img src={image1}  alt="chaussure vue de face"/>
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
        <>

            {zoomIn ? (

            <div onClick={toggleModal} className="overlay">

            <div className="left-arrow" onClick={previousSlide}>
                <img src={PreviousIcon} alt="Carrousel de pics de l'appartement"/>
            </div>

            <div className="right-arrow" onClick={nextSlide}>
                <img src={NextIcon} alt="Carrousel de pics de l'appartement"/>
            </div>

            <div className="close-modal" title="Close Modal" onClick={toggleModal} >
                <img src={CloseIcon} alt="Carrousel de pics de l'appartement"/>
            </div>

            <form className="modal-content">

            

            {pictures.map((slide , index) => {
                return ( 

                    <div className={index === current ? 'modal-slide active' : 'slide' } key={index} >

                        {index === current && 
                            <div style={{ backgroundImage: `url(${slide})` }} key={index} className='modal-pictures' alt="">
                                {slide}


<div className='modal-dots-container'>
                                    {pictures.map((slide , slideIndex) => {
                                        return ( 
                                            <div className='modal-dot' key={slideIndex} alt={`${current}`/`${length}`} onClick={() => goToSlide(slideIndex)}>●</div>
                                        )     
                                    })}
                                </div>

                            </div>




                        }       
                    
                    </div>

                )     
            })}

            </form>
            </div>    

            ) : null}

        </>
    </>
    )

}

export default Slider

//onClick= {<ModalBox picture={image1}/>}

/*

                                



 */