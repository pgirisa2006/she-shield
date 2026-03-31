import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const Report = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Report submitted successfully and encrypted.");
  };

  return (
    <div className="page-layout">
      <Navbar />
      
      <div className="content-container centered-layout">
        <div className="report-card-main">
          <header className="report-card-header">
            <h2>Secure Incident Report</h2>
            <p className="session-info">
              Session active for: <span className="blue-text">Girisa</span>
            </p>
          </header>

          <form className="report-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Incident Type</label>
              <select className="report-select">
                <option>Physical Harassment</option>
                <option>Stalking / Following</option>
                <option>Cyber Bullying / Threats</option>
                <option>Workplace Discrimination</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Description of the Incident</label>
              <textarea 
                className="report-textarea" 
                rows="6" 
                placeholder="Please provide as much detail as possible (Date, Time, Location, etc.)"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Evidence (Optional)</label>
              <div className="file-upload-zone">
                <p>Click to upload images or documents</p>
              </div>
            </div>

            <button type="submit" className="submit-report-btn">
              SEND ENCRYPTED REPORT
            </button>
          </form>
          
          <footer className="report-footer">
            <p>🛡️ Your identity and data are protected by end-to-end encryption.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Report;