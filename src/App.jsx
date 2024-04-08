import './App.css'
import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeHero from './components/HomeHero'

import {
  IconJs,
  IconTypescript,
  IconReact,
  IconNode,
  IconFirebase,
  IconPostman,
  IconSplunk,
  IconGit,
  IconLinux,
  IconPython,
  IconWordpress,
  IconFlutter,
} from './assets/Icons';
import { GitHub } from '@mui/icons-material'

import previewPIM from './assets/preview/previewPIM.png'
import previewFT2 from './assets/preview/previewFT2.png'
import previewTinapp from './assets/preview/previewTinapp.png'
import ContentProject from './components/ContentProject';

export default function App() {
  const skills = [
    { name: 'JavaScript', icon: IconJs },
    { name: 'TypeScript', icon: IconTypescript },
    { name: 'React', icon: IconReact },
    { name: 'Node.js', icon: IconNode },
    { name: 'Firebase', icon: IconFirebase },
    { name: 'Postman', icon: IconPostman },
    { name: 'Splunk', icon: IconSplunk },
    { name: 'Git', icon: IconGit },
    { name: 'Linux', icon: IconLinux },
    { name: 'Python', icon: IconPython },
    { name: 'Wordpress', icon: IconWordpress },
    { name: 'Flutter', icon: IconFlutter },
  ]
  return (
    <div className='app-wrapper'>
      <HomeHeader />
      <div className="separator" style={{
        width: '100%',
        height: '120px',
      }} />
      <div className="anchor"></div>
      <HomeHero />
      <div className="separator" style={{
        width: '100%',
        height: '180px',
      }} />
      <div className='home-content' id='aboutMe'>
        <div id="anchor-skill" className="anchor"></div>
        <div className='home-content-skill' id='skills'>
          <h1 style={{ margin: 0 }}>Skills</h1>
          <p style={{ margin: '1rem', width: 'fit-content', color: '#0bbf6b', fontSize: '30px' }}>The skills, tools and technologies I know:</p>
          <div className='home-content-skill-icons'>
            {skills.map((skill, index) => (
              <div key={index} className='skill-item'>
                <skill.icon />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="separator" style={{
          width: '100%',
          height: '100px',
        }} />
        <div id="anchor-project" className="anchor"></div>
        <ContentProject />
        <div id="anchor-exp" className="anchor"></div>
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