import React from 'react'
import himg from './images/home-img.jpg'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home-image'>
        <img src={himg} alt="this is image" id="pcimg" />
        <img src="https://wallpapercave.com/wp/wp4772240.jpg" id="mobimg"alt="this is image" />
        <div className="home-headine">
            <span id="T1">T</span>
            <span id="T2">E</span>
            <span id="T3">S</span>
            <span id="T4">L</span>
            <span id="T5">A</span>
        <div className="home-tag">
            <span>To </span>
            <span>Accelerate </span>
            <span>The </span>
            <span>Advent </span>
            <span>Of </span>
            <span>Sustainable </span>
            <span>Transport </span>
            <span>And </span>
            <span>Electric </span>
            <span>Technology </span>
            <span>.</span>
        </div>
            
        </div>
        
    </div>
    
    
    </>
  )
}

export default Home