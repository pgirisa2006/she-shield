import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

const SOS = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddContact = (e) => {
    e.preventDefault();
    if (name && phone) {
      // Each contact now gets a unique ID for easier removal
      const newContact = { id: Date.now(), name, phone };
      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
    }
  };

  // NEW: Function to remove a contact by ID
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="page-layout">
      <Navbar />
      
      <div className="content-container centered-layout">
        <header className="page-header">
          <h1 className="white-text">Emergency Contacts</h1>
          <p className="sub-header">
            Manage your trusted network. Logged in as: <span className="blue-text">Girisa</span>
          </p>
        </header>

        <section className="contact-form-card">
          <h3>Add Trusted Contact</h3>
          <form className="sos-form" onSubmit={handleAddContact}>
            <div className="sos-input-row">
              <input 
                type="text" 
                placeholder="Contact Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input 
                type="text" 
                placeholder="Phone Number (with +91)" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit" className="save-btn">SAVE</button>
            </div>
          </form>

          <div className="contacts-list">
            {contacts.length === 0 ? (
              <p className="empty-msg">No contacts added yet.</p>
            ) : (
              contacts.map((c) => (
                <div key={c.id} className="contact-item">
                  <div className="contact-info">
                    <span className="contact-name">{c.name}</span>
                    <span className="contact-phone blue-text">{c.phone}</span>
                  </div>
                  {/* NEW: Remove Button */}
                  <button 
                    className="remove-btn" 
                    onClick={() => deleteContact(c.id)}
                  >
                    REMOVE
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <button className="trigger-emergency-btn">
          TRIGGER EMERGENCY ALERT
        </button>
      </div>
    </div>
  );
};

export default SOS;