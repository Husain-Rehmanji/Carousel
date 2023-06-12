import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
     <Head/> 
     <header>
        <nav className='flexSB'>
            <ul className= { click ? "mobile-nav" : "flexSB" } onClick={ () => setClick(false) } >
                <li><Link to="/"> HOME </Link></li>
                <li><Link to="/about"> ABOUT </Link></li>
                <li><Link to="/courses"> COURSES </Link></li>
                <li><Link to="/projects"> PROJECTS </Link></li>
                <li><Link to="/blog"> BLOG </Link></li>
                <li><Link to="/events"> TEAM EVENTS </Link></li>
                <li><Link to="/faqs"> FAQS </Link></li>
                <li><Link to="/review"> REVIEWS </Link></li>
                <li><Link to="/contact"> CONTACT </Link></li>
            </ul>

            <div className='start'>
                <div className="button">GET A QUOTE</div>
            </div>
            <button className='toggle' onClick={ () => setClick(!click) } >
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
     </header>
    </>
  )
}

export default Header
