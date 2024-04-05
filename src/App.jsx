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
  const projects = [
    { name: 'PIM', description: 'Projet Intensif Mobile', tech: ["React", "JS", "Firebase", "Git"], link:"https://github.com/AlexisAmadei/PIMobile", preview: previewPIM},
    { name: 'FT2', description: 'Projet WebSchoolFactory dataviz', tech: ["React", "JS", "Git"], link:"https://github.com/AlexisAmadei/KEAPartners_reactApp", preview: previewFT2},
    { name: 'Appli personnelle', description: 'Playground perso', tech: ["React", "firebase", "Postman", "Git"], link:"https://github.com/AlexisAmadei/tinapp", preview: previewTinapp},
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
        height: '180px',
      }} />
      <div className='home-content' id='aboutMe'>
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
        <div className='home-content-project'>
          <h1>Work</h1>
          <div className='project-container'>
            {projects.map((projet, index) => (
              <div key={index} className='project-item'>
                <img style={{borderRadius:'0.6rem'}} className='project-preview' src={projet.preview} width={"100%"} alt='project preview' />
                <h2>{projet.name}</h2>
                <p>{projet.description}</p>
                <div className='project-tech-container'>
                <a href={projet.link} target='_blank' rel='noreferrer'><p><GitHub style={{ color:"white" }} /></p></a>
                  {projet.tech.map((tech, index) => (
                    <span key={index} className='project-tech'>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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