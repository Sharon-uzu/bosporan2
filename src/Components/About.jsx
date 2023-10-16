import React from 'react';
import handshake from '../images/handshake_1098-17050.avif';
import {PiLightbulbFilament} from 'react-icons/pi';
import {BiSolidFlagAlt} from 'react-icons/bi';
import {FaChessQueen} from 'react-icons/fa';
import {FaChessKnight} from 'react-icons/fa';
import {RiSearchEyeFill} from 'react-icons/ri';


const About = () => {
  return (
    <div>
        <div className="about" id='about'>
        <img src={handshake} alt="" />
        <div>
          <h6>About Us</h6>
          <h3>StreamlineBiz Solutions</h3>
          <p>Where Challenges Meet Solutions.</p>
          <p>Bosporan empower business with strategic insights and innovative solutions, enabling them to overcome challenges, maximize efficiency, and achieve sustainable growth. </p>

        </div>
      </div>

      <div className="about-2">
        <div className="dk"></div>
        <h6>Bosporan Groups</h6>
        <h3>How We Help</h3>
        <p>Bosporan provides a variety of services. We conduct in-depth analyses to identify bottlenecks and deficiencies across various business processes, we deliver comprehensive reports that offer actionable insights to clients.  </p>
        <a href=""><button className='btn'>Contact Us</button></a>

      </div>

      <div className="why">
        <h1>Why Bosporan</h1>

        <div className="serv">
          <PiLightbulbFilament className='icon'/>
          <p>We develop customized solutions that address the needs of each client.</p>
        </div>
        <div className="serv">
          <BiSolidFlagAlt className='icon'/>
          <p>We adapt and innovate to stay ahead of evolving business challenges.</p>
        </div>
        <div className="serv">
          <FaChessQueen className='icon'/>
          <p>We foster long-term client relationship built on trust, transparency/ collaboration.</p>
        </div>
        <div className="serv">
          <FaChessKnight className='icon'/>
          <p>We at Bosporan prioritize client satisfaction and success as our ultimate goal</p>
        </div>
        <div className="serv">
          <RiSearchEyeFill className='icon'/>
          <p>We cultivate a diverse/ talented team capable of tackling business challenge.</p>
        </div>
      </div>

    </div>
  )
}

export default About