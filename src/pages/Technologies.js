import React from 'react';
import './Section.css';
import './Technologies.css';

const Technologies = () => (
  <section className="section technologies-section" id="technologies">
    <div className="particles-bg" id="particles-js" data-aos="fade-in" data-aos-delay="100"></div>
    <div className="section-content">
      <div className="section-header" data-aos="fade-up">
        <h1 className="section-heading" data-aos="fade-right" data-aos-delay="100">Our <span className="tech-text">Tech Stack</span></h1>
        <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Cutting-edge tools powering telecom innovation</p>
      </div>
      
      <div className="tech-grid">
        <div className="tech-category" data-aos="flip-left" data-aos-delay="100">
          <div className="category-header" data-aos="zoom-in" data-aos-delay="150">
            <div className="pulse-dot"></div>
            <h3 data-aos="fade-up" data-aos-delay="200">Languages</h3>
          </div>
          <ul>
            <li data-aos="fade-right" data-aos-delay="250">Python</li>
            <li data-aos="fade-right" data-aos-delay="300">Go</li>
            <li data-aos="fade-right" data-aos-delay="350">Java</li>
            <li data-aos="fade-right" data-aos-delay="400">TypeScript</li>
            <li data-aos="fade-right" data-aos-delay="450">Rust</li>
          </ul>
        </div>
        
        <div className="tech-category" data-aos="flip-up" data-aos-delay="200">
          <div className="category-header" data-aos="zoom-in" data-aos-delay="250">
            <div className="pulse-dot"></div>
            <h3 data-aos="fade-up" data-aos-delay="300">Data Processing</h3>
          </div>
          <ul>
            <li data-aos="fade-right" data-aos-delay="350">Apache Kafka</li>
            <li data-aos="fade-right" data-aos-delay="400">Apache Flink</li>
            <li data-aos="fade-right" data-aos-delay="450">Spark</li>
            <li data-aos="fade-right" data-aos-delay="500">ClickHouse</li>
            <li data-aos="fade-right" data-aos-delay="550">TimescaleDB</li>
          </ul>
        </div>
        
        <div className="tech-category" data-aos="flip-right" data-aos-delay="300">
          <div className="category-header" data-aos="zoom-in" data-aos-delay="350">
            <div className="pulse-dot"></div>
            <h3 data-aos="fade-up" data-aos-delay="400">Platforms</h3>
          </div>
          <ul>
            <li data-aos="fade-right" data-aos-delay="450">Kubernetes</li>
            <li data-aos="fade-right" data-aos-delay="500">Docker</li>
            <li data-aos="fade-right" data-aos-delay="550">AWS</li>
            <li data-aos="fade-right" data-aos-delay="600">GCP</li>
            <li data-aos="fade-right" data-aos-delay="650">Azure</li>
          </ul>
        </div>
        
        <div className="tech-category">
          <div className="category-header">
            <div className="pulse-dot"></div>
            <h3>Analytics</h3>
          </div>
          <ul>
            <li>Grafana</li>
            <li>Tableau</li>
            <li>PowerBI</li>
            <li>Superset</li>
            <li>Custom BI</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;