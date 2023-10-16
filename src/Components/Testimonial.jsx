import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import '../App.css';
import prof from '../images/prof-removebg-preview.png'


const Testimonial = () => {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <div className='multi' id='testimonial'>

        <h1>TESTIMONIAL</h1>
        
        <Carousel responsive={responsive}>
          <div className='slides'>
              <div className='slide'>
                  <img src={prof} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus minima aperiam consequuntur dolorum ex at blanditiis provident expedita, temporibus, vel harum. Ea ad enim magni, nihil quidem deleniti vel.</p>
                  <h4>John Doe</h4>
              </div>
          </div>

          <div className='slides'>
              <div className='slide'>
                  <img src={prof} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus minima aperiam consequuntur dolorum ex at blanditiis provident expedita, temporibus, vel harum. Ea ad enim magni, nihil quidem deleniti vel.</p>
                  <h4>John Doe</h4>
              </div>
          </div>

          <div className='slides'>
              <div className='slide'>
                  <img src={prof} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus minima aperiam consequuntur dolorum ex at blanditiis provident expedita, temporibus, vel harum. Ea ad enim magni, nihil quidem deleniti vel.</p>
                  <h4>John Doe</h4>
              </div>
          </div>

          <div className='slides'>
              <div className='slide'>
                  <img src={prof} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus minima aperiam consequuntur dolorum ex at blanditiis provident expedita, temporibus, vel harum. Ea ad enim magni, nihil quidem deleniti vel.</p>
                  <h4>John Doe</h4>
              </div>
          </div>
          <div className='slides'>
              <div className='slide'>
                  <img src={prof} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus minima aperiam consequuntur dolorum ex at blanditiis provident expedita, temporibus, vel harum. Ea ad enim magni, nihil quidem deleniti vel.</p>
                  <h4>John Doe</h4>
              </div>
          </div>

          <div className='slides'>
              <div className='slide'>
                  <img src={prof} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus minima aperiam consequuntur dolorum ex at blanditiis provident expedita, temporibus, vel harum. Ea ad enim magni, nihil quidem deleniti vel.</p>
                  <h4>John Doe</h4>
              </div>
          </div>
          
        </Carousel>

    </div>
    )
}

export default Testimonial