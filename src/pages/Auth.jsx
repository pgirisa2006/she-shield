import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    // Redirect to Home after "Login"
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <header className="auth-header">
          <h1>SHE SHIELD</h1>
          <p className="auth-subtitle">Member Login</p>
        </header>

        <form className="auth-form" onSubmit={handleAuth}>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          
          <button type="submit" className="login-btn">
            {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? ' Sign Up' : ' Login'}
            </span>
          </p>
          <p className="session-tag">Reg No: 24BCB0009</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;