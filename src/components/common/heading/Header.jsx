import React, { useState } from 'react';
import Head from './Head';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setClick(false);
  };

  return (
    <>
    <div className='fixed-header-container'>
   
      <header>
        <nav className='flexSB'>
          <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={handleMenuClick}>
            <li>
              <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                HOME
              </Link>
            </li>
            <li>
              <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to='/courses' className={location.pathname === '/courses' ? 'active' : ''}>
                COURSES
              </Link>
            </li>
            <li>
              <Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to='/blog' className={location.pathname === '/blog' ? 'active' : ''}>
                BLOG
              </Link>
            </li>
            <li>
              <Link to='/events' className={location.pathname === '/events' ? 'active' : ''}>
                TEAM EVENTS
              </Link>
            </li>
            <li>
              <Link to='/faqs' className={location.pathname === '/faqs' ? 'active' : ''}>
                FAQS
              </Link>
            </li>
            <li>
              <Link to='/review' className={location.pathname === '/review' ? 'active' : ''}>
                REVIEWS
              </Link>
            </li>
            <li>
              <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>
                CONTACT
              </Link>
            </li>
          </ul>

          <div className='start'>
            <div className='button'>GET A QUOTE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      </div>
    </>
  );
};

export default Header;
