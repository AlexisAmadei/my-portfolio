import './css/HomeHero.css'
import Me from '../assets/me.png'

import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export default function HomeHero() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`home-hero ${theme}`}>
          <div className='home-hero-left'>
            <span style={{
              fontSize: "40px"
            }}>Hi, I'm</span>
            <br /><span style={{ fontSize: "58px" }}>Alexis Amadei,</span>
            <br /><span style={{ color: 'var(--light-text-secondary)', fontSize: '20px' }}>A passionnate <span style={{ color: 'var(--dark-accent)' }}>{'<Frontend Web Developer />'}</span> willing to learn and grow.</span>
          </div>
          <div className='home-hero-right'>
            <img src={Me} alt='avatar' className='avatar' />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
