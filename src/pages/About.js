import React from 'react';
import './Section.css';
import './About.css';

const About = () => (
  <section className="section about-section" id="about">
    <div className="circles-bg">
      {[...Array(10)].map((_, i) => <div key={i} className="floating-circle" data-aos="zoom-in" data-aos-delay={i * 60 + 100} />)}
    </div>
    <div className="section-content">
      <div className="section-header" data-aos="fade-right">
        <h1 className="section-heading" data-aos="fade-up" data-aos-delay="100">About <span className="gradient-text">Primetel</span></h1>
        <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Shaping telecom's future through software innovation</p>
      </div>
      
      <div className="about-grid">
        <div className="about-card" data-aos="flip-left" data-aos-delay="100">
          <div className="circle-icon" data-aos="zoom-in" data-aos-delay="200">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </div>
          <h3 data-aos="fade-up" data-aos-delay="250">Who We Are</h3>
          <p data-aos="fade-up" data-aos-delay="300">Telecom software specialists bridging legacy systems with next-gen technology through innovative engineering.</p>
        </div>
        
        <div className="about-card" data-aos="flip-up" data-aos-delay="200">
          <div className="circle-icon" data-aos="zoom-in" data-aos-delay="300">
            <svg viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </div>
          <h3 data-aos="fade-up" data-aos-delay="350">Our Vision</h3>
          <p data-aos="fade-up" data-aos-delay="400">To redefine telecom infrastructure through intelligent software that anticipates industry evolution.</p>
        </div>
        
        <div className="about-card" data-aos="flip-right" data-aos-delay="300">
          <div className="circle-icon" data-aos="zoom-in" data-aos-delay="400">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
            </svg>
          </div>
          <h3 data-aos="fade-up" data-aos-delay="450">Our Mission</h3>
          <ul className="mission-list">
            <li data-aos="fade-left" data-aos-delay="500">Transform telecom operations through data intelligence</li>
            <li data-aos="fade-left" data-aos-delay="550">Build resilient, future-ready platforms</li>
            <li data-aos="fade-left" data-aos-delay="600">Deliver measurable ROI through innovation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;