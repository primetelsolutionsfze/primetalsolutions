import React from 'react';
import './Section.css';
import './WhyPrimetel.css';

const WhyPrimetel = () => (
  <section className="section why-primetel-section" id="why-primetel">
    <div className="floating-shapes" data-aos="zoom-in" data-aos-delay="100">
      <div className="shape triangle"></div>
      <div className="shape circle"></div>
      <div className="shape square"></div>
    </div>
    <div className="section-content">
      <div className="section-header" data-aos="fade-up">
        <h1 className="section-heading" data-aos="fade-right" data-aos-delay="100">Why Choose <span className="gradient-text">Primetel?</span></h1>
        <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">What makes us different in the telecom software landscape</p>
      </div>
      
      <div className="benefits-grid">
        <div className="benefit-card" data-aos="flip-left" data-aos-delay="100">
          <div className="card-number" data-aos="zoom-in" data-aos-delay="150">01</div>
          <h3 data-aos="fade-up" data-aos-delay="200">Industry-Specific Expertise</h3>
          <p data-aos="fade-right" data-aos-delay="250">Deep telecom knowledge that generic vendors lack, with solutions built specifically for telco challenges.</p>
        </div>
        
        <div className="benefit-card" data-aos="flip-up" data-aos-delay="200">
          <div className="card-number" data-aos="zoom-in" data-aos-delay="250">02</div>
          <h3 data-aos="fade-up" data-aos-delay="300">Agile & Future-Focused</h3>
          <p data-aos="fade-right" data-aos-delay="350">Startup speed meets enterprise reliability, with architecture designed for 5G and beyond.</p>
        </div>
        
        <div className="benefit-card" data-aos="flip-right" data-aos-delay="300">
          <div className="card-number" data-aos="zoom-in" data-aos-delay="350">03</div>
          <h3 data-aos="fade-up" data-aos-delay="400">Proven at Scale</h3>
          <p data-aos="fade-right" data-aos-delay="450">Solutions that handle millions of transactions daily in Tier-1 operator environments.</p>
        </div>
        
        <div className="benefit-card" data-aos="flip-down" data-aos-delay="400">
          <div className="card-number" data-aos="zoom-in" data-aos-delay="450">04</div>
          <h3 data-aos="fade-up" data-aos-delay="500">Client-Centric Approach</h3>
          <p data-aos="fade-right" data-aos-delay="550">Co-development model ensuring solutions precisely match operational needs with measurable ROI.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyPrimetel;