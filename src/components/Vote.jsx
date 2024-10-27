import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Vote = ({ contract }) => {
  const [partyId, setPartyId] = useState('');
  const [message, setMessage] = useState('');

  const vote = async () => {
    if (partyId === '') {
      setMessage('Please enter a valid party ID.');
      return;
    }

    try {
      const tx = await contract.vote(partyId);
      await tx.wait();
      setMessage(`Voted for party ID: ${partyId} successfully.`);
      setPartyId(''); // Reset input field after voting
    } catch (error) {
      console.error('Error voting for party:', error);
      setMessage('Failed to vote.');
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
          Vote for a Party
        </motion.h2>
        <input
          type="number"
          placeholder="Party ID"
          value={partyId}
          onChange={(e) => setPartyId(e.target.value)}
          className="mb-4 p-2 rounded-md w-full"
        />
        <button
          onClick={vote}
          className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Vote
        </button>
        {message && <p className="mt-4 text-red-400">{message}</p>}
      </div>
    </div>
  );
};

export default Vote;
