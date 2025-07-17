import React, { useEffect } from 'react';
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
    <div className="home-scroll-container">
      {/* Cosmic Hero Section */}
      <section className="night-sky-hero" data-aos="fade-in">
        <div className="cosmic-overlay"></div>
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
          <div className="cosmic-overlay"></div>
        <div className="twinkling"></div>
       <div className="nebula"></div>
        <div className="floating-elements"></div>
        <div className="satellite"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-highlight">Redefining Telecom</span> Through Digital Alchemy
            </h1>
            <p className="hero-subtitle">
              Primetel Solutions transforms telecommunications infrastructure with cutting-edge 
              software alchemy, turning data into gold and connectivity into art.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn-primary" 
                onClick={() => navigate('/contact')}
                data-aos="fade-up" 
                data-aos-delay="300"
              >
                Begin Transformation
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => navigate('/services')}
                data-aos="fade-up" 
                data-aos-delay="500"
              >
                Discover Our Magic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="content-sections">
        <section><About /></section>
        <section><Services /></section>
        <section><WhyPrimetel /></section>
        <section><Technologies /></section>
        <section><Industries /></section>
        <section><Projects /></section>
        <section><Leadership /></section>
        <section><Contact /></section>
      </div>
    </div>
  );
};

export default Home;