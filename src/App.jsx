import './App.css'

import HomeHeader from './components/HomeHeader'
import HomeHero from './components/HomeHero'
import ContentProject from './components/ContentProject'
import ContentSkills from './components/ContentSkills'
import ContentExp from './components/ContentExp'
import Footer from './components/Footer'

import { ThemeProvider, ThemeContext } from './components/ThemeContext'
import {onLCP, onFID, onCLS} from 'web-vitals/attribution';

export default function App() {
  onCLS(console.log);
  onFID(console.log);
  onLCP(console.log);
  
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={`root-wrapper ${theme}`}>
            <div className={`app-wrapper ${theme}`}>
              <HomeHeader />
              <div className="separator" style={{
                width: '100%',
                height: '180px',
              }} />
              <div className="anchor"></div>
              <HomeHero />
              <div className="separator" style={{
                width: '100%',
                height: '150px',
              }} />
              <div className='home-content' id='aboutMe'>
                <ContentSkills />
                <div className="separator" style={{
                  width: '100%',
                  height: '100px',
                }} />
                <div id="anchor-project" className="anchor"></div>
                <ContentProject />
                <div className="separator" style={{
                  width: '100%',
                  height: '100px',
                }} />
                <div id="anchor-exp" className="anchor"></div>
                <ContentExp />
              </div>
              <div className="separator" style={{
                width: '100%',
                height: '100px',
              }} />
              <div className='footer-line'></div>
              <Footer />
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )
}