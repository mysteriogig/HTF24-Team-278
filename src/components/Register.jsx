import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Register = ({ contract }) => {
  const [partyName, setPartyName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState('');

  const registerParty = async () => {
    if (!partyName || !leaderName || !dob) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const tx = await contract.registerParty(partyName);
      await tx.wait();
      setMessage(`Party "${partyName}" registered successfully.`);
      setPartyName(''); // Reset input field after registration
      setLeaderName(''); // Reset input field after registration
      setDob(''); // Reset input field after registration
    } catch (error) {
      console.error('Error registering party:', error);
      setMessage('Failed to register the party.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white flex items-center justify-center">
      <div className="container p-8 rounded-lg shadow-lg bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl mb-6"
        >
          Register a Party
        </motion.h2>
        <input
          type="text"
          placeholder="Party Name"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
          className="mb-4 p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Leader Name"
          value={leaderName}
          onChange={(e) => setLeaderName(e.target.value)}
          className="mb-4 p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="mb-4 p-2 rounded-md w-full"
        />
        <button
          onClick={registerParty}
          className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Register Party
        </button>
        {message && <p className="mt-4 text-red-400">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
