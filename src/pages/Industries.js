import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <link rel="canonical" href="https://primetalsolutions.com/industries" />
      </Helmet>
      <section className="section industries-section" id="industries" aria-labelledby="industries-heading">
        <div className="globe-container" data-aos="zoom-in" data-aos-delay="100" role="presentation">
          <div className="globe"></div>
        </div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="industries-heading" data-aos="fade-right" data-aos-delay="100">Industries <span className="highlight">We Serve</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Specialized solutions for telecom sectors worldwide</p>
          </header>
          <div className="industries-grid" role="list" aria-label="Industries Served">
            <article className="industry-card" data-aos="flip-left" data-aos-delay="100" role="listitem">
              <h3 data-aos="fade-up" data-aos-delay="150">Mobile Network Operators</h3>
              <p data-aos="fade-right" data-aos-delay="200">Comprehensive solutions for cellular service providers of all sizes</p>
              <div className="stats">
                <div className="stat" data-aos="zoom-in" data-aos-delay="250">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">MNO Clients</span>
                </div>
              </div>
            </article>
            <article className="industry-card" data-aos="flip-up" data-aos-delay="200" role="listitem">
              <h3 data-aos="fade-up" data-aos-delay="250">Internet Service Providers</h3>
              <p data-aos="fade-right" data-aos-delay="300">Bandwidth management and customer experience platforms</p>
              <div className="stats">
                <div className="stat" data-aos="zoom-in" data-aos-delay="350">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">ISP Clients</span>
                </div>
              </div>
            </article>
            <article className="industry-card" data-aos="flip-right" data-aos-delay="300" role="listitem">
              <h3 data-aos="fade-up" data-aos-delay="350">Virtual Network Operators</h3>
              <p data-aos="fade-right" data-aos-delay="400">Cost-effective infrastructure for virtual providers</p>
              <div className="stats">
                <div className="stat" data-aos="zoom-in" data-aos-delay="450">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">MVNO Clients</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;