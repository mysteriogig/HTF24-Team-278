// src/Register.jsx
import React, { useState } from 'react';

const Register = ({ contract }) => {
  const [partyName, setPartyName] = useState('');
  const [message, setMessage] = useState('');

  const registerParty = async () => {
    if (!partyName) {
      setMessage('Please enter a party name.');
      return;
    }

    try {
      const tx = await contract.registerParty(partyName);
      await tx.wait();
      setMessage(`Party "${partyName}" registered successfully.`);
    } catch (error) {
      console.error('Error registering party:', error);
      setMessage('Failed to register the party.');
    }
  };

  return (
    <div className="container">
      <h2>Register a Party</h2>
      <input
        type="text"
        placeholder="Party Name"
        value={partyName}
        onChange={(e) => setPartyName(e.target.value)}
      />
      <button onClick={registerParty}>Register Party</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
