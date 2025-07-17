import React, { useEffect } from 'react';
import './Section.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="section projects-section" id="projects">
    <div className="diagonal-bg" data-aos="fade-in" data-aos-delay="100"></div>
    <div className="section-content">
      <div className="section-header" data-aos="fade-up">
        <h1 className="section-heading" data-aos="fade-right" data-aos-delay="100">Our <span className="highlight">Projects</span></h1>
        <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Innovative solutions transforming telecom operations</p>
      </div>
      
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
          <div className="timeline-content">
            <div className="timeline-date" data-aos="zoom-in" data-aos-delay="150">2023</div>
            <h3 data-aos="fade-right" data-aos-delay="200">Real-time Call Quality Monitoring</h3>
            <p data-aos="fade-left" data-aos-delay="250">For a leading MNO in Central Europe, reducing complaints by 40% with AI-driven analysis of 2M+ calls daily.</p>
          </div>
        </div>
        
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
          <div className="timeline-content">
            <div className="timeline-date" data-aos="zoom-in" data-aos-delay="250">2022</div>
            <h3 data-aos="fade-right" data-aos-delay="300">Churn Prediction Engine</h3>
            <p data-aos="fade-left" data-aos-delay="350">Machine learning solution for Tier-2 operator achieving 85% accuracy in identifying at-risk customers.</p>
          </div>
        </div>
        
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
          <div className="timeline-content">
            <div className="timeline-date" data-aos="zoom-in" data-aos-delay="350">2021</div>
            <h3 data-aos="fade-right" data-aos-delay="400">Billing Fraud Detection</h3>
            <p data-aos="fade-left" data-aos-delay="450">Cloud-native system saving $2M annually by identifying fraudulent patterns in real-time.</p>
          </div>
        </div>
        
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
          <div className="timeline-content">
            <div className="timeline-date" data-aos="zoom-in" data-aos-delay="450">2020</div>
            <h3 data-aos="fade-right" data-aos-delay="500">Network Congestion Heatmaps</h3>
            <p data-aos="fade-left" data-aos-delay="550">GIS-integrated system improving network efficiency by 30% through predictive modeling.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Projects;