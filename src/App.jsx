import './App.css'
import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeHero from './components/HomeHero'

import { DiJsBadge, DiReact, DiNodejsSmall, DiGit, DiPython, DiWordpress } from "react-icons/di";
import { SiTypescript, SiPostman, SiSplunk, SiFlutter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FcLinux } from "react-icons/fc";

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

export default function App() {
  // const skills = [
  //   { name: 'JavaScript', icon: DiJsBadge },
  //   { name: 'TypeScript', icon: SiTypescript },
  //   { name: 'React', icon: DiReact },
  //   { name: 'Node.js', icon: DiNodejsSmall },
  //   { name: 'Firebase', icon: IoLogoFirebase },
  //   { name: 'Postman', icon: SiPostman },
  //   { name: 'Splunk', icon: SiSplunk },
  //   { name: 'Git', icon: DiGit },
  //   { name: 'Linux', icon: FcLinux },
  //   { name: 'Python', icon: DiPython },
  //   { name: 'Wordpress', icon: DiWordpress },
  //   { name: 'Flutter', icon: SiFlutter },
  // ]
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
      <HomeHero />
      <div className="separator" style={{
        width: '100%',
        height: '180px',
      }} />
      <div className='home-content' id='aboutMe'>
        <div className='home-content-skill' id='skills'>
          <h1 style={{ margin:0}}>Skills</h1>
          <p style={{ margin:'1rem',width:'fit-content',color:'#0bbf6b',fontSize:'30px'}}>The skills, tools and technologies I know:</p>
          <div className='home-content-skill-icons'>
            {skills.map((skill, index) => (
              <div key={index} className='skill-item'>
                  <skill.icon />
                  <p>{skill.name}</p>
              </div>
            ))}
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