import React from 'react';
import './Section.css';
import './Leadership.css';

const Leadership = () => (
  <section className="section leadership-section" id="leadership">
    <div className="section-content">
      <div className="section-header" data-aos="fade-down">
        <h1 className="section-heading" data-aos="fade-up" data-aos-delay="100">Our <span className="highlight">Leadership</span></h1>
        <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Experienced team driving telecom innovation</p>
      </div>
      
      <div className="team-grid">
        <div className="team-card" data-aos="flip-left" data-aos-delay="100">
          <div className="card-image" data-aos="zoom-in" data-aos-delay="200">
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3 data-aos="fade-up" data-aos-delay="250">John Smith</h3>
            <p className="position" data-aos="fade-right" data-aos-delay="300">CEO & Founder</p>
            <p className="bio" data-aos="fade-left" data-aos-delay="350">20+ years in telecom software architecture and engineering</p>
          </div>
        </div>
        
        <div className="team-card" data-aos="flip-up" data-aos-delay="200">
          <div className="card-image" data-aos="zoom-in" data-aos-delay="300">
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3 data-aos="fade-up" data-aos-delay="350">Sarah Johnson</h3>
            <p className="position" data-aos="fade-right" data-aos-delay="400">CTO</p>
            <p className="bio" data-aos="fade-left" data-aos-delay="450">Data systems specialist with telco infrastructure expertise</p>
          </div>
        </div>
        
        <div className="team-card" data-aos="flip-right" data-aos-delay="300">
          <div className="card-image" data-aos="zoom-in" data-aos-delay="400">
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3 data-aos="fade-up" data-aos-delay="450">Michael Chen</h3>
            <p className="position" data-aos="fade-right" data-aos-delay="500">Head of Engineering</p>
            <p className="bio" data-aos="fade-left" data-aos-delay="550">Cloud-native systems architect and DevOps expert</p>
          </div>
        </div>
      </div>
      
      <div className="location-info">
        <div className="location-card" data-aos="zoom-in-up" data-aos-delay="400">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <h3 data-aos="fade-up" data-aos-delay="450">Global Presence</h3>
          <p data-aos="fade-left" data-aos-delay="500">Headquartered in Sharjah, UAE with teams across Europe and Asia</p>
        </div>
      </div>
    </div>
  </section>
);

export default Leadership;