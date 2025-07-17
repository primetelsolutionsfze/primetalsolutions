import React, { useEffect } from 'react';
import './Section.css';
import './Industries.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Industries = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="section industries-section" id="industries">
    <div className="globe-container" data-aos="zoom-in" data-aos-delay="100">
      <div className="globe"></div>
    </div>
    <div className="section-content">
      <div className="section-header" data-aos="fade-up">
        <h1 className="section-heading" data-aos="fade-right" data-aos-delay="100">Industries <span className="highlight">We Serve</span></h1>
        <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Specialized solutions for telecom sectors worldwide</p>
      </div>
      
      <div className="industries-grid">
        <div className="industry-card" data-aos="flip-left" data-aos-delay="100">
          <h3 data-aos="fade-up" data-aos-delay="150">Mobile Network Operators</h3>
          <p data-aos="fade-right" data-aos-delay="200">Comprehensive solutions for cellular service providers of all sizes</p>
          <div className="stats">
            <div className="stat" data-aos="zoom-in" data-aos-delay="250">
              <span className="stat-number">15+</span>
              <span className="stat-label">MNO Clients</span>
            </div>
          </div>
        </div>
        
        <div className="industry-card" data-aos="flip-up" data-aos-delay="200">
          <h3 data-aos="fade-up" data-aos-delay="250">Internet Service Providers</h3>
          <p data-aos="fade-right" data-aos-delay="300">Bandwidth management and customer experience platforms</p>
          <div className="stats">
            <div className="stat" data-aos="zoom-in" data-aos-delay="350">
              <span className="stat-number">8+</span>
              <span className="stat-label">ISP Clients</span>
            </div>
          </div>
        </div>
        
        <div className="industry-card" data-aos="flip-right" data-aos-delay="300">
          <h3 data-aos="fade-up" data-aos-delay="350">Virtual Network Operators</h3>
          <p data-aos="fade-right" data-aos-delay="400">Cost-effective infrastructure for virtual providers</p>
          <div className="stats">
            <div className="stat" data-aos="zoom-in" data-aos-delay="450">
              <span className="stat-number">12+</span>
              <span className="stat-label">MVNO Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Industries;