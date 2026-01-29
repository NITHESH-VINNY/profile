import React, { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Let's Work Together</h2>
        <p className="contact-intro">
          Have a project in mind or just want to chat? Feel free to reach out. 
          I'm always interested in hearing about new opportunities!
        </p>

        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:nithesh@example.com">nithesh@example.com</a></p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+91-8008779935">+91 8008779935</a></p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Bengaluru</p>
              </div>
            </div>
            <div className="contact-socials">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form fade-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </button>
            {submitted && <p className="success-message">Thanks for reaching out! I'll get back to you soon.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
