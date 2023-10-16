import React from 'react';
import blog1 from '../images/hero.jpeg'
import blog2 from '../images/handshake_1098-17050.avif'
import blog3 from '../images/multi-ethnic-people-entrepreneur-small-business-concept-woman-showing-coworkers-something-laptop-computer-as-they-gather-around-conference-table_146671-15123.avif'


const Blog = () => {
  return (
    <div className='blogs' id='blog'>
        <h1>Blog Posts</h1>

        <div className="blog">
            <div className='blog-con'>
                <img src={blog1} alt=""/>
                
                <div>
                    <h2>A Roadmap for Success</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, dolor? Excepturi, cupiditate maxime culpa debitis id, odit rerum architecto, temporibus eaque molestiae beatae. Laboriosam modi dolor natus alias eius quidem?</p>
                    <a href="">Read more</a>
                </div>
                    
            </div>

        
        </div>

        <div className="blog">
            <div className='blog-con'>
                <img src={blog2} alt=""/>
                
                <div>
                    <h2>Recognizing and rewarding employees</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, dolor? Excepturi, cupiditate maxime culpa debitis id, odit rerum architecto, temporibus eaque molestiae beatae. Laboriosam modi dolor natus alias eius quidem?</p>
                    <a href="">Read more</a>
                </div>
                    
            </div>

        
        </div>

        <div className="blog">
            <div className='blog-con'>
                <img src={blog3} alt=""/>
                
                <div>
                    <h2>How to Build a Best Place to Work</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, dolor? Excepturi, cupiditate maxime culpa debitis id, odit rerum architecto, temporibus eaque molestiae beatae. Laboriosam modi dolor natus alias eius quidem?</p>
                    <a href="">Read more</a>
                </div>
                    
            </div>

        
        </div>


    </div>
  )
}

export default Blog