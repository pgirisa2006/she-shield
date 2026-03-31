import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Global Styles
import './App.css';

// Import All Page Components
import Auth from './pages/Auth';
import Home from './pages/Home';
import SOS from './pages/SOS';
import Tips from './pages/Tips';
import Legal from './pages/Legal';
import Report from './pages/Report';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          {/* 1. Auth Page - The default landing screen */}
          <Route path="/" element={<Auth />} />

          {/* 2. Home Page */}
          <Route path="/home" element={<Home />} />

          {/* 3. SOS Page */}
          <Route path="/sos" element={<SOS />} />

          {/* 4. Safety Tips Page */}
          <Route path="/tips" element={<Tips />} />

          {/* 5. Legal Rights Page */}
          <Route path="/legal" element={<Legal />} />

          {/* 6. Secure Report Page */}
          <Route path="/report" element={<Report />} />

          {/* Fallback: If a user types a wrong URL, redirect them to Login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;