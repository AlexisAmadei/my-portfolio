import { GitHub, LinkedIn } from '@mui/icons-material'
import './styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <div><span>{"<A"}</span>lexis<span>{"/>"}</span></div>
      </div>
      <div className='footer-contact'>
        <div className='footer-contact-email'>
          <a href='mailto:alexisamadei@gmail.com' style={{textWrap:'nowrap'}}>alexisamadei@gmail.com</a>
        </div>
        <div className='footer-contact-phone'>
          <p style={{textWrap:'nowrap'}}>+33 7 67 27 81 46</p>
        </div>
        <div className='footer-social'>
          <a><LinkedIn /></a>
          <a><GitHub /></a>
        </div>
      </div>
    </div >
  )
}