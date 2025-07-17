import React, { useEffect } from 'react';
import './Section.css';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="section services-section" id="services">
    <div className="hexagon-bg" data-aos="zoom-in" data-aos-delay="100" />
    <div className="section-content">
      <div className="section-header" data-aos="fade-left">
        <h1 className="section-heading" data-aos="fade-up" data-aos-delay="100">Our <span className="highlight">Expert</span> Solutions</h1>
        <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200">Specialized services tailored for telecom innovation</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="hexagon-icon" data-aos="zoom-in" data-aos-delay="200">
            <svg viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2zm-2-6H7V5h10v2zm0 10H7v-2h10v2z" />
            </svg>
          </div>
          <h3 data-aos="fade-right" data-aos-delay="250">Custom Telco Software</h3>
          <ul>
            <li data-aos="fade-left" data-aos-delay="300">OSS/BSS platforms</li>
            <li data-aos="fade-left" data-aos-delay="350">Network monitoring</li>
            <li data-aos="fade-left" data-aos-delay="400">Billing automation</li>
            <li data-aos="fade-left" data-aos-delay="450">Customer management</li>
          </ul>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="hexagon-icon" data-aos="zoom-in" data-aos-delay="300">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <h3 data-aos="fade-right" data-aos-delay="350">Data & Analytics</h3>
          <ul>
            <li data-aos="fade-left" data-aos-delay="400">Real-time pipelines</li>
            <li data-aos="fade-left" data-aos-delay="450">Predictive analytics</li>
            <li data-aos="fade-left" data-aos-delay="500">BI dashboards</li>
            <li data-aos="fade-left" data-aos-delay="550">AI/ML automation</li>
          </ul>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="hexagon-icon" data-aos="zoom-in" data-aos-delay="400">
            <svg viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-3.72 0-6.86 2.51-7.77 6.04C2.82 10.74 2 11.83 2 13c0 2.21 1.79 4 4 4h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 15H6c-1.1 0-2-.9-2-2s.9-2 2-2h.42c.16-1.57 1.05-2.91 2.37-3.6C9.9 6.8 10.96 6.5 12 6.5c2.21 0 4 1.79 4 4h1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <h3 data-aos="fade-right" data-aos-delay="450">Integration</h3>
          <ul>
            <li data-aos="fade-left" data-aos-delay="500">API development</li>
            <li data-aos="fade-left" data-aos-delay="550">Legacy migration</li>
            <li data-aos="fade-left" data-aos-delay="600">Cloud-native</li>
            <li data-aos="fade-left" data-aos-delay="650">5G readiness</li>
          </ul>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <div className="hexagon-icon" data-aos="zoom-in" data-aos-delay="500">
            <svg viewBox="0 0 24 24">
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.3-.42 2.5-1.13 3.47l1.46 1.46C19.07 15.07 20 13.13 20 11c0-4.42-3.58-8-8-8zm-6.36.64l1.41 1.41C5.21 7.07 4 8.92 4 11c0 2.13.93 4.07 2.41 5.53l1.46-1.46C6.42 15.5 6 14.3 6 13c0-3.31 2.69-6 6-6v3l4-4-4-4v3c-2.21 0-4 1.79-4 4 0 1.3.42 2.5 1.13 3.47l-1.46 1.46C4.93 15.07 4 13.13 4 11c0-2.08 1.21-3.93 3.64-5.36z" />
            </svg>
          </div>
          <h3 data-aos="fade-right" data-aos-delay="550">DevOps</h3>
          <ul>
            <li data-aos="fade-left" data-aos-delay="600">Infrastructure automation</li>
            <li data-aos="fade-left" data-aos-delay="650">Observability</li>
            <li data-aos="fade-left" data-aos-delay="700">SLA monitoring</li>
            <li data-aos="fade-left" data-aos-delay="750">Zero-downtime</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;