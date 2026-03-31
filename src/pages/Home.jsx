import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-layout">
      <Navbar />
      
      <main className="home-container">
        {/* Hero Section - Split Layout */}
        <section className="home-hero">
          <div className="hero-text-content">
            <p className="greeting">Good Night</p>
            <h1 className="hero-title">Your Safety, <br />Our Priority.</h1>
            <p className="hero-description">
              A comprehensive support system providing real-time 
              emergency tools and legal awareness for women.
            </p>
            <button 
              className="report-incident-btn" 
              onClick={() => navigate('/report')}
            >
              REPORT INCIDENT
            </button>
          </div>
    
          <div className="hero-image-box">
            {/* Replace with your actual image path */}
            <img 
              src="src/assets/1.jpg" 
              alt="Safety Illustration" 
              className="hero-illustration"
            />
          </div>
        </section>
        <button 
          className="floating-sos-btn" 
          onClick={() => navigate('/sos')}
        >
          SOS
        </button>

        {/* Feature Grid - 3 Column Layout */}
        <section className="home-grid">
          <div className="feature-card" onClick={() => navigate('/sos')}>
            <h3 className="blue-text">Emergency SOS</h3>
            <p>One-tap help dialing.</p>
          </div>
          
          <div className="feature-card" onClick={() => navigate('/tips')}>
            <h3 className="blue-text">Safety Tips</h3>
            <p>Guides for all environments.</p>
          </div>
          
          <div className="feature-card" onClick={() => navigate('/legal')}>
            <h3 className="blue-text">Legal Rights</h3>
            <p>Know your legal shield.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;