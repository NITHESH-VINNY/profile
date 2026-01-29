import React from 'react'
import '../styles/skills.css'

export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js', 'Redux']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'WebSockets']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Elasticsearch']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'Kubernetes', 'Jenkins', 'Webpack', 'Vite']
    },
    {
      category: 'Other',
      skills: ['TypeScript', 'Testing (Jest, Mocha)', 'Agile', 'Microservices', 'CI/CD']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="skills-intro">
          I have extensive experience with a wide range of technologies and tools. 
          Here are the main areas I specialize in:
        </p>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>
                <i className="fas fa-star"></i>
                {skillGroup.category}
              </h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-extra">
          <div className="extra-item fade-in-up">
            <h3><i className="fas fa-book"></i> Continuous Learning</h3>
            <p>Always exploring new technologies and best practices in web development</p>
          </div>
          <div className="extra-item fade-in-up">
            <h3><i className="fas fa-users"></i> Collaboration</h3>
            <p>Experienced in working with teams, mentoring juniors, and code reviews</p>
          </div>
          <div className="extra-item fade-in-up">
            <h3><i className="fas fa-rocket"></i> Performance</h3>
            <p>Focused on optimizing applications for speed, scalability, and user experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
