import React from 'react'
import { GitHub } from '@mui/icons-material'
import './styles/ContentProject.css'
import previewPIM from '../assets/preview/previewPIM.png'
import previewFT2 from '../assets/preview/previewFT2.png'
import previewTinapp from '../assets/preview/previewTinapp.png'
import { ThemeContext } from './ThemeContext'

export default function ContentProject() {
  const projects = [
    { name: 'PIM', description: 'Projet Intensif Mobile', tech: ["React", "JS", "Firebase", "Git"], link: "https://github.com/AlexisAmadei/PIMobile", preview: previewPIM },
    { name: 'FT2', description: 'Projet WebSchoolFactory dataviz', tech: ["React", "JS", "Git"], link: "https://github.com/AlexisAmadei/KEAPartners_reactApp", preview: previewFT2 },
    { name: 'Tinapp', description: 'Playground', tech: ["React", "JS", "Firebase", "Postman", "Git"], link: "https://github.com/AlexisAmadei/tinapp", preview: previewTinapp },
  ]
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`home-content-project ${theme}`}>
          <h1>Work</h1>
          <div className='project-container'>
            {projects.map((projet, index) => (
              <div key={index} className='project-item' onClick={() => window.open(projet.link)}>
                <img style={{ borderRadius: '16px' }} className='project-preview' src={projet.preview} width={"100%"} alt='project preview' />
                <h2>{projet.name}</h2>
                <p>{projet.description}</p>
                <div className='project-tech-container'>
                  {projet.tech.map((tech, index) => (
                    <span key={index} className='project-tech'>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='view-more'>
            <a href='https://github.com/AlexisAmadei?tab=repositories' target='_blank' rel='noreferrer'><button style={{ gap: "4px" }}><GitHub /> View more</button></a>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}