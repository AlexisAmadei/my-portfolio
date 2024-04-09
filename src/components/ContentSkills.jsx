import React from 'react'

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
} from '../assets/Icons';

export default function ContentSkills() {
  const skills = [
    { name: 'JavaScript', icon: IconJs },
    { name: 'TypeScript', icon: IconTypescript },
    { name: 'React', icon: IconReact },
    { name: 'Node.js', icon: IconNode },
    { name: 'Python', icon: IconPython },
    { name: 'Git', icon: IconGit },
    { name: 'Firebase', icon: IconFirebase },
    { name: 'Postman', icon: IconPostman },
    { name: 'Splunk', icon: IconSplunk },
    { name: 'Wordpress', icon: IconWordpress },
    { name: 'Flutter', icon: IconFlutter },
    { name: 'Linux', icon: IconLinux },
  ]
  return (
    <div className='home-content-skill' id='skills'>
      <div id="anchor-skill" className="anchor"></div>
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
  )
}
