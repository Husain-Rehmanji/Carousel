import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn  } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='noclash'>
      <div className="webfooter">
        <div className='menufooter'>
        <ul class="menu">
        <h2 className='fhead'><u>Our Services</u></h2>
            <li><a href="/">Digital Marketing</a></li>
            <li><a href="/">Project Guidance</a></li>
            <li><a href="/">Website Development</a></li>
            <li><a href="">Internships</a></li>
            <li><a href="/">Workshops on Board</a></li>
        </ul>
        </div>
        <div className='footercontent'>
        <h2 class="tagline"><u>Reach us through Social Media</u></h2>
        <ul class="icons">
            <li><a><FaGithub/></a></li>
            <li><a><FaLinkedinIn/></a></li>
            <li><a><FaInstagram/></a></li>
            <li><a><FaTwitter/></a></li>
            <li><a><FaFacebook/></a></li>
        </ul>
        </div>
        <div class="contact">
            <h2><u>Subscribe to our newsletter</u></h2>
            <div className="newsletter">
              <input type="text" placeholder="Enter your email" />
              <button>Join Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Footer
