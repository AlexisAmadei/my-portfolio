import React, { useState } from 'react';
import './styles/ContentExp.css';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { LocationOn } from '@mui/icons-material';
import { ThemeContext } from './ThemeContext';

export default function ContentExp() {
  const experiences = [
    {
      name: 'Frontend developer',
      company: 'Accor',
      date: '2023 (2 months)',
      description: 'Working on severals internals tools like splunk and GitLaB. Also working on a map project using Leaflet. I also worked on with TypeScript and Python to automate some tasks.',
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
    <ThemeContext.Consumer>
    {({ theme }) => (
      <div className={`home-content-experience ${theme}`}>
        <p style={{ margin: '1rem', width: 'fit-content', color: 'var(--dark-accent)', fontSize: '30px' }}>
          Here is a quick summary of my most recent experiences
        </p>
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-item ${theme}`}>
            <div className='experience-item-preview'>
              <h2>
                {exp.name}
                {exp?.company !== undefined && exp?.company !== '' ? ' at ' : exp?.company}
                <span style={{ color: 'var(--dark-accent)' }}>{exp?.company}</span>
              </h2>
              <div className='experience-item-preview-rightSide'>
                <p style={{ fontSize: 'larger' }}>{exp.date}</p>
                <span style={{ cursor: 'pointer' }} onClick={() => handleToggleDetails(index)}>
                  {showDetails[index] ? (
                    <BiMinus style={{ color: 'var(--dark-accent)', fontSize: 'larger' }} />
                  ) : (
                    <BiPlus style={{ color: 'var(--dark-accent)', fontSize: 'larger' }} />
                  )}
                </span>
              </div>
            </div>
            {showDetails[index] ? (
              <div className='experience-item-details'>
                <p id='location'><LocationOn />{exp.location}</p>
                <p id='description'>{exp.description}</p>
                <div className={`experience-item-skills ${theme}`}>
                  {exp.skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    )}
    </ThemeContext.Consumer>
  );
}
