import React from 'react'
import { projects } from '../data/projects'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="projects-intro">
          Here are some of my recent projects showcasing my full stack development capabilities
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="image-placeholder">
                  <i className={project.icon || 'fas fa-laptop-cod'}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
