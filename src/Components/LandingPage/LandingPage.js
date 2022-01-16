import React, { useEffect } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="landing-content">
        <p>Hello 👋</p>
        <div className="main-content">
          I hope everyone is safe and sound. I designed different type of
          lending pages,application. it can help others to develop more ideas
          from this. I keep it simple and minimal. It can also help you find
          different options in exploring and improving your skills.
        </div>
        <br />
        <div className="main-content">
          I am available for new projects. I hope you show me your support😄
        </div>
        <br />
        <div className="main-content">I wish you luck,</div>
        <div className="main-content">Mert ❤️</div>
        <div>
          <img src="./assets/Vector.jpg" className="arrow" alt="arrow" />
        </div>
        <Link to="/login">
          <button>Buy me a Coffee</button>
        </Link>
      </div>
      <div className="landing-hero">
        <img src="./assets/hero.jpg" alt="hero" />
      </div>
    </div>
  )
}

export default LandingPage
