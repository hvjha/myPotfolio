import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Harsh_img.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Harsh Vardhan Jha</h1>
        <h5 className="text-light">
          MERN Stack Developer | Aspiring Data Analyst / Data Scientist
        </h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src={ME}
            alt="Harsh Vardhan Jha profile"
            className="ME"
          />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
