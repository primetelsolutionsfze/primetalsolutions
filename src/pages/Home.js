import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Leadership from './Leadership';
import Projects from './Projects';
import Technologies from './Technologies';
import Industries from './Industries';
import WhyPrimetel from './WhyPrimetel';
import Contact from './Contact';
import './Home.css';
import Particles from './Particles';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 80, easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/" />
      </Helmet>
      <main className="home-scroll-container" aria-label="Home Page">
        {/* Cosmic Hero Section */}
        <section className="night-sky-hero" data-aos="fade-in" aria-labelledby="home-hero-heading">
          <div className="cosmic-overlay" role="presentation"></div>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
          <div className="cosmic-overlay" role="presentation"></div>
          <div className="twinkling" role="presentation"></div>
          <div className="nebula" role="presentation"></div>
          <div className="floating-elements" role="presentation"></div>
          <div className="satellite" role="presentation"></div>
          <div className="hero-content">
            <header className="hero-text">
              <h1 className="hero-title" id="home-hero-heading">
                <span className="gradient-highlight">Redefining Telecom</span> Through Digital Alchemy
              </h1>
              <p className="hero-subtitle">
                Primetel Solutions transforms telecommunications infrastructure with cutting-edge 
                software alchemy, turning data into gold and connectivity into art.
              </p>
              <nav className="cta-buttons" aria-label="Call to Action">
                <button 
                  className="btn-primary" 
                  onClick={() => navigate('/contact')}
                  data-aos="fade-up" 
                  data-aos-delay="300"
                  aria-label="Begin Transformation"
                >
                  Begin Transformation
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => navigate('/services')}
                  data-aos="fade-up" 
                  data-aos-delay="500"
                  aria-label="Discover Our Magic"
                >
                  Discover Our Magic
                </button>
              </nav>
            </header>
          </div>
        </section>

        {/* Content Sections */}
        <div className="content-sections">
          <section aria-label="About Section"><About /></section>
          <section aria-label="Services Section"><Services /></section>
          <section aria-label="Why Primetel Section"><WhyPrimetel /></section>
          <section aria-label="Technologies Section"><Technologies /></section>
          <section aria-label="Industries Section"><Industries /></section>
          <section aria-label="Projects Section"><Projects /></section>
          <section aria-label="Leadership Section"><Leadership /></section>
          <section aria-label="Contact Section"><Contact /></section>
        </div>
      </main>
    </>
  );
};

export default Home;