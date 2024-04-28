import React, { useContext, useEffect, useState } from 'react'
import { LightMode, DarkMode } from '@mui/icons-material'
import "./styles/HomeHeader.css"

import {ThemeContext} from './ThemeContext'

export default function HomeHeader() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [modal, setModal] = useState('closed');
  function toggleModal() {
    if (modal === 'closed') {
      setModal('open')
    } else {
      setModal('closed')
    }
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`home-header ${theme}`}>
        <div className='home-header-logo'>
          <div><span>{"<A"}</span>lexis<span>{"/>"}</span></div>
        </div>
        <div className='home-header-nav'>
          <ol>
            <li><a href='#'>Home</a></li>
            <li><a href='#anchor-skill'>Skills</a></li>
            <li><a href='#anchor-project'>Projects</a></li>
            <li><a href='#anchor-exp'>Experience</a></li>
          </ol>
        </div>
        <div className='home-header-themeIcon'>
          {theme === 'dark' ?
            <LightMode
              style={{ cursor: "pointer" }}
              onClick={toggleTheme}
            /> :
            <DarkMode
              style={{ cursor: "pointer" }}
              onClick={toggleTheme}
            />}
        </div>
        <div className='home-header-contactMe'>
          <div className='home-header-contactMe-theme'>
            { theme === 'dark' ?
                <DarkMode style={{ cursor: "pointer" }} onClick={toggleTheme} /> :
                <LightMode style={{ cursor: "pointer" }} onClick={toggleTheme} /> }
          </div>
          <button onClick={toggleModal} id='contact-button'>Contact Me</button>
        </div>
        <div className={`contact-modal ${modal}`}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h2>Contact Me</h2>
                <form>
                  <input type='text' placeholder='Name' />
                  <input type='email' placeholder='Email' />
                  <textarea placeholder='Message'></textarea>
                  <button type='submit'>Send</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
