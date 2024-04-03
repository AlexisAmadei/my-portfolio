import './App.css'
import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeHero from './components/HomeHero'

import { Javascript } from '@mui/icons-material'

export default function App() {
  const skills = [
    { name:'JavaScript', icon: Javascript },
    { name:'TypeScript', icon: '' },
    { name:'React', icon: '' },
    { name:'Node.js', icon: '' },
    { name:'Firebase', icon: '' },
    { name:'Postman', icon: '' },
    { name:'Splunk', icon: '' },
    { name:'Git', icon: '' },
    { name:'Linux', icon: '' },
    { name:'Python', icon: '' },
    { name:'Wordpress', icon: '' },
  ]
  return (
    <div className='app-wrapper'>
      <HomeHeader />
      <div className="separator" style={{
        width: '100%',
        height: '120px',
      }} />
      <HomeHero />
      <div className="separator" style={{
        width: '100%',
        height: '250px',
      }} />
      <div className='home-content' id='aboutMe'>
        <div className='home-content-skill'>
          <h1>Skills</h1>
          <p>The skills, tools and technologies I know:</p>
          <div className='home-content-skill-icons'>
            {/* skills */}
          </div>
        </div>
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