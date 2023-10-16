import React from 'react';
import {useState} from 'react';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [activeNav, setActiveNav] = useState('/')

  return (
    <div>
        <header>
        
        <nav>

          <a href="#"><div className="logo">Bosporan</div></a>

          <ul className={click ? 'menu active' : 'menu'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          <div className='bars' onClick={handleClick}>
          {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
            
        </div>

        </nav>

        {/* <div className={click ? 'cover' : 'cover active'}></div> */}
      
      </header>
    </div>
  )
}

export default Header