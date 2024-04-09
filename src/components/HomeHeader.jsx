import React, { useContext, useState } from 'react'
import { LightMode, DarkMode } from '@mui/icons-material'
import "./css/HomeHeader.css"

import ThemeContext from './ThemeContext'

export default function HomeHeader() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={theme}>
    <div className='home-header'>
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
            onClick={setTheme}
          /> :
          <DarkMode
            style={{ cursor: "pointer" }}
            onClick={setTheme}
          />}
      </div>
      <div className='home-header-contactMe'>
        <div className='home-header-contactMe-theme'>
        {theme === 'dark' ?
          <LightMode
            style={{ cursor: "pointer" }}
            onClick={setTheme}
          /> :
          <DarkMode
            style={{ cursor: "pointer" }}
            onClick={setTheme}
          />}
        </div>
        <button>Contact Me</button>
      </div>
    </div>
    </ThemeContext.Provider>
  )
}
