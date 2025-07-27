import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './WhyPrimetel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyPrimetel = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetalsolutions.com/why" />
      </Helmet>
      <section className="section why-primetel-section" id="why-primetel" aria-labelledby="why-heading">
        <div className="floating-shapes" data-aos="zoom-in" data-aos-delay="100" role="presentation">
          <div className="shape triangle"></div>
          <div className="shape circle"></div>
          <div className="shape square"></div>
        </div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="why-heading" data-aos="fade-right" data-aos-delay="100">Why Choose <span className="gradient-text">Primetel?</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">What makes us different in the telecom software landscape</p>
          </header>
          <div className="benefits-grid" role="list" aria-label="Primetel Benefits">
            <article className="benefit-card" data-aos="flip-left" data-aos-delay="100" role="listitem">
              <div className="card-number" data-aos="zoom-in" data-aos-delay="150" aria-hidden="true">01</div>
              <h3 data-aos="fade-up" data-aos-delay="200">Industry-Specific Expertise</h3>
              <p data-aos="fade-right" data-aos-delay="250">Deep telecom knowledge that generic vendors lack, with solutions built specifically for telco challenges.</p>
            </article>
            <article className="benefit-card" data-aos="flip-up" data-aos-delay="200" role="listitem">
              <div className="card-number" data-aos="zoom-in" data-aos-delay="250" aria-hidden="true">02</div>
              <h3 data-aos="fade-up" data-aos-delay="300">Agile & Future-Focused</h3>
              <p data-aos="fade-right" data-aos-delay="350">Startup speed meets enterprise reliability, with architecture designed for 5G and beyond.</p>
            </article>
            <article className="benefit-card" data-aos="flip-right" data-aos-delay="300" role="listitem">
              <div className="card-number" data-aos="zoom-in" data-aos-delay="350" aria-hidden="true">03</div>
              <h3 data-aos="fade-up" data-aos-delay="400">Proven at Scale</h3>
              <p data-aos="fade-right" data-aos-delay="450">Solutions that handle millions of transactions daily in Tier-1 operator environments.</p>
            </article>
            <article className="benefit-card" data-aos="flip-down" data-aos-delay="400" role="listitem">
              <div className="card-number" data-aos="zoom-in" data-aos-delay="450" aria-hidden="true">04</div>
              <h3 data-aos="fade-up" data-aos-delay="500">Client-Centric Approach</h3>
              <p data-aos="fade-right" data-aos-delay="550">Co-development model ensuring solutions precisely match operational needs with measurable ROI.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPrimetel;