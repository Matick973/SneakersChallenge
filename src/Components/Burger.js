import React, { useEffect, useRef, useState } from "react"
import burger from '../Images/icon-menu.svg';

const Burger = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    let menuRef = useRef()

    useEffect (() => {
       
        let toggleOpenClose = (e) =>{

            if (!menuRef.current.contains(e.target)){
                setIsOpen(false)
            }    
        }    
        
        document.addEventListener('mousedown', toggleOpenClose) 
            
        return() =>{
            document.removeEventListener('mousedown', toggleOpenClose)
        }
      
    })

        return (<div ref={menuRef}>
         
            <nav className="burger-menu" >

                <div className="burger-icon" onClick={()=>setIsOpen(!isOpen)}>
                    <img src={burger} alt=""/>
                </div>

            </nav>

            <div className= {isOpen ? "dropdown-menu--active" : "dropdown-menu--inactive"}>

                
                <a href='#collection' className="nav-link-btn">
                    <p> Collection </p>
                </a>

                <a href='#men' className="nav-link-btn">
                    <p> Men </p>
                </a>

                <a href='#women' className="nav-link-btn">
                    <p> Women </p>
                </a>

                <a href='#about' className="nav-link-btn">
                    <p> About</p>
                </a>

                <a href='#contact' className="nav-link-btn">
                    <p> Contact</p>
                </a>

            </div>
        </div>
        )
}

export default Burger

//https://www.youtube.com/watch?v=HfZ7pdhS43s&ab_channel=TK