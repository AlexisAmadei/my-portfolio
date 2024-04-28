import './styles/ContentSkills.css';
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
import { ThemeContext } from './ThemeContext';

export default function ContentSkills() {
  const skills = [
    { name: 'JavaScript', icon: IconJs },
    { name: 'TypeScript', icon: IconTypescript },
    { name: 'React', icon: IconReact },
    { name: 'Node.js', icon: IconNode },
    { name: 'Python', icon: IconPython },
    { name: 'Flutter', icon: IconFlutter },
    { name: 'Git', icon: IconGit },
    { name: 'Firebase', icon: IconFirebase },
    { name: 'Postman', icon: IconPostman },
    { name: 'Splunk', icon: IconSplunk },
    { name: 'Wordpress', icon: IconWordpress },
    // { name: 'Linux', icon: IconLinux },
  ]
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`home-content-skill ${theme}`} id='skills'>
          <div id="anchor-skill" className="anchor"></div>
          <h1 style={{ margin: 0 }}>Skills</h1>
          <p style={{ margin: '1rem', width: 'fit-content', color: 'var(--dark-accent)', fontSize: '30px' }}>The skills, tools and technologies I know:</p>
          <div className='home-content-skill-icons'>
            {skills.map((skill, index) => (
              <div key={index} className='skill-item'>
                <skill.icon />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
