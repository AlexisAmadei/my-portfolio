import './App.css'
import React from 'react'
import HomeHeader from './components/HomeHeader'

export default function App() {
  return (
    <div className='app-wrapper'>
      <HomeHeader />
      <div className='home-hero'>
        <div className='home-hero-left'></div>
        <div className='home-hero-right'></div>
      </div>
      <div className='home-content'>
        <div className='home-content-aboutMe'></div>
        <div className='home-content-skill'></div>
        <div className='home-content-project'>
          <div className='home-content-project-1'></div>
          <div className='home-content-project-2'></div>
          <div className='home-content-project-3'></div>
        </div>
        <div className='home-content-experience'>
          <div className='home-content-experience-1'></div>
          <div className='home-content-experience-2'></div>
        </div>
        <div className='home-content-education'></div>
        <div className='home-content-contactMe'></div>
      </div>
      <div className='home-footer'>
        <div className='home-footer-logo'></div>
        <div className='home-footer-contact'>
          <div className='home-footer-contact-email'></div>
          <div className='home-footer-contact-phone'></div>
          <div className='home-footer-social'></div>
        </div>
      </div>
    </div>
  )
}