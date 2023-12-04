import React, { useState } from "react"
import "../Styles/ModalBox.scss"

const ModalBox = ({picture}) => {

    const [zoomIn, setZoomIn] = useState(false)

    const toggleModal = () => {
        setZoomIn(!zoomIn)
        console.log("zoomIn")
    }

    return (

    <>
    
        <img src={picture} aria-hidden alt="une image" onClick={toggleModal}/>

        {zoomIn ? (
            
                <div onClick={toggleModal} className="overlay">
                    <form className="modal-content">
                        <span onClick={toggleModal} className="close-modal" title="Close Modal">&times;</span>
                    
                        <div className="container">
                        <img src={picture} aria-hidden alt="une image" id="modal-img"/>
                        </div>

                    </form>
                </div>    
            
        ) : null}
    </>


    )

};

export default ModalBox