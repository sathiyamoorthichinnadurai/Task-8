import React from 'react'
import "./Naav.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <header>
        <div className="logo">
           <a href="">HAPPY TOURS</a> 
        </div>
        <div className="display-menu">
            <Link className='menu' to={"/Home"}>HOME</Link>
            <Link className='menu' to={"/About"}>ABOUT</Link>
            <Link className='menu' to={"/Contact"}>CONTACT</Link>

        </div>
    </header>
    
    </>
  )
}

export default Navbar