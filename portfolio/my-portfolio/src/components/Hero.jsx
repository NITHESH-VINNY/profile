import React from 'react'
import '../styles/hero.css'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-text">
            <h1>Hi, I'm <br></br>Nithesh Vinny</h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I create beautiful and functional web applications using modern technologies. 
              Specializing in React, Node.js, MongoDB, and cloud solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/NITHESH-VINNY" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:your.email@example.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
