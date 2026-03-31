import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const Tips = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const tipData = [
    {
      id: 1,
      category: "WORKPLACE",
      title: "Workplace Safety",
      points: [
        "Familiarize yourself with all emergency exits and fire escape routes.",
        "Trust your instincts; report unwelcome behavior to HR immediately.",
        "Maintain professional boundaries and document suspicious incidents.",
        "Avoid working alone in isolated office areas after standard hours."
      ]
    },
    {
      id: 2,
      category: "TRAVEL",
      title: "Travel & Commuting",
      points: [
        "Always share your live location with a trusted contact via the SOS page.",
        "Stay alert and avoid using headphones in secluded areas.",
        "Use registered transport apps and check child locks before entering.",
        "Wait for public transport in well-lit areas near other commuters."
      ]
    },
    {
      id: 3,
      category: "ONLINE",
      title: "Digital & Online Safety",
      points: [
        "Enable Two-Factor Authentication (2FA) on all important accounts.",
        "Don't share real-time locations or personal details with strangers.",
        "Use strong, unique passwords and a reliable password manager.",
        "Be cautious of phishing links, even if they appear from known sources."
      ]
    }
  ];

  const filteredTips = activeFilter === "ALL" 
    ? tipData 
    : tipData.filter(tip => tip.category === activeFilter);

  return (
    <div className="page-layout">
      <Navbar />
      <div className="content-container">
        <header className="tips-header">
          <h1>Safety Resources</h1>
          <p className="sub-header">Essential guides for your daily security. Logged in as: <span className="blue-text">Girisa</span></p>
        </header>

        <div className="filter-btns-container">
          {["ALL", "WORKPLACE", "TRAVEL", "ONLINE"].map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tips-stack">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="tip-card-full">
              <div className="tip-image-placeholder">
                {/* Visual element placeholder to match Image 9 */}
                <div className="img-box">
                   <span className="img-icon">🛡️</span>
                </div>
              </div>
              <div className="tip-text-content">
                <h3 className="blue-text">{tip.title}</h3>
                <ul className="tip-bullets">
                  {tip.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;