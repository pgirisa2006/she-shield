import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const SOS = () => {
  // 1. Initialize state by checking localStorage first
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('emergencyContacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // 2. Automatically save to localStorage whenever the 'contacts' list changes
  useEffect(() => {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (e) => {
    e.preventDefault();
    if (name && phone) {
      const newContact = { id: Date.now(), name, phone };
      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
    }
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSOSAction = (contactPhone) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = encodeURIComponent(`EMERGENCY! I need help. My location: ${mapsLink}`);
        
        // STEP 1: Open SMS app
        window.location.href = `sms:${contactPhone}?body=${message}`;

        // STEP 2: Wait 3 seconds, then open the Phone Dialer
        setTimeout(() => {
          window.location.href = `tel:${contactPhone}`;
        }, 3000);
      }, () => {
        alert("Please enable location services to send your coordinates.");
      });
    }
  };

  return (
    <div className="page-layout">
      <Navbar />
      <div className="content-container centered-layout">
        <header className="page-header">
          <h1 style={{ color: 'white', fontSize: '30px' }}>Emergency Contacts</h1>
          <p className="sub-header">Logged in as: <span className="blue-text">Girisa</span></p>
        </header>

        <section className="contact-form-card">
          <h3>Add Trusted Contact</h3>
          <form className="sos-form" onSubmit={handleAddContact}>
            <div className="sos-input-row">
              <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
              <input type="text" placeholder="Phone (+91...)" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
              <button type="submit" className="save-btn">SAVE</button>
            </div>
          </form>

          <div className="contacts-list">
            {contacts.length === 0 ? (
              <p className="empty-msg">No contacts added yet.</p>
            ) : (
              contacts.map((c) => (
                <div key={c.id} className="contact-item">
                  <span className="contact-name">{c.name}</span>
                  <div className="contact-actions">
                    <button className="call-contact-btn" onClick={() => handleSOSAction(c.phone)}>
                      SOS ACTION
                    </button>
                    <button className="remove-btn" onClick={() => deleteContact(c.id)}>REMOVE</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SOS;
