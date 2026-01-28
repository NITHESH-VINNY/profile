import React from 'react'
import '../styles/about.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in-up">
            <p>
              I'm a passionate Full Stack Developer with 4+ years of experience building web applications. 
              I specialize in creating responsive, user-friendly interfaces and robust backend solutions.
            </p>
            <p>
              My journey in development started with a curiosity about how things work on the web. 
              Since then, I've worked with startups and established companies, delivering high-quality solutions 
              that solve real-world problems.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
              When I'm not coding, you'll find me contributing to open-source projects, blogging about web development, 
              or exploring new frameworks and tools.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image fade-in-down">
            <div className="about-card">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
