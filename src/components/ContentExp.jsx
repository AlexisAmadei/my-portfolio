import React, { useState } from 'react'
import './css/ContentExp.css'
import { BiMinus, BiPlus } from 'react-icons/bi'

export default function () {
  const [showDetails, setShowDetails] = useState(true)

  const experiences = [
    {
      name: 'Frontend developer @ Accor',
      date: '2023 (2 months)',
      description: 'Lorem ipsum dolor sit amet',
      location: 'Paris, France',
      skills: ['Typescript', 'Python', 'GitLab'],
    },
  ]

  return (
    <div className='home-content-experience'>
      <p style={{ margin: '1rem', width: 'fit-content', color: '#0bbf6b', fontSize: '30px' }}>
        Here is a quick summary of my most recent experiences
      </p>
      {experiences.map((exp, index) => (
        <div key={index} className='experience-item'>
          <div className='experience-item-preview'>
            <h2>{exp.name}</h2>
            <div className='experience-item-preview-rightSide'>
              <p>{exp.date}</p>
              {showDetails ? (
                <span onClick={() => setShowDetails(!showDetails)}>
                  <BiPlus style={{ color: 'var(--color-accent)', fontSize: 'larger' }} />
                </span>
              ) : null}
              {!showDetails ? (
                <span onClick={() => setShowDetails(!showDetails)}>
                  <BiMinus style={{ color: 'var(--color-accent)', fontSize: 'larger' }} />
                </span>
              ) : null}
            </div>
          </div>
          {showDetails ? null : (
            <div className='experience-item-details'>
              <p>{exp.description}</p>
              <p>{exp.location}</p>
              <div className='experience-item-skills'>
                {exp.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            </div>
          )}
          {/* <div className='experience-item-details'>
            <p>{exp.description}</p>
            <p>{exp.location}</p>
            <div className='experience-item-skills'>
              {exp.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}


// 65536 ports