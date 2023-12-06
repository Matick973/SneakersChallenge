import React, { useState } from "react"
import "../Styles/ModalBox.scss"

import LeftArrow from '../Images/icon-previous.svg'
import RightArrow from '../Images/icon-next.svg'

import image1 from "../Images/image-product-1.jpg"
import image2 from "../Images/image-product-2.jpg"
import image3 from "../Images/image-product-3.jpg"
import image4 from "../Images/image-product-4.jpg"

const ModalBox = (pictures) => {

    console.log('hello')
    const [zoomIn, setZoomIn] = useState(false)
    const [current, setCurrent] = useState(0)
    //const pictures = [image1, image2, image3, image4]
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
    
        <img src={pictures} aria-hidden alt="une image" onClick={toggleModal}/>

        {zoomIn ? (
            
                <div onClick={toggleModal} className="overlay">

                    <div className="left-arrow" onClick={previousSlide}>
                        <img src={LeftArrow} alt="Carrousel de pics de l'appartement"/>
                    </div>

                    <div className="right-arrow" onClick={nextSlide}>
                        <img src={RightArrow} alt="Carrousel de pics de l'appartement"/>
                    </div>

                    <form className="modal-content">

                        <span onClick={toggleModal} className="close-modal" title="Close Modal">&times;</span>

                        {pictures.map((slide , index) => {
                            return ( 
                        
                                <div className={index === current ? 'modal-slide active' : 'slide' } key={index} >

                                    {index === current && 
                                        <div style={{ backgroundImage: `url(${slide})` }} key={index} className='modal-pictures' alt="Carrousel de pics de l'appartement">
                                            
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


    )

};

export default ModalBox

//https://www.youtube.com/watch?v=SK9AlIbexOE&ab_channel=MonsterlessonsAcademy


/*<div className="container">
                        <img src={picture} aria-hidden alt="une image" id="modal-img"/>
                        </div>*/