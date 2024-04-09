import React, { useState } from 'react';
import './css/ContentExp.css';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { LocationOn } from '@mui/icons-material';

export default function ContentExp() {
  const experiences = [
    {
      name: 'Frontend developer',
      company:'Accor',
      date: '2023 (2 months)',
      description: 'Lorem ipsum dolor sit amet',
      location: 'Issy-les-Moulineaux, France',
      skills: ['TypeScript', 'Python', 'GitLab', 'Splunk', 'Leaflet'],
    },
    {
      name: 'This Portfolio',
      date: '∞',
      description: `The website your eyes are currently on`,
      location: 'Paris, France',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Firebase Hosting'],
    },
  ];
  const [showDetails, setShowDetails] = useState(new Array(experiences.length).fill(false));
  const handleToggleDetails = (index) => {
    const updatedShowDetails = [...showDetails];
    updatedShowDetails[index] = !showDetails[index];
    setShowDetails(updatedShowDetails);
  };

  return (
    <div className='home-content-experience'>
      <p style={{ margin: '1rem', width: 'fit-content', color: '#0bbf6b', fontSize: '30px' }}>
        Here is a quick summary of my most recent experiences
      </p>
      {experiences.map((exp, index) => (
        <div key={index} className='experience-item'>
          <div className='experience-item-preview'>
            <h2>
              {exp.name}
              {exp?.company !== undefined && exp?.company !== '' ? ' at ' : exp?.company}
              <span style={{ color: 'var(--color-accent)' }}>{exp?.company}</span>
            </h2>
            <div className='experience-item-preview-rightSide'>
              <p style={{ fontSize: 'larger' }}>{exp.date}</p>
              <span style={{ cursor:'pointer' }} onClick={() => handleToggleDetails(index)}>
                {showDetails[index] ? (
                  <BiMinus style={{ color: 'var(--color-accent)', fontSize: 'larger' }} />
                ) : (
                  <BiPlus style={{ color: 'var(--color-accent)', fontSize: 'larger' }} />
                )}
              </span>
            </div>
          </div>
          {showDetails[index] ? (
            <div className='experience-item-details'>
              <p id='location'><LocationOn />{exp.location}</p>
              <p id='description'>{exp.description}</p>
              <div className='experience-item-skills'>
                {exp.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
