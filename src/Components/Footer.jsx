import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
        <div className="foot">

            <div className='foot1'>
                <h1>Bosporan Groups Ltd</h1>
                <p>Where Challenges Meet Solutions.</p>

            </div>
            <div className="foots">

            <div className='foot2'>
                <h2>Links</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="#testimonial">Testimonials</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#tips">Entreprenuer Tips</a></li>
                    <li><a href="#upcoming">Upcoming Events</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            


            <div className='foot3'>
                <h2>Social Links</h2>
                <ul>
                    <li><a href=""><FaFacebook/></a></li>
                    <li><a href=""><FaTwitter/></a></li>
                    <li><a href=""><FaInstagram/></a></li>
                </ul>
            </div>

            </div>

            

        </div>
        <p className='copy'>© 2023 Bosporan Groups Ltd. All rights reserved</p>

    </footer>
  )
}

export default Footer