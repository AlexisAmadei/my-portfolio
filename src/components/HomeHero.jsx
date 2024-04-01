import React from 'react'
import './css/HomeHero.css'
import Avatar from '../assets/avatar.png'

export default function HomeHero() {
  return (
    <div className='home-hero'>
        <div className='home-hero-left'>
          <span style={{
            fontSize:"40px"
            }}>Hi, I'm</span>
          <br /><span style={{fontSize:"58px"}}>Alexis Amadei,</span>
          <br /><span style={{color:'#c0c0c0',fontSize:'20px'}}>A passionnate <span style={{color:"#0bbf6b"}}>{"<Frontend Web Developer />"}</span> willing to learn and grow.</span>
        </div>
        <div className='home-hero-right'>
          <img src={Avatar} alt='avatar' className='avatar' />
        </div>
      </div>
  )
}
