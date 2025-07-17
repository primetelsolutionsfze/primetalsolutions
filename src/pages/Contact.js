import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Section.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Form submission logic here
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-bg" data-aos="fade-in" data-aos-delay="100"></div>
      <div className="section-content">
        <div className="section-header" data-aos="fade-up">
          <h1 className="section-heading" data-aos="fade-right" data-aos-delay="100">Get In <span className="highlight">Touch</span></h1>
          <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Let's discuss how we can transform your telecom operations</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card" data-aos="flip-left" data-aos-delay="100">
              <div className="info-icon" data-aos="zoom-in" data-aos-delay="150">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 data-aos="fade-up" data-aos-delay="200">Email Us</h3>
              <a href="mailto:primetelsolutionsfze@gmail.com" data-aos="fade-left" data-aos-delay="250">primetelsolutionsfze@gmail.com</a>
            </div>
            
            <div className="info-card" data-aos="flip-up" data-aos-delay="200">
              <div className="info-icon" data-aos="zoom-in" data-aos-delay="250">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 data-aos="fade-up" data-aos-delay="300">Visit Us</h3>
              <p data-aos="fade-left" data-aos-delay="350">Saif Office, Q1-04-042/B<br/>Sharjah - U.A.E</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group" data-aos="fade-up" data-aos-delay="100">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                data-aos="fade-right"
                data-aos-delay="150"
              />
              <span className="input-border"></span>
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <span className="input-border"></span>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="input-border"></span>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
              <span className="btn-border"></span>
            </button>
            
            {submitted && (
              <div className="form-success">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;