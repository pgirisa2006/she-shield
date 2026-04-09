import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

// This internal component handles the individual dropdown state
const LawItem = ({ law }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`law-card-item ${isOpen ? 'active' : ''}`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="law-card-top">
        <span className="law-title">{law.title}</span>
        <span className={`expand-icon ${isOpen ? 'rotate' : ''}`}>↓</span>
      </div>
      
      {isOpen && (
        <div className="law-card-body">
          <p>{law.description}</p>
        </div>
      )}
    </div>
  );
};

const Legal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const laws = [
    { id: 1, title: "Zero FIR Policy", description: "A woman can file an FIR at any police station, regardless of where the incident took place." },
    { id: 2, title: "POSH Act, 2013", description: "Protection of Women against Sexual Harassment at the workplace, ensuring a safe environment." },
    { id: 3, title: "Right to Free Legal Aid", description: "Women are entitled to free legal services from the Legal Services Authority." },
    { id: 4, title: "The Right to Privacy", description: "A woman has the right to record her statement in private, before a lady police officer." },
    { id: 5, title: "Equal Remuneration Act", description: "Ensures equal pay for equal work, preventing gender-based discrimination in wages." },
    { id: 6, title: "Stalking Laws (354D IPC)", description: "Strict laws against physical or digital stalking and monitoring without consent." }
  ];

  const filteredLaws = laws.filter(law => 
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-layout">
      <Navbar />

      <div className="content-container centered-layout">
        <header className="page-header">
          <h1 style={{ color: 'white',fontSize: '30px' }}>Legal Shield: Know Your Rights</h1>
          <p className="sub-header">Search for specific keywords like 'Work', 'Police', or 'Cyber'.</p>
        </header>

        <div className="search-wrapper">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Type to filter laws..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="laws-list-container">
          {filteredLaws.length > 0 ? (
            filteredLaws.map((law) => (
              <LawItem key={law.id} law={law} />
            ))
          ) : (
            <p className="no-results">No laws found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Legal;
