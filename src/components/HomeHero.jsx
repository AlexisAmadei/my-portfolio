import './styles/HomeHero.css'
import Me from '../assets/me.png'

import { ThemeContext } from './ThemeContext'
import { useContext, useEffect, useState } from 'react'

export default function HomeHero() {
  const theme = useContext(ThemeContext);
  const [randomGreeting, setRandomGreeting] = useState('')
  const [blinkVisibility, setBlinkVisibility] = useState(true);
  const greeting = ['Hi', 'Bonjour', 'Hello', 'Salut'];

  useEffect(() => {
    setRandomGreeting(greeting[Math.floor(Math.random() * greeting.length)]);
    const intervalId = setInterval(() => {
      setBlinkVisibility(prevVisibility => !prevVisibility);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`home-hero ${theme}`}>
      <div className='home-hero-left'>
        <span style={{ fontSize: "40px" }}>{randomGreeting}, I'm</span>
        <br />
        <span style={{ fontSize: "58px" }}>Alexis Amadei
          <span id='blink' style={{ visibility: blinkVisibility ? 'visible' : 'hidden' }}>|</span>
        </span>
        <br />
        <span style={{ color: 'var(--light-text-secondary)', fontSize: '20px' }}>
          A passionnate
          <span style={{ color: 'var(--dark-accent)', textWrap: 'nowrap' }}>{' <Frontend Web Developer /> '}</span>
           willing to learn and grow.
        </span>
      </div>
      <div className='home-hero-right'>
        <img src={Me} alt='avatar' className='avatar' loading='lazy' />
      </div>
    </div>
  )
}
